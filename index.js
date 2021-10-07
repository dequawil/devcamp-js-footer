'use strict';

var moment = require('moment');

/**
 * Returns a string element with a footer and updating year
 * @paran {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};