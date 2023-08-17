import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

const extensions = [".js", ".jsx", ".ts", ".tsx", ".mjs"];

const sources = [
  {
    dir: "src/components/generic/index.ts",
    name: "generic",
  },
  {
    dir: "src/components/input/index.ts",
    name: "input",
  },
  {
    dir: "src/theme/index.tsx",
    name: "theme",
  },
];

const config = sources.map((source) => ({
  external: [/node_modules/],
  input: source.dir,
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
  ],
}));

export default config;
