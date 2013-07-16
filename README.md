require-backbone-marionette-handlebars
======================================

## About RBMH
Complete Alex Sexton's [Require.js Handlebars Plugin](https://github.com/SlexAxton/require-handlebars-plugin) to work with [Backbone Marionette](https://github.com/marionettejs/backbone.marionette). It provides a simple render logic by overriding the render method, testing if Handlebars exists in the root of the Require app.

## Dependencies
* [RequireJS](https://github.com/jrburke/requirejs)
* [Backbone](https://github.com/jashkenas/backbone) + Backbone dependencies
* [Backbone Marionette](https://github.com/marionettejs/backbone.marionette)
* [hbs.js](https://github.com/SlexAxton/require-handlebars-plugin) + HBS dependencies (see [https://github.com/SlexAxton/require-handlebars-plugin/pull/113](), could save a lot of time to configure it)

Check the above repositories for further details on how they work.

## Usage

	define([
		'jquery',
		'underscore',
		'backbone',
		'backboneMarionette',
		'rbmh',
		'hbs!template/directory/tpl',
	], function($, _, Backbone, Marionette, RBMH, tpl) {
		return Backbone.Marionette.ItemView.extend({

			template: tpl

		});
	});

---
The Backbone Marionette file is required as a dependency. Therefore, it should be aliased in the require paths config as `backboneMarionette`. Otherwise, just change the plugin to fit your needs.

## License
MIT License