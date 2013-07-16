/* Require.Backbone.Marionette.Handlebars
 * Copyright (c) 2013 Damien SEGUIN
 * http://damienseguin.me/
 *
 * Base pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
 * Based on the work of Sebastian Golasch <public@asciidisco.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CON* NECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function(root, define, require, factory, undef) {
    // AMD
    if (typeof require === 'function' && typeof define === 'function' && define.amd) {
        // Require to override default globally
        require(['underscore', 'backbone', 'backboneMarionette'], function(_, Backbone) {
            // Check if we use the AMD branch of Backbone
            _ = _ === undef ? root._ : _;
            Backbone = Backbone === undef ? root.Backbone : Backbone;
            return (root.returnExportsGlobal = factory(_, Backbone, root));
        });
    } else {
        var msg = "require is " + require + "'";
        var err = new Error(msg);
        err.name = "NotAMD";
        throw err;
    }
}(this, this.define, this.require, function(_, Backbone, root, undef) {
    'use strict';

    // Use Handlebars loaded in the root, else use Marionette default render
    // with a precompiled template anyway
    var oldRender = Backbone.Marionette.Renderer.render;
    Backbone.Marionette.Renderer.render = function(template, data) {
        if (typeof root.Handlebars === 'object' && _.isFunction(template)) {
            return template(data);
        }

        // Using require text plugin or whatever
        return oldRender(template, data);
    };

    return Backbone.Marionette;
}));