#
Custom Directives
#Intro
In addition to the default set of directives shipped in core (like v-model or v-show), Vue also allows you to register your own custom directives. Note that in Vue, the primary form of code reuse and abstraction is components - however, there may be cases where you need some low-level DOM access on plain elements, and this is where custom directives would still be useful. An example would be focusing on an input element, like this one:

When the page loads, that element gains focus (note: autofocus doesn't work on mobile Safari). In fact, if you haven't clicked on anything else since visiting this page, the input above should be focused now. Also, you can click on the Rerun button and input will be focused.

Now let's build the directive that accomplishes this:

If you want to register a directive locally instead, components also accept a directives option: