/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
export var ERROR_TYPE = 'ngType';
export var ERROR_DEBUG_CONTEXT = 'ngDebugContext';
export var ERROR_ORIGINAL_ERROR = 'ngOriginalError';
export var ERROR_LOGGER = 'ngErrorLogger';
export function getType(error) {
    return error[ERROR_TYPE];
}
export function getDebugContext(error) {
    return error[ERROR_DEBUG_CONTEXT];
}
export function getOriginalError(error) {
    return error[ERROR_ORIGINAL_ERROR];
}
export function getErrorLogger(error) {
    return error[ERROR_LOGGER] || defaultErrorLogger;
}
function defaultErrorLogger(console) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    console.error.apply(console, tslib_1.__spread(values));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBVUEsTUFBTSxDQUFDLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUNuQyxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwRCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQztBQUN0RCxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDO0FBRzVDLE1BQU0sa0JBQWtCLEtBQVk7SUFDbEMsTUFBTSxDQUFFLEtBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztDQUNuQztBQUVELE1BQU0sMEJBQTBCLEtBQVk7SUFDMUMsTUFBTSxDQUFFLEtBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0NBQzVDO0FBRUQsTUFBTSwyQkFBMkIsS0FBWTtJQUMzQyxNQUFNLENBQUUsS0FBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Q0FDN0M7QUFFRCxNQUFNLHlCQUF5QixLQUFZO0lBQ3pDLE1BQU0sQ0FBRSxLQUFhLENBQUMsWUFBWSxDQUFDLElBQUksa0JBQWtCLENBQUM7Q0FDM0Q7QUFHRCw0QkFBNEIsT0FBZ0I7SUFBRSxnQkFBZ0I7U0FBaEIsVUFBZ0IsRUFBaEIscUJBQWdCLEVBQWhCLElBQWdCO1FBQWhCLCtCQUFnQjs7SUFDdEQsT0FBTyxDQUFDLEtBQUssT0FBYixPQUFPLG1CQUFXLE1BQU0sR0FBRTtDQUNqQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEZWJ1Z0NvbnRleHR9IGZyb20gJy4vdmlldyc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9UWVBFID0gJ25nVHlwZSc7XG5leHBvcnQgY29uc3QgRVJST1JfREVCVUdfQ09OVEVYVCA9ICduZ0RlYnVnQ29udGV4dCc7XG5leHBvcnQgY29uc3QgRVJST1JfT1JJR0lOQUxfRVJST1IgPSAnbmdPcmlnaW5hbEVycm9yJztcbmV4cG9ydCBjb25zdCBFUlJPUl9MT0dHRVIgPSAnbmdFcnJvckxvZ2dlcic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUoZXJyb3I6IEVycm9yKTogRnVuY3Rpb24ge1xuICByZXR1cm4gKGVycm9yIGFzIGFueSlbRVJST1JfVFlQRV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWJ1Z0NvbnRleHQoZXJyb3I6IEVycm9yKTogRGVidWdDb250ZXh0IHtcbiAgcmV0dXJuIChlcnJvciBhcyBhbnkpW0VSUk9SX0RFQlVHX0NPTlRFWFRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZ2luYWxFcnJvcihlcnJvcjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiAoZXJyb3IgYXMgYW55KVtFUlJPUl9PUklHSU5BTF9FUlJPUl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvckxvZ2dlcihlcnJvcjogRXJyb3IpOiAoY29uc29sZTogQ29uc29sZSwgLi4udmFsdWVzOiBhbnlbXSkgPT4gdm9pZCB7XG4gIHJldHVybiAoZXJyb3IgYXMgYW55KVtFUlJPUl9MT0dHRVJdIHx8IGRlZmF1bHRFcnJvckxvZ2dlcjtcbn1cblxuXG5mdW5jdGlvbiBkZWZhdWx0RXJyb3JMb2dnZXIoY29uc29sZTogQ29uc29sZSwgLi4udmFsdWVzOiBhbnlbXSkge1xuICAoPGFueT5jb25zb2xlLmVycm9yKSguLi52YWx1ZXMpO1xufSJdfQ==