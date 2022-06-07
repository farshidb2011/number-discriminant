/** @type { import('rollup').RollupOptions}*/
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import {terser} from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    // exclude tests
    external: ["__tests__"],
    output: [
    //   {
    //     file: packageJson.main,
    //     format: "cjs",
    //     sourcemap: true,
    //   },
      {
        file: 'dist/index.min.js',
        format: "cjs",        
        sourcemap: true,
        plugins: [
          terser({
            toplevel: true,
          }),
        ],
      },
    //   {
    //     file: packageJson.module,
    //     format: "esm",
    //     sourcemap: true,
    //   },
    //   {
    //     file: 'esm/index.min.js',
    //     format: "esm",
    //     sourcemap: true,
    //     plugins: [
    //       terser({
    //         module: true,
    //       }),
    //     ],
    //   },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
//   {
//     input: "dist/esm/index.d.ts",
//     output: [{ file: "dist/types/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//   },
];