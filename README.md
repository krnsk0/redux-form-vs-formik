# Stencil

Sick of wrestling with webpack? Stencil is a fullstack-JS boilerplate with React on the front end and Express on the back end, but based on the Parcel bundler mounted as a middleware.

In development, `npm run start` asks Nodemon to watch the server folder (sans bundle) and restarts the server files when you change them. Whenever the server is running, the Parcel middleware watches the client files and package.json, rebuilding on changes and caching the results to serve quickly. Documentation for the parcel middleware bundler (and its configuration options) can be found [here](https://parceljs.org/api.html).

What you usually see in `.babelrc` is in `package.json` along with some config for the bundler.

Hot module reloading is configured to be on by default, meaning the server will refresh attached clients when HMR-eligible changes are made in the client folder. Parcel also provides an error overlay like the one you're used to from Create React App.

# Getting started

Create a new directory for your project, `git init`, and then `git remote add stencil https://github.com/krnsk0/stencil.git` and `git pull`. Now you can pull in changes from the Stencil remote wheneer you need to. 
