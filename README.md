# Design Patterns

Design patterns explained with Javascript.

### Singleton

Singletons are usually an anti-pattern, but sometimes you need them. An example would be a router used throughout an application. Imagine you have an application with multiple components that are rendered depending on the route. When a new route is called, you need to look at all the routes that exist and render the corresponding component. You want one, and only one, instance of the router where you store all your routes.

[Singleton - Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)
[Angular - Singleton Services](https://angular.io/guide/singleton-services)
