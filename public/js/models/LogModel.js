define(function () {

	return Backbone.Model.extend({

		defaults: {
			host: 'my host',
			date: 'my date',
			request: 'my request',
			status: 'my status',
			size: 'my size',
			method: 'my method',
			path: 'my path'
		},

		// Assuming that the following "response" object is used by convention
		parse:function(response){
			response.method = response.request.substring(0, response.request.indexOf(" "));
			response.path = /*TODO: dns.reverse(*/response.host/*);*/
			
			var timeStartDelimiterIdx = response.date.indexOf("T");
			response.date = response.date.substring(timeStartDelimiterIdx + 1, timeStartDelimiterIdx + 1 + 5);
			response.size += " B";
			
			return response;
		}

	});
});