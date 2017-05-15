# youtube-api-info

gh-pages: https://kr1an.github.io/rc-youtube-api/

Project working with youtube api to get infos about search request video. Uses webpack, eslint, es6, sass.

## Environment setup

```sh
  $ npm install
```

## Development

Start the Webpack server (includes live reloading when you change files):

```sh
  $ npm start
```

Open [http://localhost:3001](http://localhost:3001) in a browser. `./src/main.js` is the entry point.

## Sass linting

[Stylelint](http://stylelint.io/) is used to enforce consistent conventions and avoid errors in stylesheets.
`.stylelintrc` configuration file contains all the available rules for completeness, with the ones that I don't currently need turned off (set to `null`).

## Bundling

```sh
  $ npm run bundle
```

## Credits

- https://github.com/rauschma/webpack-es6-demo
- https://github.com/srn/react-webpack-boilerplate
- https://css-tricks.com/stylelint/
