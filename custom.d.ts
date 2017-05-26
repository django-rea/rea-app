// custom module inclue types
declare module '*.svg' {
  const content: any
  export default content
}

// custom handling of require mechanisms & node internals by Webpack
declare interface NodeModule {
  hot: {
    accept: (path: string, onReload: Function) => void
  },
}

declare interface NodeRequire {
  context: Function,
}

declare interface Window {
  __INITIAL_STATE__: string,
}
