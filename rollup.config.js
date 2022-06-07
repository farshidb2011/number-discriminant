import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/index.ts',
	output:{
		file:'dist/bundle.js',
		format: 'iife',
		name: 'PartridgeHelper'
	},
	plugins:[
		typescript({
			compilerOptions:{
				lib: ["es5", "es6","esnext"],
				target: "es5"
			}
		}),
		terser()
	]
};
