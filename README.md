# grunt-json2po

> Convert i18n JSON files to PO format

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json2po --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json2po');
```

## The "json2po" task

### Overview
In your project's Gruntfile, add a section named `json2po` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json2po: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.format
Type: `String`
Values: `'module' | 'json'`
Default value: `'module'`

Format of source file

#### options.original
Type: `String`
Default value: `'en'`

Original language

#### options.path
Type: `String`
Default value: `'LC_MESSAGES'`

Optional path within locale directory

#### options.filename
Type: `String`
Default value: `'messages.po'`

Filename of result file

### Usage Examples

#### Default Options
In this example, the default options are used to convert JS module to PO file.

```js
grunt.initConfig({
  json2po: {
    options: {},
    files: {
      'path/to/result/locales': ['src/testing.js'],
    },
  },
});
```

#### Custom Options
In this example, source is in JSON format. Result will be saved in `path-example/[en | ru | es]/LCCC/locale.po`

```js
grunt.initConfig({
  json2po: {
    options: {
      format: 'json',
      original: 'ru',
      path: 'LCCC',
      filename: 'locale.po'
    },
    files: {
      'path-example': ['src/testing.json'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
