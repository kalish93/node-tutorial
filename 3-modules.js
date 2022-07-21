// modules
// commonJS - every file is module by default
// modules- encapsulated code (only share minimun)

const names = require('./4-names.js')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade');

sayHi('susan')
sayHi(names.jhon)
sayHi(names.peter)