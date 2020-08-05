ps-plugin
=========

sample pluralsight plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ps-plugin.svg)](https://npmjs.org/package/ps-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/ps-plugin.svg)](https://npmjs.org/package/ps-plugin)
[![License](https://img.shields.io/npm/l/ps-plugin.svg)](https://github.com/xiaounb/heroku-plugin-ps/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ps-plugin
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
ps-plugin/0.0.2 darwin-x64 node-v14.5.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example appcommand`](#oclif-example-appcommand)
* [`oclif-example hello [FILE]`](#oclif-example-hello-file)

## `oclif-example appcommand`

say hi to an app

```
USAGE
  $ oclif-example appcommand

OPTIONS
  -a, --app=app        (required) app to run command against
  -r, --remote=remote  git remote of app to use
```

_See code: [src/commands/appcommand.ts](https://github.com/xiaounb/heroku-plugin-ps/blob/v0.0.2/src/commands/appcommand.ts)_

## `oclif-example hello [FILE]`

describe the command here

```
USAGE
  $ oclif-example hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oclif-example hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/xiaounb/heroku-plugin-ps/blob/v0.0.2/src/commands/hello.ts)_
<!-- commandsstop -->
