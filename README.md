Welcome to the REA client application. This project uses [ZenHub](https://www.zenhub.com/) to manage our workflow, please install it and navigate to *'Boards'* to see what is being developed currently.

Note that many issues are logged only for gathering future requirements and exist as placeholders. These are placed into the ZenHub *'icebox'* for later analysis and development and should not be seen as active work items.

<!-- MarkdownTOC -->

- [Getting started](#getting-started)
    - [Nodejs](#nodejs)
    - [Package Manager](#package-manager)
    - [Development tools](#development-tools)
        - [Linting](#linting)
        - [FlowType](#flowtype)
    - [Setting up the codebase](#setting-up-the-codebase)
- [Running locally for development](#running-locally-for-development)
    - [Recommended editor plugins](#recommended-editor-plugins)
    - [Environment variables](#environment-variables)
- [Frameworks & conventions used](#frameworks--conventions-used)

<!-- /MarkdownTOC -->


## Getting started

Here are the things you'll need to run this project and details on how to configure them.

### Nodejs

The latest release of node at time of writing is `7.7.2`. You should be able to run with any other `7.x` version, but this is untested; some tools depend on particular node versions.

The best way to install node for development is to [install NVM](https://github.com/creationix/nvm) and then run `nvm install 7.7.2`. This allows you to easily run different node versions for different projects. If you use NVM, you may also wish to add this to your `.bashrc`, which will ensure your node version is synced with any projects which define an `.nvmrc` file:

```
cd () { builtin cd "$@" && chNodeVersion; }
pushd () { builtin pushd "$@" && chNodeVersion; }
popd () { builtin popd "$@" && chNodeVersion; }
chNodeVersion() {
    if [ -f ".nvmrc" ] ; then
        nvm use;
    fi
}
chNodeVersion;
```

Note that any commands installed via NPM or Yarn will only be available if you are using the same node version as was active at install time.

### Package Manager

This repository actually uses _two_ package managers: [Lerna](https://lernajs.io/) & [Yarn](https://yarnpkg.com/). Lerna manages multi-package repositories (like this one), Yarn does the same thing as node's built-in package manager (NPM), but is much faster at it.

Before starting, you must install Yarn globally. Contrary to the install instructions, the easiest way to install is via NPM: `npm i -g yarn`. Note however the following caveats:

- If installed via NPM then Yarn is only available for the node version it was installed in.
- Current versions of Yarn (0.17.x - 0.21.3) install global modules to their own location which does not play nicely with NVM. Use `npm i -g` instead of `yarn global add` for installing global packages, but feel free to use Yarn for all other package-related tasks.

### Development tools

- The [Redux Devtools Extension](http://extension.remotedev.io/) is a must-have for time-travel debugging and inspection of app state changes.
- The [Redux dispatch CLI](https://github.com/jhen0409/redux-dispatch-cli) is a nice way of firing actions to the dispatcher for testing your app: `npm i -g redux-dispatch-cli`
- The [Arc](https://github.com/diegohaz/arc) generator can be used to initialise common components. To access the commands `npm i -g yo generator-arc`:
    - `yo arc:component` generates new React components for you
    - `yo arc:container` generates container React components  ("[higher-order components](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e)") for you
    - `yo arc:store` generates new Redux data stores for you

#### Linting

Linters are basically a requirement for writing 'good' JavaScript code, since there are so many 'bad' ways to do it. This will also keep your code style aligned with other contributors.

**1. Install eslint & flow**. You will need at least eslint_d `4.2.4`, eslint `3.18.0`, flow `0.42.0` & flow-typed `2.0.0`.
    
    npm i -g eslint_d eslint flow-bin flow-typed

**2. Setup your editor**.

*Sublime Text 3:*

- Install [Package Control](https://packagecontrol.io/) if you haven't already
- Install [SublimeLinter](http://www.sublimelinter.com/)
- Also install the packages `SublimeLinter-contrib-eslint_d` and `SublimeLinter-contrib-flow`
- Check your linter settings (*Preferences > Package Settings > SublimeLinter > Settings [User]*). Ensure your linters are enabled under `user.linters` and that your node paths are set correctly under `user.paths`. Note that the global node packages must be installed in the same node version as you specify here.
- Use the command *SublimeLinter: Enable Debug Mode* and bring up the ST console (`CTRL/CMD + ~`) if you need more help!

*Other editors*

Please add instructions here!

#### FlowType

[FlowType](http://flowtype.org/) is a static type analysis layer built to run on top of JavaScript. It is very similar to Typescript, but not as strict- it is designed for *iteratively adding* static analysis to your projects, rather than forcing you to use it from the start. The syntax is basically the same- more on the official site. In brief:

```
function square(n: number /* argument type-hinting */): number /* return type hinting */ {
  return n * n;
}
```

These type annotations are parsed and checked before compiling and then stripped with Babel before running the code- that's about it! You may need to find a colour scheme for your editor that plays nicely with it, but in my experience ES6/JSX-compatible syntax mappings usually work fine.

If you have added new third-party packages and need type definitions for them, you can try running `flow-typed install` to see if full typings for those packages can be auto-installed for you. This command runs automatically after finishing an standard NPM install command, as configured in `package.json`.

### Setting up the codebase

Now that you have all the prerequisites ready, you can setup the project. Clone this repo, then:

- Run `yarn` to install all dependencies



## Running locally for development

- `npm run dev` to spin up a development server

### Recommended editor plugins

- An [eslint](http://eslint.org/) code quality checker
- [Flowtype](https://flowtype.org/) static typechecker
- [Editorconfig](http://editorconfig.org/) support

### Environment variables

The app accepts the following env vars to control its behaviour:

- `NODE_ENV`: as usual, set to `production` to run a non-debug build, omit to use debug mode or set to `test` when running tests.
- `IP` and `PORT` specify the interface and port to listen on. Defaults to `0.0.0.0:3000`. If running in development, the `webpack-dev-server` will be run on `(port + 1)`.
- `API_URL`: sets the base path to the OCP API. If not provided will default to `http://localhost:8000/api` for connecting to a local instance.
- `PUBLIC_PATH` sets the base URL to the website. If not provided, will default to `/`.



## Frameworks & conventions used

- UI architecture based on [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) principles.
- CSS is written with modern W3C css and processed via [PostCSS](https://www.npmjs.com/package/postcss) plugins. See http://cssnext.io/features/
    - *Caveat:* local files must be imported with **double quotes**! Otherwise, `postcss-import` won't combine them correctly.
- Built with [pure view components](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d) (`packages/ui-views`) bound to [Redux](http://redux.js.org/) by way of [higher-order components](https://facebook.github.io/react/docs/higher-order-components.html) (`packages/ui-bindings`). Essentially the design goal is enforcing one-way dataflow and separation of concerns, this is done by writing the UI as simple functional transforms of `props` data (pure view components) which bind to a single application state (in Redux) by way of accessor functions which pull the data out (higher-order components). All data going back in is sent through Redux's reducers by way of firing a Redux action.
