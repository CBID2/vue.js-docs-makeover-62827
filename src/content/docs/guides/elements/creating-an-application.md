---
title: Creating an Application
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
description: A guide to creating an application with Vue.js
---
## Application Instance

Whether it's your portfolio website or a coding project, every Vue application starts by creating a new application instance with the `createApp` function:

```js
import { createApp } from 'vue'

const app = createApp({
  /* root component options */
})
```

## The Root Component​

When we create a new Vue application using `createApp`, we pass in what's called a "root component". Think of this component as the main container for your entire application - it's like the trunk of a tree from which all other components (the branches) will grow.

If you are using Single-File Components, we typically import the root component from another file like this:

```js
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = createApp(App)
```

In some applications like a todo app, you might organize your components like nested trees:

```bash
App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
   ├─ TodoClearButton
   └─ TodoStatistics
   ```

In this case, the `App` component would be the root component, and it would contain the `TodoList` component, which would contain the `TodoItem` component, and so on.

## Mounting the Application

Once we have our application instance, we can mount it to the DOM using the `.mount()` method:

```html
<div id = "app"></div>
```

```js
app.mount('#app')
```

As shown above, the `mount` method takes a CSS selector as an argument. This is the element that the application will be mounted to. In this case, the application will be mounted to the element with the ID of `app`. This is where the Vue application will be rendered.

<Aside type="note" label="caution">
Remember to apply **all** of the configurations before mounting the application. Without it, the application will not be able to function properly.
</Aside>

## In-DOM Root Component Template

In-DOM root component templates are used to define the structure and content of the root component. They are typically placed within the root component's template section. When combined with Vue, it makes it easier for users to set up the application, especially when [using Vue via a CDN](../quickstart.mdx#using-a-cdn). Here's an example:

```html
<template>
  <div>
    <h1>Hello, {{ name }}!</h1>
    <p>Welcome to my Vue.js application.</p>
    div>
    </template>
    ```
    ```js
    import { createApp } from 'vue'
    const app = createApp({ data() { return { name: 'John' } } })   
    app.mount('#app')
    ```
  
  In this example, the root component template contains an `<h1>` element with the text "Hello, {{ name }}!" and a `<p>` element with the text "Welcome to my Vue.js application." The `{{ name }}` syntax is a Vue directive that is used to bind the value of the `name` variable to the text content of the `<h1>` element. When the application is rendered, the value of the `name` variable will be inserted into the text content of the `<h1>` element.
