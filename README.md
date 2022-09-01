# emotion-react-props-css-typescript

A demo about using `@emotion/react`'s `css` props in a typescript react project that is creates by `create-react-app`.

## steps

https://tzynwang.github.io/emotion-react-props-css-typescript/

1. run `npm run eject`
2. install `@emotion/babel-preset-css-prop`
3. In `tsconfig.json`:
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@emotion/react",
  },
}
```
4. In `config/webpack.config.js`:
```js
{
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  include: paths.appSrc,
  options: {
    presets: [
      require.resolve('@emotion/babel-preset-css-prop'), // add this line
      [
        require.resolve('babel-preset-react-app'),
        {
          runtime: hasJsxRuntime ? 'automatic' : 'classic',
        },
      ],
    ],
  },
},
```
