# Linting at Salt - TypeScript

Hi again! At Salt you're expected to set up a linter in each and every project. The reason why we insist on always using linters is that being confident with these tools is often expected at work places.

Unless instructed otherwise, the minimum linting setup that you're expected to use in your projects is the following:

- [Follow the ESLint setup for TypeScript](https://typescript-eslint.io/getting-started/) using the eslint:recommended and @typescript/eslint-recommended plugins

> Note: There are other ESLint configurations (like standard, Google etc) and ESLint is also highly [configurable](https://eslint.org/docs/user-guide/configuring). We suggest that you throughout the course play around with different setups of ESLint to get fully comfortable with the tool.

Now, you should have a `.eslintrc.js` file created in the `TypeScript` folder having code as follows:
```js
/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};
```

Let's flip the extended dependencies in the `.eslintrc.js` as follows:

```ts
/* eslint-env node */
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'], // <-- we changed this
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};
```

Since this is a nodejs application (and now a browser-based application), we need to tell ESLint that. Update the `.eslintrc.js` as follows:
```ts
/* eslint-env node */
module.exports = {
  env: { // add this block
      node: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};
```

If you don't have a `lint` script already in your project, create one in the `package.json` file:

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "eslint **/*.ts"
  }
}
```

Run `npm run lint` to execute the lint process for your application.

## This Repository

This repository demonstrates a very basic nodejs based application with TypeScript. And we use ESLint in it using the same instructions as above. Install the dependencies with `npm install` and try out the scripts `npm run lint` and `npm run lint-watch`, respectively. Note that the `npm run lint-watch` command is dependent on nodemon which is a developer tool. The **watch** mode helps us keep the lint server up and running so we don't have to restart it as we're fixing the problems. Compare the results of the terminal output with the comments in the`index.ts` file to see if you managed to run the linter correctly. Also, make sure your VSCode shows the same errors using the [ESLint VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Conclusion

Linting is important, especially in a professional environment. We expect you to be comfortable with the linting setup described in this repository, so go ahead and start implementing it in all your projects!
