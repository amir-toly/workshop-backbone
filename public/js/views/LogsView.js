define(['models/LogCollection', 'text!templates/table.tmpl'], function(LogCollection, tableTpl) {

	return Backbone.View.extend({

        template: _.template(tableTpl),
        // handlebars : template : Handlebars.compile(tableTpl)

        events: {
        },

        initialize: function() {
        	this.collection = new LogCollection();
        	this.listenTo(this.collection, 'sync', this.render);
        	this.collection.fetch();
        },

        render: function() {
        	this.$el.html(this.template(this.collection.toJSON()));
        }

	});

});