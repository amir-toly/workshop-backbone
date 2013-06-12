define(['models/LogCollection', 'text!templates/table.tmpl'], function(LogCollection, tableTpl) {

	return Backbone.View.extend({

        // underscore : template : _.template(tableTpl)
        // handlebars : template : Handlebars.compile(tableTpl)

        events: {
        },

        initialize: function() {
        	this.render();
        },

        render: function() {
        	this.$el.html(tableTpl);
        }

	});

});