'use strict'

var Seneca = require('seneca')
var Mesh = require('seneca-mesh')
var PortalenShortcuts = require('./lib/portalen-shortcuts')
var envs = process.env

var options = {
  seneca: {
    tag: envs.PORTALEN_SHORTCUTS_TAG || 'portalen-shortcuts'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'cmd:collect-shortcuts, type:user', model: 'consume'}
    ]
  },
  portalenShortcuts: {
    url: envs.PORTALEN_SHORTCUTS_URL || 'http://portalen.shortcuts.no'
  },
  isolated: {
    host: envs.PORTALEN_SHORTCUTS_HOST || 'localhost',
    port: envs.PORTALEN_SHORTCUTS_PORT || 8000
  }
}

var Service = Seneca(options.seneca)

if (envs.PORTALEN_SHORTCUTS_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(PortalenShortcuts, options.portalenShortcuts)
