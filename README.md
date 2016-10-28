# Webpack SCSS Test

## Run it

Make sure SASS is installed on you machine.

```
$ git clone https://github.com/cntech/webpack-scss-test.git
$ cd webpack-scss-test
$ npm install
$ webpack # this will crash
```

## Issues

### Relative paths do not work

`_roboto.scss` does not find `font-files/CWB0XYA8bzo0kSThX0UTuA.woff2`

(change it to `fonts/roboto/font-files/CWB0XYA8bzo0kSThX0UTuA.woff2`,
which is crazy because it violates modularity, then it works)

#### Output

```
$ webpack
Hash: 6d9e0ce3d38d4cb2fa67
Version: webpack 1.13.3
Time: 708ms
        Asset    Size  Chunks             Chunk Names
    bundle.js  1.7 kB       0  [emitted]  main
bundle.js.map  1.6 kB       0  [emitted]  main
   [0] ./src/app.js 31 bytes {0} [built] [1 error]
    + 1 hidden modules

ERROR in ./src/styles/app.scss
Module build failed: ModuleNotFoundError: Module not found: Error: Cannot resolve 'file' or 'directory' ./font-files/CWB0XYA8bzo0kSThX0UTuA.woff2 in C:\path\to\webpack-scss-test\src\styles
    at C:\path\to\webpack-scss-test\node_modules\webpack\lib\Compilation.js:229:38
    at onDoneResolving (C:\path\to\webpack-scss-test\node_modules\webpack\lib\NormalModuleFactory.js:29:20)
    at C:\path\to\webpack-scss-test\node_modules\webpack\lib\NormalModuleFactory.js:85:20
    at C:\path\to\webpack-scss-test\node_modules\webpack\node_modules\async\lib\async.js:726:13
    at C:\path\to\webpack-scss-test\node_modules\webpack\node_modules\async\lib\async.js:52:16
    at done (C:\path\to\webpack-scss-test\node_modules\webpack\node_modules\async\lib\async.js:241:17)
    at C:\path\to\webpack-scss-test\node_modules\webpack\node_modules\async\lib\async.js:44:16
    at C:\path\to\webpack-scss-test\node_modules\webpack\node_modules\async\lib\async.js:723:17
    at C:\path\to\webpack-scss-test\node_modules\webpack\node_modules\async\lib\async.js:167:37
    at C:\path\to\webpack-scss-test\node_modules\enhanced-resolve\lib\UnsafeCachePlugin.js:24:19
    at onResolved (C:\path\to\webpack-scss-test\node_modules\enhanced-resolve\lib\Resolver.js:38:18)
    at C:\path\to\webpack-scss-test\node_modules\enhanced-resolve\lib\Resolver.js:127:10
    at C:\path\to\webpack-scss-test\node_modules\enhanced-resolve\lib\Resolver.js:191:15
    at applyPluginsParallelBailResult.createInnerCallback.log (C:\path\to\webpack-scss-test\node_modules\enhanced-resolve\lib\Resolver.js:110:4)
    at loggingCallbackWrapper (C:\path\to\webpack-scss-test\node_modules\enhanced-resolve\lib\createInnerCallback.js:21:19)
    at C:\path\to\webpack-scss-test\node_modules\tapable\lib\Tapable.js:134:6
    at Tapable.<anonymous> (C:\path\to\webpack-scss-test\node_modules\enhanced-resolve\lib\DirectoryDescriptionFilePlugin.js:24:12)
    at Storage.finished (C:\path\to\webpack-scss-test\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:38:16)
    at ReadFileContext.callback (C:\path\to\webpack-scss-test\node_modules\graceful-fs\graceful-fs.js:78:16)
    at FSReqWrap.readFileAfterOpen [as oncomplete] (fs.js:365:13)
 @ ./src/app.js 1:0-28
Child extract-text-webpack-plugin:
        + 2 hidden modules

    ERROR in ./~/css-loader?sourceMap!./~/sass-loader?sourceMap!./src/styles/app.scss
    Module not found: Error: Cannot resolve 'file' or 'directory' ./font-files/CWB0XYA8bzo0kSThX0UTuA.woff2 in C:\path\to\webpack-scss-test\src\styles
     @ ./~/css-loader?sourceMap!./~/sass-loader?sourceMap!./src/styles/app.scss 6:184-236
```
