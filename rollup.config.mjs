import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import preserveDirectives from "rollup-plugin-preserve-directives";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";

const extensions = [".js", ".jsx", ".ts", ".tsx", ".mjs"];

const sources = [
  "src/components/generic/index.ts",
  "src/components/input/index.ts",
  "src/theme/index.tsx",
];

const config = sources.map((source) => ({
  external: [/node_modules/],
  input: source,
  treeshake: {
    moduleSideEffects: ["**/*.styles.ts"],
  },
  output: [
    {
      dir: "./dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions }),
    commonjs({ include: "node_modules/**" }),
    json(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./dist",
      declarationMap: true,
      emitDeclarationOnly: true,
      outDir: "./dist",
      exclude: ["node_modules", "**/*.stories.tsx"],
    }),
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
            targets: {
              browsers: [
                "last 2 versions",
                "not dead",
                "not ios < 12",
                "not safari < 12",
              ],
            },
          },
        ],
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions,
      include: ["src/**/*"],
      plugins: ["@emotion"],
    }),
    preserveDirectives({
      supressPreserveModulesWarning: true,
      include: ["use strict", "global", "use client"],
    }),
    url({
      include: ["**/*.woff"],
      limit: Infinity,
      fileName: "[dirname][name][extname]",
    }),
  ],
}));

export default config;
