---
slug: sailsjs-exercise-3
title: "Exercise 3: Your First API (The easy way)"
sidebar_position: 9
authors: [mwangi_gikonyo]
---

In the [Controllers (Implicit Routes)](/sailsjs-controller-implicit-route) section, we saw the power of Sails.js framework enabled by implicit routes. In this exercise, we shall also observe another super power of Sails.js - generating APIs.


The Sails.js framework provides the command <code>sails generate api <i>api-name</i> </code> that automatically generates the basic API components;

- the model
- controller


In this section, let's spin up an sailsjs api.

Let's design an API (Application Programming Interface) that will list top 5 local music hits of March 2025.

Give it a try;

Navigate to the root of the application we created.
Type in the following

```
sails generate new api hits
```

You should see the output if the command was successful;
```
info: Created a new api!
```

This will result in two new files, one for the model, another for the controller;

### Controller <code>api/controllers/HitsController.js</code>
```javascript
/**
 * HitsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

};
```

### Model <code>api/models/Hits.js</code>
```javascript
/**
 * Hits.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};
```







