# Angular Pipes

[Link to the blog post](https://itenium.be/blog/javascript/angular-pipes/)


## Run

Some live experimentation?  

- `app.component.html`: Obviously, most action is going on in here! Best viewed with browser and html code side by side.
- `app.component.ts`: Injecting a pipe + setting up helpers for `AsyncPipe`, `DatePipe` and `KeyValuePipe`.
- `app.config.ts`: Loading/Setting locale defaults.

Node: v22.1.0  
Angular: v18

```sh
cd angular-pipes
npm install
ng serve
```


## Test

There are some tests in `hours.pipe.spec.ts`

```sh
ng test
```
