define(['text!templates/search.tmpl'], function(template) {

	return Backbone.View.extend({

        events: {
        },

        initialize: function() {
        	this.render();
        },

        render: function() {
        	return this.$el.html(template);
        }

	});

});