# vue-tap

> Tap events plugin for Vue.js

This is a lightweight plugin for TouchEvent in mobile without any dependency, which removes the 300ms delay from clicks.

## Install

#### CommonJS

- Available through npm as `vue-tap`.

``` js
var VueTap = require('vue-tap')
Vue.use(VueTap)
```

#### Direct include

- You can also directly include it with a `<script>` tag. It will automatically install itself, and will add a global `VueTap`.

## Usage

#### Using the `v-tap` directive

``` html
<div v-tap="handler">I am a div.</div>
```

also, you can pass parameters to the directive, like this:

``` html
<div v-tap="handler('hello', $event)">I am a div.</div>
```

## License

MIT