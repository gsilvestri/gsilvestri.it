# MDG Site

This is my personal website, deployed to [gsilvestri.it](https://www.gsilvestri.it/) via [Netlify](https://www.netlify.com/). Anything pushed to the `master` branch will be automatically deployed via Netlify's continuous deployment.


## Run the site

I'm using our static site generator `maw` ([make a website](https://github.com/meteor/website-tool)) to support Less, Handlebars, and hot reloading. If you're looking to add new files/pages, visit this repo to read more about `maw`.

To run the site:

```
npm install
npm start
```

This will watch the /src directory, and put the output in /build whenever a file changes, plus automatically reload your browser.

For deployment, run `maw build` to build the site and put the output in the /build directory.
