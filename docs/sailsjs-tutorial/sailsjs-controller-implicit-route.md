---
slug: sailsjs-controller-implicit-route
title: "Controllers (Implicit Route)"
sidebar_position: 7
authors: [mwangi_gikonyo]
---

# Implicit Routes

In Sails.js, implicit routes—also known as <code>automatic</code> or <code>shadow routes</code>—are predefined routes that the framework binds automatically, providing default behaviors without requiring explicit route definitions.

These routes facilitate rapid development by offering standard mappings for common operations.

## Types of Implicit Routes
<ol>
    <li>
        <p><b>Blueprint Routes</b></p>
        <ul>
            <li><b>RESTful Routes:</b>Automatically generated routes that map standard RESTful URLs to controller actions, enabling CRUD (Create, Read, Update, Delete) operations on models. For example, a <code>ProductController</code> would have routes like <code>GET /product</code>, <code>POST /product</code>, <code>PUT /product/:id</code>, and <code>DELETE /product/:id</code>
            </li>
            <li><b>Action Routes:</b>Routes that map directly to individual controller actions, allowing access via URLs like <code>/controllerName/actionName</code>. For instance, an updatePrice action in <code>ProductController</code> would be accessible at <code>/product/updatePrice</code></li>
        </ul>
    </li>
    <li>
            <p><b>Asset Routes:</b></p>Routes that serve static assets located in the assets folder of a Sails.js application. Files such as images, JavaScript, and CSS are automatically available via routes matching their paths in the <code>assets</code> directory.
    </li>
</ol>


## Configuration

Implicit/Automatic routes can be enabled or disabled by configuring the <code>config/blueprints.js</code> file.

```javascript
/**
 * Blueprint API Configuration
 * (sails.config.blueprints)
 *
 * For background on the blueprint API in Sails, check out:
 * https://sailsjs.com/docs/reference/blueprint-api
 *
 * For details and more available options, see:
 * https://sailsjs.com/config/blueprints
 */

module.exports.blueprints = {

  /***************************************************************************
  *                                                                          *
  * Automatically expose implicit routes for every action in your app?       *
  *                                                                          *
  ***************************************************************************/

  // actions: false,


  /***************************************************************************
  *                                                                          *
  * Automatically expose RESTful routes for your models?                     *
  *                                                                          *
  ***************************************************************************/

  // rest: true,


  /***************************************************************************
  *                                                                          *
  * Automatically expose CRUD "shortcut" routes to GET requests?             *
  * (These are enabled by default in development only.)                      *
  *                                                                          *
  ***************************************************************************/

  // shortcuts: true,

};
```

This is how the file looks when you generate your project with <code>sails new</code>

We can make it cleaner for conciseness. Make it look like this;

```javascript
module.exports.blueprints = {
  actions: true,     // Enable implicit action routes
  rest: true,        // Enable implicit RESTful routes
  shortcuts: true    // Enable shortcut routes (e.g., /:model/find)
};
```

Make sure you hit save.
Here's what configuration means;

<ul>
<li><code>actions</code>: When set to true, Sails.js binds routes for every action in your controllers. More on what controllers are later.</li>
<li><code>rest</code>: Enables RESTful routes for your models.</li>
<li><code>shortcuts</code>: Provides shortcut routes for development purposes, such as <code>/model/find</code> or <code>/model/create</code></li>
</ul>

## The power of Explicit Routes
Explicit routes are great because they allow you to write models and readily have RESTful routes, allowing you to develop quality prototypes fast.

This gives SailsJS, as a framework it's power and utility in a busy commercial environment.

The downside to explicit routes is that they may expose all controller actions publicly. 

In production (secure) environments, the work around to this is to only expose actions that you wish to be accessed publicly.

Another way is to implement a security layer (e.g by using [Keycloak](https://keycloak.org)) which we shall cover later in the course.



