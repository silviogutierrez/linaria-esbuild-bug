const linaria = require('@linaria/esbuild').default;
const esbuild = require('esbuild');

const prod = process.env.NODE_ENV === 'production';

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    outdir: 'dist',
    bundle: true,
    minify: prod,
    plugins: [
      linaria({
        sourceMap: prod,
      }),
    ],
  })
  .catch(() => process.exit(1));
