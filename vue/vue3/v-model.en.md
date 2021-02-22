Overview
In terms of what has changed, at a high level:

BREAKING: When used on custom components, v-model prop and event default names are changed:
prop: value -> modelValue;
event: input -> update:modelValue;
BREAKING: v-bind's .sync modifier and component model option are removed and replaced with an argument on v-model;
NEW: Multiple v-model bindings on the same component are possible now;
NEW: Added the ability to create custom v-model modifiers.
For more information, read on!
