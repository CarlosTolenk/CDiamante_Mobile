export { Animation as ɵAnimation } from './dsl/animation';
export { AnimationStyleNormalizer as ɵAnimationStyleNormalizer, NoopAnimationStyleNormalizer as ɵNoopAnimationStyleNormalizer } from './dsl/style_normalization/animation_style_normalizer';
export { WebAnimationsStyleNormalizer as ɵWebAnimationsStyleNormalizer } from './dsl/style_normalization/web_animations_style_normalizer';
export { AnimationDriver as ɵAnimationDriver, NoopAnimationDriver as ɵNoopAnimationDriver } from './render/animation_driver';
export { AnimationEngine as ɵAnimationEngine } from './render/animation_engine_next';
export { CssKeyframesDriver as ɵCssKeyframesDriver } from './render/css_keyframes/css_keyframes_driver';
export { CssKeyframesPlayer as ɵCssKeyframesPlayer } from './render/css_keyframes/css_keyframes_player';
export { containsElement as ɵcontainsElement, invokeQuery as ɵinvokeQuery, matchesElement as ɵmatchesElement, validateStyleProperty as ɵvalidateStyleProperty } from './render/shared';
export { WebAnimationsDriver as ɵWebAnimationsDriver, supportsWebAnimations as ɵsupportsWebAnimations } from './render/web_animations/web_animations_driver';
export { WebAnimationsPlayer as ɵWebAnimationsPlayer } from './render/web_animations/web_animations_player';
export { allowPreviousPlayerStylesMerge as ɵallowPreviousPlayerStylesMerge } from './util';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZV9leHBvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL3ByaXZhdGVfZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLE9BQU8sRUFBQyxTQUFTLElBQUksVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLHdCQUF3QixJQUFJLHlCQUF5QixFQUFFLDRCQUE0QixJQUFJLDZCQUE2QixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDMUwsT0FBTyxFQUFDLDRCQUE0QixJQUFJLDZCQUE2QixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDeEksT0FBTyxFQUFDLGVBQWUsSUFBSSxnQkFBZ0IsRUFBRSxtQkFBbUIsSUFBSSxvQkFBb0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNILE9BQU8sRUFBQyxlQUFlLElBQUksZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRixPQUFPLEVBQUMsa0JBQWtCLElBQUksbUJBQW1CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RyxPQUFPLEVBQUMsa0JBQWtCLElBQUksbUJBQW1CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RyxPQUFPLEVBQUMsZUFBZSxJQUFJLGdCQUFnQixFQUFFLFdBQVcsSUFBSSxZQUFZLEVBQUUsY0FBYyxJQUFJLGVBQWUsRUFBRSxxQkFBcUIsSUFBSSxzQkFBc0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JMLE9BQU8sRUFBQyxtQkFBbUIsSUFBSSxvQkFBb0IsRUFBRSxxQkFBcUIsSUFBSSxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzNKLE9BQU8sRUFBQyxtQkFBbUIsSUFBSSxvQkFBb0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzFHLE9BQU8sRUFBQyw4QkFBOEIsSUFBSSwrQkFBK0IsRUFBQyxNQUFNLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmV4cG9ydCB7QW5pbWF0aW9uIGFzIMm1QW5pbWF0aW9ufSBmcm9tICcuL2RzbC9hbmltYXRpb24nO1xuZXhwb3J0IHtBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIgYXMgybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIE5vb3BBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIgYXMgybVOb29wQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyfSBmcm9tICcuL2RzbC9zdHlsZV9ub3JtYWxpemF0aW9uL2FuaW1hdGlvbl9zdHlsZV9ub3JtYWxpemVyJztcbmV4cG9ydCB7V2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplciBhcyDJtVdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXJ9IGZyb20gJy4vZHNsL3N0eWxlX25vcm1hbGl6YXRpb24vd2ViX2FuaW1hdGlvbnNfc3R5bGVfbm9ybWFsaXplcic7XG5leHBvcnQge0FuaW1hdGlvbkRyaXZlciBhcyDJtUFuaW1hdGlvbkRyaXZlciwgTm9vcEFuaW1hdGlvbkRyaXZlciBhcyDJtU5vb3BBbmltYXRpb25Ecml2ZXJ9IGZyb20gJy4vcmVuZGVyL2FuaW1hdGlvbl9kcml2ZXInO1xuZXhwb3J0IHtBbmltYXRpb25FbmdpbmUgYXMgybVBbmltYXRpb25FbmdpbmV9IGZyb20gJy4vcmVuZGVyL2FuaW1hdGlvbl9lbmdpbmVfbmV4dCc7XG5leHBvcnQge0Nzc0tleWZyYW1lc0RyaXZlciBhcyDJtUNzc0tleWZyYW1lc0RyaXZlcn0gZnJvbSAnLi9yZW5kZXIvY3NzX2tleWZyYW1lcy9jc3Nfa2V5ZnJhbWVzX2RyaXZlcic7XG5leHBvcnQge0Nzc0tleWZyYW1lc1BsYXllciBhcyDJtUNzc0tleWZyYW1lc1BsYXllcn0gZnJvbSAnLi9yZW5kZXIvY3NzX2tleWZyYW1lcy9jc3Nfa2V5ZnJhbWVzX3BsYXllcic7XG5leHBvcnQge2NvbnRhaW5zRWxlbWVudCBhcyDJtWNvbnRhaW5zRWxlbWVudCwgaW52b2tlUXVlcnkgYXMgybVpbnZva2VRdWVyeSwgbWF0Y2hlc0VsZW1lbnQgYXMgybVtYXRjaGVzRWxlbWVudCwgdmFsaWRhdGVTdHlsZVByb3BlcnR5IGFzIMm1dmFsaWRhdGVTdHlsZVByb3BlcnR5fSBmcm9tICcuL3JlbmRlci9zaGFyZWQnO1xuZXhwb3J0IHtXZWJBbmltYXRpb25zRHJpdmVyIGFzIMm1V2ViQW5pbWF0aW9uc0RyaXZlciwgc3VwcG9ydHNXZWJBbmltYXRpb25zIGFzIMm1c3VwcG9ydHNXZWJBbmltYXRpb25zfSBmcm9tICcuL3JlbmRlci93ZWJfYW5pbWF0aW9ucy93ZWJfYW5pbWF0aW9uc19kcml2ZXInO1xuZXhwb3J0IHtXZWJBbmltYXRpb25zUGxheWVyIGFzIMm1V2ViQW5pbWF0aW9uc1BsYXllcn0gZnJvbSAnLi9yZW5kZXIvd2ViX2FuaW1hdGlvbnMvd2ViX2FuaW1hdGlvbnNfcGxheWVyJztcbmV4cG9ydCB7YWxsb3dQcmV2aW91c1BsYXllclN0eWxlc01lcmdlIGFzIMm1YWxsb3dQcmV2aW91c1BsYXllclN0eWxlc01lcmdlfSBmcm9tICcuL3V0aWwnO1xuIl19