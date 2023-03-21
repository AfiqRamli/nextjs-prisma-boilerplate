# Tasks

## Todo

- logging
- tests, next examples
- ci cd, deploy
- readme
- tailwind and root font-size 10px 1rem, global and component styles
- react query, redux toolkit, redux toolkit query
- redux toolkit vercel example
- update readme before forget...
- try catch to prisma calls getServerSideProps...
- semantic html
- Next.js Image config
- post - hero image, tag, category
- comments model
- drafts count in session or user state
- typescript silent errors...
- on change tw-base.scss must restart, no intelisense for my utilities
- docker express maybe, github actions, remote containers
- add prisma migration container, move prisma to devDependencies
- next.js multiple build contexts, next.js app, server.ts and seed.js
- heroku docker
- update traefik-proxy readme
- me query, only userId and email in session
- throw 404 from zod api...
- handle errors in getServerSideProps
- edit user, delete user - admin
- validate ids in api zod
- test `await queryClient.prefetchQuery([QueryKeys.POSTS_PROFILE, profile.username, 1]...`
- reusable guard or HOC for protected routes, getServerSideProps too
- where to go next doc: markdown editor with image inline and upload, comments, likes, follow, tags, categories
- extract clear types in a single place, form, request, response, api - models, organize, consistent naming
- maybe arrays in navbar for mobile
- declarative navbar lesson
- tests
- drafts count in me
- all in daisy ui
- @tailwindcss/line-clamp plugin to limit posts length
- custom font maybe
- footer styling
- login neutral button color, dark theme
- active button border, focus ring...
- Next images
- wrong password server response on login page
- client error handling, axios interceptor, alert component
- throw errors in all api
- remove safeParse(query), let it throw
- custom favicon, seo meta tags
- resize images on server, lovell/sharp
- mount only pg-data and remove prisma files from traefik repo
- skeletons, just in docs
- maybe shell script for migration container
- postgres expose external env var in d-c.yml
- new next.js dockerfile? https://nextjs.org/docs/advanced-features/output-file-tracing
- add role attributes for accessibility in one go, a11...
- update resume react testing
- find practical github repo code example for jest and cypress
- check additional Eslint rules from other repositories
- setup Cypress
- mocks, spies, describe
- unit, integration
- skeletons, react suspense
- work organization md doc
- remove password from all client users, done
- handle http error in HomeView, both getServerSideProps and useQuery, ErrorBoundary, error handling and error testing same thing
- each form should be separate component, easier to test
- one youtube lesson for english
- container with vs code for replicating bugs - Gitpod Self-Hosted container
- testing-lib/react-hooks ReactDom warning
- kill next.js server on unhandled promise rejection
- supertest pass dynamic route arg `/api/posts/:id`, maybe exists nicer solution {id}
- change all ports from 3001 to 3000
- default theme fallback
- run docker-compose as non root to avoid mount folders as root, app-dev, app-test containers...
- user in Cypress container for screenshots as non root
- update to Cypress 10
- fix contains direct node access warning in lint
- fix .next and dist folders created as root in app container if not exists (pass non-root user UID, GID)
- withBem() needs proper solution for additional classname scoped under block, no this just generates classNames in html, without dot, not in js
- version docker images in Github Actions, and app release
- see what queries return results on server too, log them in node
- debug in hook with `console.log('query.data', query.data, isBrowser());`
- add Github Action workflow for releases, see some existing example
- print tag too in build docker and deploy workflows
- handle same Facebook Google email explicitly
- fix default theme on mobile navbar, ThemeChanger is not mounted

### Overview

- update to Node 18, Next.js new routing
- create release and tag v1.0 when finish readme
- hydration bug - dependant queries, me and others
- image backend
- ask to record tutorials
- free Docker build from build time urls (CustomHead)
- next-translations
- known issues: hydrate bug, Image backend

### Bugs

- test-case for react hydration bug
- comment out one by one component to isolate it

### Questions

- use yarn scripts in Dockerfile or direct commands?
- handle same google and facebook email, it crashes prod app, ask on next-auth discussions
- error path, db function, getServerSideProps, api endpoint, ask reddit, github
- where to place and call printLoadedEnvVariables() ?
- absolute positioning or negative margin, css reddit question
- jest.mock() vs jest.spyOn()?
- exports from index.ts
- ReactElement vs JSX.Element vs ReactNode, ask this
- types for reusing Login and Register form
- fix FormData useUpdateuser hook test
- fix act not supported in env
- screenshots for all items (mutations), pages, screen error handling and alerts
- supertest vs axios?
- clearMocks vs resetMocks vs restoreMocks
- void vs undefined return type function?
- getServerSideProps http vs direct service calls?
- next.js startup handler where?
- ask NODE_ENV=ci or test in Github Actions? reddit
- read axios error message RQ error handlers, ask in axios discussions
- edit user button leads to Home???, why this must be like this `const settingsHref = '${Routes.SITE.SETTINGS}${user.username}/'` or hard refresh
