# Monorepo Example

This project was generated using [Nx](https://nx.dev).

## POC checkilist

- [x] Setup Monorepo with Nx
- [x] Install NextJS with Typescript support
- [x] Support for `styled-components` 
- [x] Shared `ui-components`
- [x] Storybook configuration for existent components
- [x] Install main React dependencies: `react-query`, `formik`
- [x] Absolute paths for apps in `tsconfig.base.json` (`@minded/insights-app/components/TopNav`)
- [ ] Support for NextJS Dynamic routing to redirect Experiments
- [ ] Microfrontends POC: embed app within another
- [ ] Deployment with Jenkins (github actions)
- [ ] PWA configuration
- [ ] Consider Tailwind as addition of `styled-components`
- [ ] Document `nx` code generators to maximize reusability and structure
- [ ] Deploy using Jenkins or Github Actions
- [ ] Add stories to `ui-components`
- [ ] Add spec tests to `ui-components`
- [ ] Consider definition of e2e and cypress tests at app level
- [ ] State management using React hooks (Redux style)

## App Structure

- UI Components
  - Navbar
  - Bottom navbar (mobile)
  - Calendar
  - Notifications (push nots?)
- New `insights-app`
  - Treatment plan (current prescriptions)
  - Daily insights (education)
- New `discussions-app`
  - Secret Chats
- New `daily-notes`
  - Edit text

## Tech Stack

- Nx (Nrwl)
- Storybook
- NextJS
- React
- React Query
- Styled Components
- Formik




## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@minded/mylib`.

## Setup

`npx nx serve insights-app`
`npx nx dep-graph`

Create a new React App
`npx nx g @nwrl/react:app <app_name>`

Create a new NextJS app
`npx nx g @nrwl/next:app <app_name>`

Create a new React Component lib
`npx nx g @nwrl/react:lib ui-components`

Create new component 
`npx nx g @nrwl/react:component BottomNav --project=ui-components --style=styled-components --export`

## Storybook

Run storybook
`npx nx run ui-components:storybook`

Add Storybook config to a app or lib
`nx g @nrwl/react:storybook-configuration <project-name>`

Autogenerate stories
`nx g @nrwl/react:stories <project-name>`

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.


## Learning resources

- [Egghead React Course](https://egghead.io/courses/scale-react-development-with-nx-4038)
- Visit the [Nx Documentation](https://nx.dev) to learn more.
- https://blog.nrwl.io/build-your-design-system-with-storybook-nx-e3bde4087ad8
