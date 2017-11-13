# Current status

As of 2017/09/06: This is the most recent version of the new React-based UI for NRP. It was forked from https://github.com/django-rea/rea-app. It is in process, and has been tested a bit, but not used in production yet.  It contains some queries, but no creating, updating, or deleting of data. This version will probably not have much done to it for at least a month or two, as that project is working on an alternative "card and panel" view for one group of users, which is not available yet on github.  This version may even be discarded or radically changed.

One goal of the source project is to move to a more modular architecture, with a number of tiny apps using re-usable components. This project can keep that in mind when deciding how to architect the new work.  The goal is that by the time the class sprint 0 is complete, we can have a lot of this architecture nailed down and ways to coordinate all the work between all the developers.  Here is a new github organization that will be the source for the components: https://github.com/unooverse.

This codebase interacts with the Django backend through a graphql api.  The api is working towards using the [ValueFlows](https://www.valueflo.ws/) vocabulary, which is also in development.  So the terminology used in this code may be somewhat different than the terminology used in the backend app.  The api itself is not complete. The processes, commitments, and events have working queries.  The exchanges are not tested.  None of the mutations (create/update/delete) are working.

# How to install and run

<!-- MarkdownTOC -->

- [Getting started](#getting-started)
    - [Nodejs](#nodejs)
    - [Package Manager](#package-manager)
    - [Development tools](#development-tools)
        - [Tape Testing](#Tape)
        - [GUI Testing](#Selenium)
        - [Linting](#linting)
        - [Typescript](#typescript)
    - [Setting up the codebase](#setting-up-the-codebase)
- [Running locally for development](#running-locally-for-development)
    - [Recommended editor plugins](#recommended-editor-plugins)
    - [Environment variables](#environment-variables)
    - [Running package commands individually](#running-package-commands-individually)
- [Running in production mode](#running-in-production-mode)
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

#### Tape

Tape is a javascript testing framework that can also be used with Typescript

- `npm install --save-dev tape @types/tape` to install Tape

- `npm install -g ts-node` to add typescript compatibility

- `ts-node node_modules/tape/bin/tape tests/**/*.unit.ts` to execute tests. Note the file ending of ".unit.ts" or ".integration.ts"


#### Selenium

Selenium allows for automated end-to-end testing.

Selenium IDE plug-in for Firefox will be used to generate the page files.

Since these tests can individually take longer to run, they must be made to run in parallel.

#### Linting

Linters are basically a requirement for writing 'good' JavaScript code, since there are so many 'bad' ways to do it. This will also keep your code style aligned with other contributors.

**1. Install tslint**. You will need at least tslint `5.3.2`.
    
    npm i -g typescript tslint tslint-react tsutils

**2. Setup your editor**.

*Sublime Text 3:*

- Install [Package Control](https://packagecontrol.io/) if you haven't already
- Install [SublimeLinter](http://www.sublimelinter.com/)
- Also install the package `SublimeLinter-contrib-tslint`
- Check your linter settings (*Preferences > Package Settings > SublimeLinter > Settings [User]*). Ensure your linters are enabled under `user.linters` and that your node paths are set correctly under `user.paths`. Note that the global node packages must be installed in the same node version as you specify here.
- Use the command *SublimeLinter: Enable Debug Mode* and bring up the ST console (`CTRL/CMD + ~`) if you need more help!

*Other editors*

Please add instructions here!

#### Typescript

We use [Typescript](https://typescriptlang.org) to author the app. Typescript is a typed superset of JavaScript, which adds a lot of code intelligence and safety features on top of JS.

Something you might need to be aware of from time to time with Typescript is that TS modules, standard nodejs modules (ie. 'commonjs') and ES6 JavaScript modules are all slightly different formats; and you will have to deal with them differently.

- For TS modules: `import myModule from 'mymodule'` works fine, as does `import { something } from 'mymodule'`.
- For ES6 modules: things are compatible with the Typescript import syntax for the most part and the above should also work.
- For commonjs modules: `import * as myModule from 'mymodule'` is required, as there is no such thing as a 'default export'. The abbreviated form will error.

*(Note: Babel is still used in the codebase, but only to process files generated by the SVG loader plugin.)*

### Setting up the codebase

Now that you have all the prerequisites ready, you can setup the project. Clone this repo, then:

- Run `yarn` to install all dependencies



## Running locally for development

- `npm run dev` to spin up a development server

### Recommended editor plugins

- [tslint](https://palantir.github.io/tslint/) code quality checker
- [Editorconfig](http://editorconfig.org/) support

### Environment variables

The app accepts the following env vars to control its behaviour:

- `NODE_ENV`: as usual, set to `production` to run a non-debug build, omit to use debug mode or set to `test` when running tests.
- `IP` and `PORT` specify the interface and port to listen on. Defaults to `0.0.0.0:3000`. If running in development, the `webpack-dev-server` will be run on `(port + 1)`.
- `API_URL`: sets the base path to the OCP API. If not provided will default to `http://localhost:8000/api` for connecting to a local instance.
- `PUBLIC_PATH` sets the base URL to the website. If not provided, will default to `/`.

### Running package commands individually

Since the repository is setup with Lerna, often when you try to run NPM commands within each packge rather than at the top level they won't be able to find the right dependencies. To workaround this, simply use Lerna's `scope` option to target the specific package, for example: `lerna run --scope @vflows/views test`.


## Running in production mode

In order to run for production, you need to configure the correct environment variables. This has to be done both when building the code and when running the webserver, as some configuration is compiled into the packaged JS files whilst others are read during execution of the pre-render webserver. Simply set the appropriate values in the below string and prepend it to each command you run.

    NODE_ENV=production PORT=3000 WEB_BASEURL=http://localhost:3000 ASSET_BASEURL=http://localhost:3000 API_URL=http://localhost:8000/api/graph

First, build the app by running the build command. This will generate packaged assets into the `dist` folder within the app package.

    {ENV_SETTINGS} npm run build

To run the webserver, use the `serve` command:

    {ENV_SETTINGS} npm run serve

That's it!

In practise, you'll probably want to run the app via a process manager like [PM2](http://pm2.keymetrics.io), to keep it online. Here's the PM2 control file for our test server as an example:

    {
      "apps" : [{
        "name": "kamasi",
        "script": "index.js",
        "cwd": "app/static/kamasi/packages/app/",
        "watch": true,
        "env": {
          "NODE_ENV": "production",
          "PORT": 4430,
          "WEB_BASEURL": "http://testocp.freedomcoop.eu:4430",
          "ASSET_BASEURL": "http://testocp.freedomcoop.eu:4430",
          "API_URL": "https://testocp.freedomcoop.eu/api/graph"
        }
      }]
    }

Along with the process file, you'll also need to configure PM2 to [start on boot](http://pm2.keymetrics.io/docs/usage/startup/). Since it's running in `watch` mode, all that should be necessary is to rebuild the app and it will automatically update. If you prefer you can save some system resources by disabling this and running `pm2 start` / `pm2 restart` etc manually.



## Frameworks & conventions used

- UI architecture based on [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) principles.
- CSS is written with modern W3C css and processed via [PostCSS](https://www.npmjs.com/package/postcss) plugins. See http://cssnext.io/features/
    - *Caveat:* local files must be imported with **double quotes**! Otherwise, `postcss-import` won't combine them correctly.
- Built with [pure view components](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d) (`packages/ui-views`) bound to [Redux](http://redux.js.org/) by way of [higher-order components](https://facebook.github.io/react/docs/higher-order-components.html) (`packages/ui-bindings`). Essentially the design goal is enforcing one-way dataflow and separation of concerns, this is done by writing the UI as simple functional transforms of `props` data (pure view components) which bind to a single application state (in Redux) by way of accessor functions which pull the data out (higher-order components). All data going back in is sent through Redux's reducers by way of firing a Redux action.
