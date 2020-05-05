# Platform

A test application that simulates a platform using several developed external libraries.

## Use cases

#### External libraries

Use external libraries that consume platform services. This is the standard approach
provided by Angular to create shared resources.

We should successfully create external components and services that are built and
tested completely in separate, and use them in the platform. Some of these services
will require dependencies that aren't provided within the library itself and must
be provided by the platform. This architecture will ensure loose coupling and separation
of conserns.

##### Additional requirements

For these projects to work correctly, the libraries must be compiled against an
angular version that is compatible with the platform version. **This should be an
automatic validation and should break the build.**

#### Standalone web components

Use external libraries as standalone [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
with the help of [angular elements](https://angular.io/guide/elements).

Because these are completely separate apps bundled as a custom element, they
don't need to be built against the same Angular version.

As a downside this approach isn't very resource friendly because will bundle
and entire app within an element, not allowing dependency sharing or introspection.

### Folder dependencies

For testing purposes we can use folder dependencies and avoid a npm registry.
For this to work correctly we must tell the angular compiler to use symbolic links
in `angular.json`:
````json
{
  "projects": {
    "platform": {
      "architect": {
        "options": {
          "preserveSymlinks": true
        }
      }
    }
  }
}
````
