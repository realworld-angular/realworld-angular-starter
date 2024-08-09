# Realworld Angular Starter

![continuous integration](https://github.com/realworld-angular/realworld-angular-starter/actions/workflows/continuous-integration.yml/badge.svg)

## Development setup

To run the documentation locally, you need to have [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/fr/) installed on your machine.

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm start
```

The application will be available at [http://localhost:4200](http://localhost:4200) by default. Check your terminal for the exact URL.

## Commands reference

All commands are run from the root of the project, from a terminal:

| Command                             | Action                                         |
|:------------------------------------|:-----------------------------------------------|
| `pnpm install`                      | Installs dependencies                          |
| `pnpm start`                        | Starts local dev server at `localhost:4200`    |
| `pnpm build`                        | Build your production site to `./dist/browser` |
| `pnpm exec playwright test`         | Run e2e tests                                  |
| `pnpm exec playwright test --ui`    | Run e2e tests in interactive UI mode           |
| `pnpm exec playwright test --debug` | Runs the tests in debug mode.                  |
| `pnpm exec playwright codegen`      | Auto generate tests with Codegen               |
| `pnpm run test-storybook`           | Run Storybook tests                            |


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
