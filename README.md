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


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://gerome.dev"><img src="https://avatars.githubusercontent.com/u/32737308?v=4?s=100" width="100px;" alt="Gerome Grignon"/><br /><sub><b>Gerome Grignon</b></sub></a><br /><a href="#maintenance-geromegrignon" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ZvSimon"><img src="https://avatars.githubusercontent.com/u/73712759?v=4?s=100" width="100px;" alt="Simon"/><br /><sub><b>Simon</b></sub></a><br /><a href="#code-ZvSimon" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/lucas-derhore-591549150/"><img src="https://avatars.githubusercontent.com/u/91560378?v=4?s=100" width="100px;" alt="Ldh"/><br /><sub><b>Ldh</b></sub></a><br /><a href="#code-LucasDerhore" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
