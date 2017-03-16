<!-- MarkdownTOC -->

- [Getting started](#getting-started)
  - [Nodejs](#nodejs)
  - [Package Manager](#package-manager)
  - [Development tools](#development-tools)
  - [Setting up the codebase](#setting-up-the-codebase)
- [Running locally for development](#running-locally-for-development)
  - [Environment variables](#environment-variables)
- [Frameworks used](#frameworks-used)

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

We strongly recommend you use [Yarn](https://yarnpkg.com/) to manage your module packages - it does the same things as NPM but is much faster. Contrary to the install instructions, the easiest way to install is via NPM: `npm i -g yarn`. Note however the following caveats:

- If installed via NPM then Yarn is only available for the node version it was installed in.
- Current versions of Yarn (0.17.x - 0.21.3) install global modules to their own location which does not play nicely with NVM. Use `npm i -g` instead of `yarn global add` for installing global packages, but feel free to use Yarn for all other package-related tasks.

### Development tools

- The [Redux Devtools Extension](http://extension.remotedev.io/) is a must-have for time-travel debugging and inspection of app state changes.
- The [Redux dispatch CLI](https://github.com/jhen0409/redux-dispatch-cli) is a nice way of firing actions to the dispatcher for testing your app: `npm i -g redux-dispatch-cli`
- The [Arc](https://github.com/diegohaz/arc) generator can be used to initialise common components. To access the commands `npm i -g yo generator-arc`:
    - `yo arc:component` generates new React components for you
    - `yo arc:container` generates container React components  ("[higher-order components](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e)") for you
    - `yo arc:store` generates new Redux data stores for you

### Setting up the codebase

Now that you have all the prerequisites ready, you can setup the project. Clone this repo, then:

- Run `yarn` to install all dependencies



## Running locally for development

- `npm run dev` to spin up a development server

### Environment variables

The app accepts the following env vars to control its behaviour:

- `NODE_ENV`: as usual, set to `production` to run a non-debug build, omit to use debug mode or set to `test` when running tests.
- `IP` and `PORT` specify the interface and port to listen on. Defaults to `0.0.0.0:3000`. If running in development, the `webpack-dev-server` will be run on `(port + 1)`.
- `API_URL`: sets the base path to the OCP API. If not provided will default to `http://localhost:8000/api` for connecting to a local instance.
- `PUBLIC_PATH` sets the base URL to the website. If not provided, will default to `/`.



## Frameworks used

- CSS is written with modern W3C css and processed via [PostCSS](https://www.npmjs.com/package/postcss) plugins. See http://cssnext.io/features/
  - *Caveat:* local files must be imported with **double quotes**! Otherwise, `postcss-import` won't combine them correctly.
