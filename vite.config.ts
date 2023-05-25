import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default ({ mode }) => {
  const envPath = path.resolve(__dirname, `.env.${mode}`);
  const env = require(envPath);

  return defineConfig({
    plugins: [
      svgr({
        exportAsDefault: true,
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          dimensions: false,
          svgo: true,
          svgoConfig: {
            plugins: [
              'removeTitle',
              'removeXMLNS',
              'removeDimensions',
              'collapseGroups',
              {
                name: 'convertStyleToAttrs',
                params: {
                  keepImportant: false,
                },
              },
              {
                name: 'removeAttrs',
                params: {
                  attrs: ['fill', 'fill-rule', 'stroke', 'version', 'class'],
                },
              },
            ],
          },
        },
      }),
      react(),
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    root: path.resolve('./'),
    publicDir: path.resolve('./public'),
    define: { 'process.env': JSON.stringify(env) },
    server: {
      host: true,
      port: 3000,
      open: false,
      hmr: {
        overlay: true,
      },
    },
    preview: {
      port: 3000,
    },
    build: {
      outDir: path.resolve('./.dist'),
      manifest: true,
      minify: 'esbuild',
    },
    // resolve: {
    //   alias: {
    //     '@PathExample': path.resolve(__dirname, 'src/pathExample'),
    //   },
    //   extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // },
  });
};
