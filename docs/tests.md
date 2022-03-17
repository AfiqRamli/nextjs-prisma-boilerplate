### Setup tests in Next.js (no type checking)

- [docs](https://nextjs.org/docs/testing)
- jest setup [vercel example](https://github.com/vercel/next.js/tree/canary/examples/with-jest)

### Setup tests in Next.js (ts-jest)

- youtube [playlist](https://www.youtube.com/watch?v=7uKVFD_VMT8&list=PLYSZyzpwBEWTBdbfStjqJSGaulqcHoNkT&index=2)

#### Install ts-jest

```sh
yarn add --dev jest ts-jest @types/jest

# create jest.config.js
yarn ts-jest config:init
```

#### Install React Testing Library

```sh
yarn add --dev @testing-library/react @testing-library/user-event @testing-library/dom @testing-library/jest-dom

# package.json
"test": "jest",
```

```js
// jest.config.js
testEnvironment: 'jsdom',
globals: {
    'ts-jest': {
        tsconfig: './tsconfig.jest.json',
    },
},
setupFilesAfterEnv: ['./jest.setup.ts'],

// jest.setup.ts
import '@testing-library/jest-dom';
```

#### Setup Eslint

```sh
# test with fit()
yarn add --dev eslint eslint-plugin-jest

# test with screen.debug()
yarn add --dev eslint-plugin-testing-library
```

- rtlRender in unit tests, customRender with loggedin user and all providers in integration tests

### React Query testing

- [docs](https://react-query.tanstack.com/guides/testing)
- [tkdodo blog](https://tkdodo.eu/blog/testing-react-query)
- [tkdodo repo](https://github.com/TkDodo/testing-react-query)

### Forms testing

- Bruno Antunes [youtube](https://www.youtube.com/watch?v=MhFSuOjU624)
- Github [code](https://github.com/bmvantunes/youtube-react-testing-video8-forms-react-testing-library)

### React Testing Libraries queries

- bug: `TypeError: window.matchMedia is not a function`, [solution](https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function)

- Print element by class - `screen.debug()`

```ts
const postsList = document.querySelector('.home__list');
screen.debug(postsList, 20 * 1000);
```