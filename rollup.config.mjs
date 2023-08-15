import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

const extensions = [".js", ".jsx", ".ts", ".tsx", ".mjs"];

const sources = [
  {
    dir: "stories/components/generic/index.ts",
    name: "generic",
  },
  {
    dir: "stories/components/input/index.ts",
    name: "input",
  },
  {
    dir: "theme/index.tsx",
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
      entryFileNames: source.name + ".js",
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions }),
    commonjs({ include: "node_modules/**" }),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./dist/types",
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
      include: ["stories/**/*", "theme/**/*"],
    }),
  ],
}));

export default config;
