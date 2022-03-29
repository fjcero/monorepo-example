# Monorepo Example

This project was generated using [Nx](https://nx.dev).

## POC checkilist

- [x] Setup Monorepo with Nx
- [x] Install NextJS with Typescript support
- [x] Support for `styled-components` 
- [x] Shared `ui-components`
- [x] Storybook configuration for existent components
- [x] Install main React dependencies: `react-query`, `formik`
- [x] Absolute paths for apps in `tsconfig.base.json`
- [ ] Microfrontends POC: embed app within another
- [ ] Support for NextJS Dynamic routing to redirect Experiments
- [ ] Feature Flag support with Optimizely
- [ ] Test SSR component and route
- [ ] State management using React hooks (Redux style)
- [ ] Define Styled Components Theme
- [ ] PWA configuration
- [ ] Consider Tailwind as addition of `styled-components`
- [ ] Document `nx` code generators to maximize reusability and structure
- [ ] Docker container
- [ ] Deployment with Github Actions
- [ ] Playwright for E2E testing

## App Structure

- UI Components
  - Navbar
  - Bottom navbar (mobile)
  - Journal
  - Notifications (push nots?)
- New `insights-app`
  - Daily insights (education)
- New `discussions-app`
  - Secret Chats
- New `daily-notes`
  - Edit text

## Tech Stack

- Nx (Nrwl)
- React
- NextJS
- Storybook
- React Query
- Styled Components
- Formik

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.


## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. 

## Nx cheatsheet and tools

### Create a new App or Lib

When using Nx, you can create multiple applications and libraries in the same workspace.

> 💡 You can use any of the plugins in the community to generate applications

**Create new React app**
```sh
npx nx g @nwrl/react:app <app_name>
```

**Create new NextJS app**
```sh
npx nx g @nrwl/next:app <app_name>
```

**Create a new React Component library**
```sh
npx nx g @nwrl/react:lib <lib_name>
```

### Code scaffolding

Whit the help of generators, Nx allows to do code scaffolding 

**Generate a new Reacn Component**
```sh
npx nx g @nrwl/react:component BottomNav --project=ui-components --style=styled-components --export
```

### Visualize packages dependencies
```sh
npx nx dep-graph
```

## Development 

### Start app in dev mode

To Run the dev server. 
```sh
npx nx insights-app:serve
```
Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Storybook

#### Add Storybook config to a app or lib
```sh
nx g @nrwl/react:storybook-configuration <project-name>
`

> This also regenerates `stories` for all components that don't have any defined

#### Run storybook
```sh
npx nx run ui-components:storybook
`

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Learning resources

- [Nx Official Documentation](https://nx.dev)
- [Full React and Nx Course – Egghead](https://egghead.io/courses/scale-react-development-with-nx-4038)
- [Using Storybook and Nx to build your Design System](https://blog.nrwl.io/build-your-design-system-with-storybook-nx-e3bde4087ad8)
