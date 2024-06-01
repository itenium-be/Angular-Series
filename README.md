# Angular Pipes

[Link to the blog post](https://itenium.be/blog/javascript/angular-pipes/)


## Run

Some live experimentation?  

- `app.component.html`: Obviously, most action is going on in here! Best viewed with browser and html code side by side.
- `app.component.ts`: Injecting a pipe + setting up helpers for `AsyncPipe`, `DatePipe` and `KeyValuePipe`.
- `app.module.ts`: Loading/Setting locale + declarations for pipes used in `app.component.html`.

Node: v22.1.0

```
ng serve
```


## Test

There are some tests in `hours.pipe.spec.ts`

```
ng test
```
