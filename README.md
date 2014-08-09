# Jen Kinney's Site

This is the portfolio for the photographer Jen Kinney.

#### Running the app during development

You can pick one of these options:

* serve this repository with your webserver
* install node.js and run `scripts/web-server.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.


#### Running the app in production

This really depends on how complex is your app and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

#### Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> main stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
      sass/             --> sass files
        app.scss        --> compiles into app.css
    node_modules/
    routes/
      index.js          --> the only route file needed
    app.js              --> sets up express, main routes file
    nodejs_app.sh       --> shell file for running on the Webfaction server
    package.json        --> manifest
    README.md           --> you're reading it

