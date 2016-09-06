var Util = (function($, undefined) {

  var  BaseDataObject = (function() {

    var get = function(jsData, apiurl, callback, failfunc) {
      $.ajax({
        type: 'get',
        data: jsData,
        contentType: 'application/json',
        url: apiurl,  
        success: function(data) {
          callback(data);
        },
	  	error: function(err) {
			if(failfunc){
				failfunc(err);
			}
	  	}
      });
    };

    var post = function(jsData, apiurl, callback, failfunc){
      $.ajax({
        type: 'post',
        data: jsData,
        contentType: 'application/json',
        url: apiurl,  
        success: function(data) {
          callback(data);
        },
	  	error: function(err) {
			if(failfunc){
				failfunc(err);
			}
	  	}
      });
    };

    return {
      get:get,
      post:post
    }
  })();

  return {
    BaseDataObject:BaseDataObject
  };
})(jQuery);