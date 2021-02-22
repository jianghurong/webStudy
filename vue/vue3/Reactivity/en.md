Reactivity in Depth
Now it’s time to take a deep dive! One of Vue’s most distinct features is the unobtrusive reactivity system. Models are proxied JavaScript objects. When you modify them, the view updates. It makes state management simple and intuitive, but it’s also important to understand how it works to avoid some common gotchas. In this section, we are going to dig into some of the lower-level details of Vue’s reactivity system.

Watch a free video on Reactivity in Depth on Vue Mastery
#What is Reactivity?
This term comes up in programming quite a bit these days, but what do people mean when they say it? Reactivity is a programming paradigm that allows us to adjust to changes in a declarative manner. The canonical example that people usually show, because it’s a great one, is an excel spreadsheet.

If you put the number two in the first cell, and the number 3 in the second and asked for the SUM, the spreadsheet would give it to you. No surprises there. But if you update that first number, the SUM automagically updates too.

JavaScript doesn’t usually work like this -- If we were to write something comparable in JavaScript:

var val1 = 2
var val2 = 3
var sum = val1 + val2

// sum
// 5

val1 = 3

// sum
// 5

If we update the first value, the sum is not adjusted.

So how would we do this in JavaScript?

Detect when there’s a change in one of the values
Track the function that changes it
Trigger the function so it can update the final value

How Vue Tracks These Changes
When you pass a plain JavaScript object to an application or component instance as its data option, Vue will walk through all of its properties and convert them to Proxies using a handler with getters and setters. This is an ES6-only feature, but we offer a version of Vue 3 that uses the older Object.defineProperty to support IE browsers. Both have the same surface API, but the Proxy version is slimmer and offers improved performance.

That was rather quick and requires some knowledge of Proxies to understand! So let’s dive in a bit. There’s a lot of literature on Proxies, but what you really need to know is that a Proxy is an object that encases another object or function and allows you to intercept it.

We use it like this: new Proxy(target, handler)

Ok, so far, we’re just wrapping that object and returning it. Cool, but not that useful yet. But watch this, we can also intercept this object while we wrap it in the Proxy. This interception is called a trap.

Beyond a console log, we could do anything here we wish. We could even not return the real value if we wanted to. This is what makes Proxies so powerful for creating APIs.

Furthermore, there’s another feature Proxies offer us. Rather than just returning the value like this: target[prop], we could take this a step further and use a feature called Reflect, which allows us to do proper this binding. It looks like this: