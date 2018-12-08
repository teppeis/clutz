goog.provide('shadowed.Foo');
goog.provide('shadowed.Foo.Enum');

/** @constructor */
shadowed.Foo = function() {};

/** @type {!shadowed.Foo} */
shadowed.Foo.prototype.foo;

/** @enum {string} */
shadowed.Foo.Enum = {
  A: 'a'
};
