goog.provide('goog.net.WebChannel');

/**
 * @interface
 */
goog.net.WebChannel = function() {};

/**
 * @interface
 */
goog.net.WebChannel.FailureRecovery = function() {};

/**
 * @enum {string}
 */
goog.net.WebChannel.FailureRecovery.State = {
    CLOSED: 'closed'
};

/**
 * @enum {string}
 */
goog.net.WebChannel.FailureRecovery.FailureCondition = {
    EXCEPTION: 'exception'
};

/**
 * @param {!goog.net.WebChannel.FailureRecovery.FailureCondition} failure
 * @return {!goog.net.WebChannel.FailureRecovery.State}
 */
goog.net.WebChannel.FailureRecovery.prototype.setFailure = goog.abstractMethod;
