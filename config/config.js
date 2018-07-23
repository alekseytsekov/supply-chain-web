'use strict'

const common = require('./common');
const handlebar = require('./handleBars');
const contractInfo = require('./contractInfo');
//const mongoDb = require('./mongoDb');


module.exports = Object.assign({}, common, handlebar, contractInfo);