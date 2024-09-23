const fs = require("node:fs");
const path = require("node:path");
const { generateApi } = require("swagger-typescript-api");

fetch(`https://api-staging.coinpaymints.com/swagger/v1/swagger.json`)
  .then(res => res.json())
  .then(res => {
    fs.writeFileSync(
      path.resolve(process.cwd(), "swagger.json"),
      JSON.stringify({
        ...res,
        paths: Object.entries(res.paths).reduce((acc, [path, methods]) => {
          const filtered = Object.entries(methods).filter(([method, params]) => {
            return /Supports Auth methods: (.*)/gi.exec(params.summary)[1].toLowerCase().replaceAll(/\s/gi, '') !== '[oauth]';
          });
          if (filtered.length) {
            return {
              ...acc,
              [path]: filtered.reduce((iacc, [method, params]) => ({
                ...iacc,
                [method]: params
              }), {})
            };
          } else {
            return acc;
          }
        }, {})
      }, null, 2)
    );

    return generateApi({
      name: "index.ts",
      output: path.resolve(process.cwd(), "dist"),
      input: path.resolve(process.cwd(), "swagger.json"),
      templates: path.resolve(process.cwd(), "api-templates"),
      httpClientType: "fetch",
      generateClient: true,
      generateRouteTypes: true,
      prettier: {
        printWidth: 120,
        tabWidth: 2,
        trailingComma: "all",
        parser: "typescript",
      },
      singleHttpClient: true,
      cleanOutput: true,
      sortTypes: true,
      sortRouters: true
    });
  });