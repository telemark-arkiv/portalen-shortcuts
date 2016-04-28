'use strict'

var buildMyShortcuts = require('./build-my-shortcuts')
var envs = process.env

module.exports = function (options) {
  var seneca = this

  seneca.add('cmd:collect-shortcuts, type:user', collectMyShortcuts)

  return {
    name: envs.PORTALEN_SHORTCUTS_TAG || 'portalen-shortcuts'
  }
}

function collectMyShortcuts (args, callback) {
  var roles = args.roles
  var result = buildMyShortcuts(roles)

  callback(null, result)
}
