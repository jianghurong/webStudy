This guide is primarily for users with prior Vue 2 experience who want to learn about the new features and changes in Vue 3. This is not something you have to read from top to bottom before trying out Vue 3. While it looks like a lot has changed, a lot of what you know and love about Vue is still the same; but we wanted to be as thorough as possible and provide detailed explanations and examples for every documented change.

Some of the new features to keep an eye on in Vue 3 include:

Composition API

Creating Vue components allows us to extract repeatable parts of the interface coupled with its functionality into reusable pieces of code. This alone can get our application pretty far in terms of maintainability and flexibility. However, our collective experience has proved that this alone might not be enough, especially when your application is getting really big – think several hundred components. When dealing with such large applications, sharing and reusing code becomes especially important.
Let’s imagine that in our app, we have a view to show a list of repositories of a certain user. On top of that, we want to apply search and filter capabilities. Our component handling this view could look like this:

This component has several responsibilities:

Getting repositories from a presumedly external API for that user name and refreshing it whenever the user changes
Searching for repositories using a searchQuery string
Filtering repositories using a filters object
Organizing logics with component's options (data, computed, methods, watch) works in most cases. However, when our components get bigger, the list of logical concerns also grows. This can lead to components that are hard to read and understand, especially for people who didn't write them in the first place.

Example presenting a large component where its logical concerns are grouped by colors.

Such fragmentation is what makes it difficult to understand and maintain a complex component. The separation of options obscures the underlying logical concerns. In addition, when working on a single logical concern, we have to constantly "jump" around option blocks for the relevant code.

It would be much nicer if we could collocate code related to the same logical concern. And this is exactly what the Composition API enables us to do.

Now that we know the why we can get to the how. To start working with the Composition API we first need a place where we can actually use it. In a Vue component, we call this place the setup.

The new setup component option is executed before the component is created, once the props are resolved, and serves as the entry point for composition API's.

WARNING

Because the component instance is not yet created when setup is executed, there is no this inside a setup option. This means, with the exception of props, you won't be able to access any properties declared in the component – local state, computed properties or methods.

The setup option should be a function that accepts props and context which we will talk about later. Additionally, everything that we return from setup will be exposed to the rest of our component (computed properties, methods, lifecycle hooks and so on) as well as to the component's template.

Let’s add setup to our component: