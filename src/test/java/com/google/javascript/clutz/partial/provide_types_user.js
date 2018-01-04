/**
 * This module tests nullable Closure type.
 * When code refers to e.g. {types.Class}, in TypeScript that implicitly means
 * {types.Class|null} because Closure defaults types to include null.  But when
 * code refers to {types.Enum} it should not include null.
 */
goog.module('partial.provide.types.user');
const types = goog.require('partial.provide.types');


/**
 * @param {types.Class} p
 * @param {?types.Class} questionP
 * @param {!types.Class} bangP
 * @param {types.Class|null} pOrNull
 */
exports.nullVariants = function(p, questionP, bangP, pOrNull) {};


/**
 * @param {types.Class} klass
 * @param {types.Interface} iface
 * @param {types.Enum} en
 * @param {types.NonNullTypedef} nonnull
 * @param {types.NullableTypedef} nullable
 */
exports.typeVariants = function(klass, iface, en, nonnull, nullable) {};

/**
 * @typedef {{
 *   c: types.Class,
 * }}
 */
exports.TypeDef;
