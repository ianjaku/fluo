import typescript from "rollup-plugin-typescript2"

const options = {
  plugins: [
    typescript({
      cacheRoot: "node_modules/.cache",
      tsconfigDefaults: {
        compilerOptions: {
          removeComments: true
        }
      }
    })
  ],
  watch: {
    include: "src/**"
  }
}

export default [
  {
    input: "src/fluo.ts",
    output: {
      banner: `/* Invacto Fluo */`,
      file: "dist/fluo.js",
      format: "umd",
      name: "Turbolinks",
      sourcemap: true
    },
    ...options
  },

  // {
  //   input: "src/tests/index.ts",
  //   output: {
  //     file: "dist/tests.js",
  //     format: "cjs",
  //     sourcemap: true
  //   },
  //   external: [
  //     "intern"
  //   ],
  //   ...options
  // }
]