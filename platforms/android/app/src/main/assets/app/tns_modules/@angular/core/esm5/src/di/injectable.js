/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { ReflectionCapabilities } from '../reflection/reflection_capabilities';
import { makeDecorator } from '../util/decorators';
import { getClosureSafeProperty } from '../util/property';
import { defineInjectable } from './defs';
import { inject, injectArgs } from './injector';
var GET_PROPERTY_NAME = {};
var ɵ0 = GET_PROPERTY_NAME;
var USE_VALUE = getClosureSafeProperty({ provide: String, useValue: ɵ0 }, GET_PROPERTY_NAME);
var EMPTY_ARRAY = [];
export function convertInjectableProviderToFactory(type, provider) {
    if (!provider) {
        var reflectionCapabilities = new ReflectionCapabilities();
        var deps_1 = reflectionCapabilities.parameters(type);
        // TODO - convert to flags.
        return function () { return new (type.bind.apply(type, tslib_1.__spread([void 0], injectArgs(deps_1))))(); };
    }
    if (USE_VALUE in provider) {
        var valueProvider_1 = provider;
        return function () { return valueProvider_1.useValue; };
    }
    else if (provider.useExisting) {
        var existingProvider_1 = provider;
        return function () { return inject(existingProvider_1.useExisting); };
    }
    else if (provider.useFactory) {
        var factoryProvider_1 = provider;
        return function () { return factoryProvider_1.useFactory.apply(factoryProvider_1, tslib_1.__spread(injectArgs(factoryProvider_1.deps || EMPTY_ARRAY))); };
    }
    else if (provider.useClass) {
        var classProvider_1 = provider;
        var deps_2 = provider.deps;
        if (!deps_2) {
            var reflectionCapabilities = new ReflectionCapabilities();
            deps_2 = reflectionCapabilities.parameters(type);
        }
        return function () {
            return new ((_a = classProvider_1.useClass).bind.apply(_a, tslib_1.__spread([void 0], injectArgs(deps_2))))();
            var _a;
        };
    }
    else {
        var deps_3 = provider.deps;
        if (!deps_3) {
            var reflectionCapabilities = new ReflectionCapabilities();
            deps_3 = reflectionCapabilities.parameters(type);
        }
        return function () { return new (type.bind.apply(type, tslib_1.__spread([void 0], injectArgs((deps_3)))))(); };
    }
}
/**
* Injectable decorator and metadata.
*
*
* @Annotation
*/
export var Injectable = makeDecorator('Injectable', undefined, undefined, undefined, function (injectableType, options) {
    if (options && options.providedIn !== undefined &&
        injectableType.ngInjectableDef === undefined) {
        injectableType.ngInjectableDef = defineInjectable({
            providedIn: options.providedIn,
            factory: convertInjectableProviderToFactory(injectableType, options)
        });
    }
});
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2luamVjdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUU3RSxPQUFPLEVBQUMsYUFBYSxFQUFxQixNQUFNLG9CQUFvQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRXhELE9BQU8sRUFBZ0MsZ0JBQWdCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkUsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFHOUMsSUFBTSxpQkFBaUIsR0FBRyxFQUFTLENBQUM7U0FFSixpQkFBaUI7QUFEakQsSUFBTSxTQUFTLEdBQUcsc0JBQXNCLENBQ3BDLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQW1CLEVBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBdUR2RSxJQUFNLFdBQVcsR0FBVSxFQUFFLENBQUM7QUFFOUIsTUFBTSw2Q0FDRixJQUFlLEVBQUUsUUFBNkI7SUFDaEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDNUQsSUFBTSxNQUFJLEdBQUcsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUVyRCxNQUFNLENBQUMsY0FBTSxZQUFJLElBQUksWUFBSixJQUFJLDZCQUFJLFVBQVUsQ0FBQyxNQUFhLENBQUMsT0FBckMsQ0FBc0MsQ0FBQztLQUNyRDtJQUVELEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQU0sZUFBYSxHQUFJLFFBQThCLENBQUM7UUFDdEQsTUFBTSxDQUFDLGNBQU0sT0FBQSxlQUFhLENBQUMsUUFBUSxFQUF0QixDQUFzQixDQUFDO0tBQ3JDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLFFBQWlDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFNLGtCQUFnQixHQUFJLFFBQWlDLENBQUM7UUFDNUQsTUFBTSxDQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsa0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQXBDLENBQW9DLENBQUM7S0FDbkQ7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsUUFBZ0MsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQU0saUJBQWUsR0FBSSxRQUFnQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxjQUFNLE9BQUEsaUJBQWUsQ0FBQyxVQUFVLE9BQTFCLGlCQUFlLG1CQUFlLFVBQVUsQ0FBQyxpQkFBZSxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsSUFBN0UsQ0FBOEUsQ0FBQztLQUM3RjtJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRSxRQUF3RCxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBTSxlQUFhLEdBQUksUUFBd0QsQ0FBQztRQUNoRixJQUFJLE1BQUksR0FBSSxRQUFvQyxDQUFDLElBQUksQ0FBQztRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFNLHNCQUFzQixHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztZQUM1RCxNQUFJLEdBQUcsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsTUFBTSxDQUFDO1lBQU0sWUFBSSxDQUFBLEtBQUEsZUFBYSxDQUFDLFFBQVEsQ0FBQSwyQ0FBSSxVQUFVLENBQUMsTUFBSSxDQUFDOztRQUE5QyxDQUErQyxDQUFDO0tBQzlEO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLE1BQUksR0FBSSxRQUFvQyxDQUFDLElBQUksQ0FBQztRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFNLHNCQUFzQixHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztZQUM1RCxNQUFJLEdBQUcsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsTUFBTSxDQUFDLGNBQU0sWUFBSSxJQUFJLFlBQUosSUFBSSw2QkFBSSxVQUFVLENBQUMsQ0FBQSxNQUFNLENBQUEsQ0FBQyxPQUE5QixDQUErQixDQUFDO0tBQzlDO0NBQ0Y7Ozs7Ozs7QUFRRCxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQXdCLGFBQWEsQ0FDeEQsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUM3QyxVQUFDLGNBQW1DLEVBQ25DLE9BQXFFO0lBQ3BFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVM7UUFDM0MsY0FBYyxDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pELGNBQWMsQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7WUFDaEQsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLE9BQU8sRUFBRSxrQ0FBa0MsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO1NBQ3JFLENBQUMsQ0FBQztLQUNKO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1JlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJy4uL3JlZmxlY3Rpb24vcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi90eXBlJztcbmltcG9ydCB7bWFrZURlY29yYXRvciwgbWFrZVBhcmFtRGVjb3JhdG9yfSBmcm9tICcuLi91dGlsL2RlY29yYXRvcnMnO1xuaW1wb3J0IHtnZXRDbG9zdXJlU2FmZVByb3BlcnR5fSBmcm9tICcuLi91dGlsL3Byb3BlcnR5JztcblxuaW1wb3J0IHtJbmplY3RhYmxlRGVmLCBJbmplY3RhYmxlVHlwZSwgZGVmaW5lSW5qZWN0YWJsZX0gZnJvbSAnLi9kZWZzJztcbmltcG9ydCB7aW5qZWN0LCBpbmplY3RBcmdzfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7Q2xhc3NTYW5zUHJvdmlkZXIsIENvbnN0cnVjdG9yUHJvdmlkZXIsIENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyLCBFeGlzdGluZ1Byb3ZpZGVyLCBFeGlzdGluZ1NhbnNQcm92aWRlciwgRmFjdG9yeVByb3ZpZGVyLCBGYWN0b3J5U2Fuc1Byb3ZpZGVyLCBTdGF0aWNDbGFzc1Byb3ZpZGVyLCBTdGF0aWNDbGFzc1NhbnNQcm92aWRlciwgVmFsdWVQcm92aWRlciwgVmFsdWVTYW5zUHJvdmlkZXJ9IGZyb20gJy4vcHJvdmlkZXInO1xuXG5jb25zdCBHRVRfUFJPUEVSVFlfTkFNRSA9IHt9IGFzIGFueTtcbmNvbnN0IFVTRV9WQUxVRSA9IGdldENsb3N1cmVTYWZlUHJvcGVydHk8VmFsdWVQcm92aWRlcj4oXG4gICAge3Byb3ZpZGU6IFN0cmluZywgdXNlVmFsdWU6IEdFVF9QUk9QRVJUWV9OQU1FfSwgR0VUX1BST1BFUlRZX05BTUUpO1xuXG4vKipcbiAqIEluamVjdGFibGUgcHJvdmlkZXJzIHVzZWQgaW4gYEBJbmplY3RhYmxlYCBkZWNvcmF0b3IuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgdHlwZSBJbmplY3RhYmxlUHJvdmlkZXIgPSBWYWx1ZVNhbnNQcm92aWRlciB8IEV4aXN0aW5nU2Fuc1Byb3ZpZGVyIHxcbiAgICBTdGF0aWNDbGFzc1NhbnNQcm92aWRlciB8IENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyIHwgRmFjdG9yeVNhbnNQcm92aWRlciB8IENsYXNzU2Fuc1Byb3ZpZGVyO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEluamVjdGFibGUgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqIGBgYFxuICAgKiBASW5qZWN0YWJsZSgpXG4gICAqIGNsYXNzIENhciB7fVxuICAgKiBgYGBcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEEgbWFya2VyIG1ldGFkYXRhIHRoYXQgbWFya3MgYSBjbGFzcyBhcyBhdmFpbGFibGUgdG8ge0BsaW5rIEluamVjdG9yfSBmb3IgY3JlYXRpb24uXG4gICAqXG4gICAqIEZvciBtb3JlIGRldGFpbHMsIHNlZSB0aGUge0BsaW5rRG9jcyBndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBcIkRlcGVuZGVuY3kgSW5qZWN0aW9uIEd1aWRlXCJ9LlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzIHJlZ2lvbj0nSW5qZWN0YWJsZSd9XG4gICAqXG4gICAqIHtAbGluayBJbmplY3Rvcn0gd2lsbCB0aHJvdyBhbiBlcnJvciB3aGVuIHRyeWluZyB0byBpbnN0YW50aWF0ZSBhIGNsYXNzIHRoYXRcbiAgICogZG9lcyBub3QgaGF2ZSBgQEluamVjdGFibGVgIG1hcmtlciwgYXMgc2hvd24gaW4gdGhlIGV4YW1wbGUgYmVsb3cuXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL21ldGFkYXRhX3NwZWMudHMgcmVnaW9uPSdJbmplY3RhYmxlVGhyb3dzJ31cbiAgICpcbiAgICpcbiAgICovXG4gICgpOiBhbnk7XG4gIChvcHRpb25zPzoge3Byb3ZpZGVkSW46IFR5cGU8YW55PnwgJ3Jvb3QnIHwgbnVsbH0mSW5qZWN0YWJsZVByb3ZpZGVyKTogYW55O1xuICBuZXcgKCk6IEluamVjdGFibGU7XG4gIG5ldyAob3B0aW9ucz86IHtwcm92aWRlZEluOiBUeXBlPGFueT58ICdyb290JyB8IG51bGx9JkluamVjdGFibGVQcm92aWRlcik6IEluamVjdGFibGU7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgSW5qZWN0YWJsZSBtZXRhZGF0YS5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0YWJsZSB7XG4gIHByb3ZpZGVkSW4/OiBUeXBlPGFueT58J3Jvb3QnfG51bGw7XG4gIGZhY3Rvcnk6ICgpID0+IGFueTtcbn1cblxuY29uc3QgRU1QVFlfQVJSQVk6IGFueVtdID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0SW5qZWN0YWJsZVByb3ZpZGVyVG9GYWN0b3J5KFxuICAgIHR5cGU6IFR5cGU8YW55PiwgcHJvdmlkZXI/OiBJbmplY3RhYmxlUHJvdmlkZXIpOiAoKSA9PiBhbnkge1xuICBpZiAoIXByb3ZpZGVyKSB7XG4gICAgY29uc3QgcmVmbGVjdGlvbkNhcGFiaWxpdGllcyA9IG5ldyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCk7XG4gICAgY29uc3QgZGVwcyA9IHJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucGFyYW1ldGVycyh0eXBlKTtcbiAgICAvLyBUT0RPIC0gY29udmVydCB0byBmbGFncy5cbiAgICByZXR1cm4gKCkgPT4gbmV3IHR5cGUoLi4uaW5qZWN0QXJncyhkZXBzIGFzIGFueVtdKSk7XG4gIH1cblxuICBpZiAoVVNFX1ZBTFVFIGluIHByb3ZpZGVyKSB7XG4gICAgY29uc3QgdmFsdWVQcm92aWRlciA9IChwcm92aWRlciBhcyBWYWx1ZVNhbnNQcm92aWRlcik7XG4gICAgcmV0dXJuICgpID0+IHZhbHVlUHJvdmlkZXIudXNlVmFsdWU7XG4gIH0gZWxzZSBpZiAoKHByb3ZpZGVyIGFzIEV4aXN0aW5nU2Fuc1Byb3ZpZGVyKS51c2VFeGlzdGluZykge1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgRXhpc3RpbmdTYW5zUHJvdmlkZXIpO1xuICAgIHJldHVybiAoKSA9PiBpbmplY3QoZXhpc3RpbmdQcm92aWRlci51c2VFeGlzdGluZyk7XG4gIH0gZWxzZSBpZiAoKHByb3ZpZGVyIGFzIEZhY3RvcnlTYW5zUHJvdmlkZXIpLnVzZUZhY3RvcnkpIHtcbiAgICBjb25zdCBmYWN0b3J5UHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgRmFjdG9yeVNhbnNQcm92aWRlcik7XG4gICAgcmV0dXJuICgpID0+IGZhY3RvcnlQcm92aWRlci51c2VGYWN0b3J5KC4uLmluamVjdEFyZ3MoZmFjdG9yeVByb3ZpZGVyLmRlcHMgfHwgRU1QVFlfQVJSQVkpKTtcbiAgfSBlbHNlIGlmICgocHJvdmlkZXIgYXMgU3RhdGljQ2xhc3NTYW5zUHJvdmlkZXIgfCBDbGFzc1NhbnNQcm92aWRlcikudXNlQ2xhc3MpIHtcbiAgICBjb25zdCBjbGFzc1Byb3ZpZGVyID0gKHByb3ZpZGVyIGFzIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyIHwgQ2xhc3NTYW5zUHJvdmlkZXIpO1xuICAgIGxldCBkZXBzID0gKHByb3ZpZGVyIGFzIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyKS5kZXBzO1xuICAgIGlmICghZGVwcykge1xuICAgICAgY29uc3QgcmVmbGVjdGlvbkNhcGFiaWxpdGllcyA9IG5ldyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCk7XG4gICAgICBkZXBzID0gcmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wYXJhbWV0ZXJzKHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gbmV3IGNsYXNzUHJvdmlkZXIudXNlQ2xhc3MoLi4uaW5qZWN0QXJncyhkZXBzKSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGRlcHMgPSAocHJvdmlkZXIgYXMgQ29uc3RydWN0b3JTYW5zUHJvdmlkZXIpLmRlcHM7XG4gICAgaWYgKCFkZXBzKSB7XG4gICAgICBjb25zdCByZWZsZWN0aW9uQ2FwYWJpbGl0aWVzID0gbmV3IFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMoKTtcbiAgICAgIGRlcHMgPSByZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnBhcmFtZXRlcnModHlwZSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBuZXcgdHlwZSguLi5pbmplY3RBcmdzKGRlcHMgISkpO1xuICB9XG59XG5cbi8qKlxuKiBJbmplY3RhYmxlIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4qXG4qXG4qIEBBbm5vdGF0aW9uXG4qL1xuZXhwb3J0IGNvbnN0IEluamVjdGFibGU6IEluamVjdGFibGVEZWNvcmF0b3IgPSBtYWtlRGVjb3JhdG9yKFxuICAgICdJbmplY3RhYmxlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCxcbiAgICAoaW5qZWN0YWJsZVR5cGU6IEluamVjdGFibGVUeXBlPGFueT4sXG4gICAgIG9wdGlvbnM6IHtwcm92aWRlZEluPzogVHlwZTxhbnk+fCAncm9vdCcgfCBudWxsfSAmIEluamVjdGFibGVQcm92aWRlcikgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm92aWRlZEluICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBpbmplY3RhYmxlVHlwZS5uZ0luamVjdGFibGVEZWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbmplY3RhYmxlVHlwZS5uZ0luamVjdGFibGVEZWYgPSBkZWZpbmVJbmplY3RhYmxlKHtcbiAgICAgICAgICBwcm92aWRlZEluOiBvcHRpb25zLnByb3ZpZGVkSW4sXG4gICAgICAgICAgZmFjdG9yeTogY29udmVydEluamVjdGFibGVQcm92aWRlclRvRmFjdG9yeShpbmplY3RhYmxlVHlwZSwgb3B0aW9ucylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbi8qKlxuICogVHlwZSByZXByZXNlbnRpbmcgaW5qZWN0YWJsZSBzZXJ2aWNlLlxuICpcbiAqIEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlVHlwZTxUPiBleHRlbmRzIFR5cGU8VD4geyBuZ0luamVjdGFibGVEZWY6IEluamVjdGFibGVEZWY8VD47IH1cbiJdfQ==