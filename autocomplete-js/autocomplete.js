var htmlSearchFieldId = 'tags';
var wsName = 'http://56c9dd40.ngrok.io/suggest';
var delimiter = ' ';
var responseDelimiter = '\n';

$( function() {
	
    function split( val ) {
	  var re = new RegExp(delimiter, "g");
      return val.split( re );
    }
    function textFieldValue() {
		return $( "#" + htmlSearchFieldId ).val();
	}
	
	var cache = {
		tokenCount: 0,
		hints: []
	}
	
	function fetchHints(terms) {
		var words = terms.join('%20');
		var url = wsName + '?words=' + words;
		console.log(url);
		
		$.ajax({
			url:	url,
			async:	false,
			type:	'GET',
			contentType: 'text/html;charset=utf-8',
		})
		.done(function(data) {
			cache.hints = data.split(responseDelimiter);
			cache.tokenCount = terms.length;
		})
		.fail(function (xhr, ajaxOptions, thrownError) {
			alert('An Error Occurred!');
		});
	}
	
    $( "#" + htmlSearchFieldId )
      // don't navigate away from the field on tab when selecting an item
      .on( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
		delay: 750,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          
		  var responseList = [];
		  var terms = textFieldValue().split(delimiter);
		  var partial = terms.pop();
		  
		  if(terms.length != cache.tokenCount)
			  fetchHints(terms);
		  
			var responseList = $.grep(cache.hints, function(v) {
				return v.toLowerCase().includes(partial.toLowerCase());
			});
			
		  
		  response(responseList);
        },
		
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
			
		  var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( delimiter );
		  
		  // Bring up the autocomplete automatically
		  $("#" + htmlSearchFieldId).trigger("keydown");
		  
		  return false;
        }
      });
	  
	  fetchHints([]);
	  $("#" + htmlSearchFieldId).trigger("keydown");
  } );