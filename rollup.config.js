
/** @type {import('rollup').RollupOptions} */
/** @type {import('rollup').OutputOptions} */

import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/partridge.browser.min.js',
				format: 'iife',
				name: 'Partridge',
				plugins: [terser()]
			},
			{
				file: 'dist/partridge.browser.js',
				name: 'Partridge',
				format: 'iife',
			},
			{
				file: 'dist/partridge.cjs.js',
				format: 'cjs',
				exports: 'auto'
			},
			{
				file: 'dist/partridge.esm.js',
				format: 'esm',
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				sourceMap: true,
				exclude: ['node_modules/**', '**/types'],
			}),
			
		]
	}
];
