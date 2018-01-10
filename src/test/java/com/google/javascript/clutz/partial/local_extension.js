goog.provide('local.extension.D')

//!! Ensure that C, which isn't exported, is defined with goog.module/dollar
//!! syntax
/** @constructor */
let C = function() {};


/**
 * @constructor
 * @extends {C}
 */
local.extension.D = function() {};
