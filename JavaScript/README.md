# Linting at Salt - JavaScript

Hi again! At Salt you're expected to set up a linter in each and every project. The reason why we insist on always using linters is that being confident with these tools is often expected at work places.

Unless instructed otherwise, the minimum linting setup that you're expected to use in your projects is the following:

- [The ESLint tool](https://eslint.org/docs/user-guide/getting-started), combined with
- [the Salt configuration](https://www.npmjs.com/package/eslint-config-salt)

To create this basic linting setup, for running vanilla JavaScript, run the following command in the root of your project: `npm install eslint-config-salt --save-dev` (you can inspect the package.json in one of the correct directory for you to see that we're using this configuration). Then copy the `.eslintrc.json` file from this repo and its contents. Now all you need to do is to create the lint commands described in the `package.json` from this repo.

There are other ESLint configurations (like airbnb, standard, Google etc) and ESLint is also highly [configurable](https://eslint.org/docs/user-guide/configuring). We suggest that you throughout the course play around with different setups of ESLint to get fully comfortable with the tool.

## This Repository

In this repository we've set up a very barebones application structure in which we're using the linting setup described above. Install the dependencies with `npm install` and try out the scripts `npm run lint` and `npm run lint-watch`, respectively. Note that the `npm run lint-watch` command is dependent on nodemon which is a developer tool (you don't have to run your linting in watch mode if you don't want do). Compare the results in of the terminal output with the comments in the`index.js` file to see if you managed to run the linter correctly.

## Prettier is a code formatter, not a linter

[Prettier](https://www.npmjs.com/package/prettier) is a code formatter that takes care of formatting your code according to a certain style. However, it doesn't handle _code quality rules_ (which linters do). Linters handle both _code style_ and _code quality_ means that if you're using both a linter and Prettier, there's a risk of Prettier and the linter colliding. There are ways to combine Prettier and linters in efficiently and safely, but since we want you to be fully confident with linters we suggest that you refrain from using Prettier during the salt bootcamp.

## Conclusion

Linting is important, especially in a professional environment. We expect you to be comfortable with the linting setup described in this repository, so go ahead and start implementing it in all your projects!