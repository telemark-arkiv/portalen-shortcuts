'use strict'

var makeUnique = require('tfk-unique-array')

function buildMyShortcuts (roles) {
  var myShortcuts = []

  roles.forEach(function (item) {
    myShortcuts = myShortcuts.concat(require('../data/' + item + '.json'))
  })

  return makeUnique(myShortcuts)
}

module.exports = buildMyShortcuts
