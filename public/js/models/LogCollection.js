define(['./LogModel'], function(LogModel) {

	var LogCollection = Backbone.Collection.extend({

	    model:LogModel,
	    url: "/data/logs.json"

	});

	return LogCollection;
});