# vue-chrome

[![Build status](https://img.shields.io/circleci/project/scottbedard/vue-chrome/master.svg?maxAge=2592000)](https://circleci.com/gh/scottbedard/vue-chrome)

A starting point for Chrome extensions using [Vue.js](http://vuejs.org/guide/installation.html#CSP-compliant-build)

### Basic usage

```bash
# install dependencies
npm install

# compile production assets
gulp compile

# watch all src files for changes and recompile
gulp watch

# watch a single src bundle with hot-module-replacement
gulp watch -hmr popup

# lint .js and .vue files (add --fix to apply autofixes)
gulp lint

# run unit tests with karma and jasmine
gulp test
```
