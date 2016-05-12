'use strict'

var makeUnique = require('tfk-unique-array')
var isFile = require('is-file')

function buildMyShortcuts (roles) {
  var myShortcuts = []

  roles.forEach(function (item) {
    var jsonPath = '../data/' + item + '.json'
    var filePath = 'data/' + item + '.json'

    if (isFile(filePath)) {
      myShortcuts = myShortcuts.concat(require(jsonPath))
    }
  })

  return makeUnique(myShortcuts)
}

module.exports = buildMyShortcuts
