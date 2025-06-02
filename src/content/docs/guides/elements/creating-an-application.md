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
<!-- do tomorrow -->