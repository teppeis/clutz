/**
 * This module provides a variety of types -- class, interface, enum, etc.
 * Compare its output against what provide_types_user.js uses.
 */

goog.module('partial.provide.types');

class Class {
  foo() {}
}
exports.Class = Class;

/** @interface */
function Interface() {}
Interface.prototype.bar = function() {};
exports.Interface = Interface;

/** @enum {number} */
var Enum = {
  FOO: 1,
};
exports.Enum = Enum;

/** @typedef {string} */
var NonNullTypedef;
exports.NonNullTypedef = NonNullTypedef;

/** @typedef {string|null} */
var NullableTypedef;
exports.NullableTypedef = NullableTypedef;
