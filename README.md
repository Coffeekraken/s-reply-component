# Coffeekraken s-reply-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/s-reply-component">
		<img src="https://img.shields.io/travis/coffeekraken/s-reply-component.svg?style=flat-square" />
	</a> -->
	<a href="https://www.npmjs.com/package/coffeekraken-s-reply-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-reply-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-reply-component/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-reply-component.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/s-reply-component">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-reply-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-reply-component">
		<img src="https://img.shields.io/github/forks/coffeekraken/s-reply-component.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-reply-component">
		<img src="https://img.shields.io/github/stars/coffeekraken/s-reply-component.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

<p class="lead">Provide some clean reply message display for your form, etc...</p>

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-reply-component)

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-reply-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [SASS API](doc/sass)
5. [Browsers support](#readme-browsers-support)
6. [Code linting](#readme-code-linting)
7. [Contribute](#readme-contribute)
8. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
9. [Licence](#readme-license)

<a name="readme-install"></a>

## Install

```
npm install coffeekraken-s-reply-component --save
```

<a name="readme-get-started"></a>

## Get Started

First, import and setup the [Coffeekraken Sugar toolkit](https://github.com/coffeekraken/sugar)

Then, import the component into your scss file like so:

```scss
@import 'node_modules/coffeekraken-s-reply-component/index';
```

Then, generate the classes like so:

```scss
@include s-reply-classes(
  $colors: default primary secondary
);
```

Then simply use it inside your html like so:

```html
<div class="reply reply--success">
  <p class="p">
    Donec sit amet vehicula nisi. Aenean condimentum fermentum scelerisque. Quisque.
  </p>
</div>
```

<a id="readme-browsers-support"></a>

## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11+                                                                                                                                                              | last 2 versions                                                                                                                                                   | last 2 versions                                                                                                                                                | last 2 versions                                                                                                                                                |

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

<a id="readme-code-linting"></a>

## Code linting

This package uses some code linting rules. Here's the list:

2. [Stylelint](https://github.com/stylelint/stylelint) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for `scss` files

> Your commits will not been accepted if the code style is not respected!

<a id="readme-contribute"></a>

## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>

## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>

## License

The code is available under the [MIT license](LICENSE). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
