import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import preserveDirectives from "rollup-plugin-preserve-directives";

const extensions = [".js", ".jsx", ".ts", ".tsx", ".mjs"];

const sources = [
  "src/components/generic/index.ts",
  "src/components/input/index.ts",
  "src/theme/index.tsx",
  "src/fonts.ts",
];

const config = sources.map((source) => ({
  external: [/node_modules/],
  input: source,
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
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions,
      include: ["src/**/*"],
    }),
    preserveDirectives({
      include: ["use strict", "global", "use client"],
    }),
  ],
}));

export default config;
