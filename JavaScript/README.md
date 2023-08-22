# Linting at Salt - JavaScript

Hi again! At Salt, you're expected to set up a linter for each project. The reason why we insist on always using linting tools is to be confident with these tools as these are often used in companies.

Unless instructed otherwise, the minimum linting setup that you're expected to use in your projects is the following:

- [The ESLint tool](https://eslint.org/docs/user-guide/getting-started), using the `eslint:recommended` settings

To create this basic linting setup, for running vanilla JavaScript, run the following command in the root of your project: `npm init @eslint/config` (you can inspect the package.json in one of the correct directories for you to see that we're using this configuration).
```bash
npm init @eslint/config                                          
✔ How would you like to use ESLint? · problems # To check syntax and find problems
✔ What type of modules does your project use? · esm # JavaScript
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · 'No'
✔ Where does your code run? · 'browser', 'node'
✔ What format do you want your config file to be in? · JavaScript
```

Your `.eslintrc.js` should look like the [this eslint file](./.eslintrc.js)

> Note: There are other ESLint configurations (like standard, Google etc) and ESLint is also highly [configurable](https://eslint.org/docs/user-guide/configuring). We suggest that you throughout the course play around with different setups of ESLint to get fully comfortable with the tool.

## This Repository

This repository demonstrates a very basic nodejs based application. And we use ESLint in it using the same instructions as above. Install the dependencies with `npm install` and try out the scripts `npm run lint` and `npm run lint-watch`, respectively. Note that the `npm run lint-watch` command is dependent on nodemon which is a developer tool. The **watch** mode helps us keep the lint server up and running so we don't have to restart it as we're fixing the problems. Compare the results of the terminal output with the comments in the`index.js` file to see if you managed to run the linter correctly. Also, make sure your VSCode shows the same errors using the [ESLint VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Conclusion

Linting is important, especially in a professional environment. We expect you to be comfortable with the linting setup described in this repository, so go ahead and start implementing it in all your projects!