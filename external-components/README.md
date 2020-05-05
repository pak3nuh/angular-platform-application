# ExternalComponents

Contains components developed and used in isolation. It should be a different
repository, built and deployed independently.

### Dependency inversion principle

_High level modules should not depend on low level modules, both should depend
on abstractions._

This is why bridge interfaces should be built in order to decouple both projects
completely. It avoids propagation of a change in either public APIs to only the
bridge layer.
