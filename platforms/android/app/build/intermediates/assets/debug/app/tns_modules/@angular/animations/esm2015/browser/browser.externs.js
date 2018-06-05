/** @externs */
/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from /private/var/tmp/_bazel_matsko/09e5fd4a73b4818308935bd986f6ad63/execroot/angular/packages/animations/browser/src/dsl/animation_transition_expr.ts:

/** @typedef {?} */
var TransitionMatcherFn;
// externs from /private/var/tmp/_bazel_matsko/09e5fd4a73b4818308935bd986f6ad63/execroot/angular/packages/animations/browser/src/dsl/animation_timeline_builder.ts:

/** @typedef {?} */
var StyleAtTime;
// externs from /private/var/tmp/_bazel_matsko/09e5fd4a73b4818308935bd986f6ad63/execroot/angular/packages/animations/browser/src/render/web_animations/dom_animation.ts:
/**
 * @record
 * @struct
 */
function DOMAnimation() {}
 /** @type {?} */
DOMAnimation.prototype.onfinish;
 /** @type {?} */
DOMAnimation.prototype.position;
 /** @type {?} */
DOMAnimation.prototype.currentTime;

/**
 * @return {?}
 */
DOMAnimation.prototype.cancel = function() {};

/**
 * @return {?}
 */
DOMAnimation.prototype.play = function() {};

/**
 * @return {?}
 */
DOMAnimation.prototype.pause = function() {};

/**
 * @return {?}
 */
DOMAnimation.prototype.finish = function() {};

/**
 * @param {?} eventName
 * @param {?} handler
 * @return {?}
 */
DOMAnimation.prototype.addEventListener = function(eventName, handler) {};

/**
 * @param {?} eventName
 * @return {?}
 */
DOMAnimation.prototype.dispatchEvent = function(eventName) {};