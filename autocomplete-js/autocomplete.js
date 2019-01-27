var htmlSearchFieldId = 'tags';
var wsName = 'http://6198d0d3.ngrok.io/suggest';
var delimiter = ' ';
var responseDelimiter = '\n';

$( function() {
	
    function split( val ) {
	  var re = new RegExp(delimiter, "g");
      return val.split( re );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
	function currentPosition( val ) {
		return split(val).length;
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
		  var terms = request.term.split(' ');
		  var partial = terms.pop();
		  var words = terms.join('%20');
		  
		  console.log(terms);
		  console.log(partial);
		  console.log(words);
		  
			  var url = wsName + '?words=' + words;
			  console.log(url);
				
			$.ajax({
				url:	url,
				async:	false,
				type:	'GET',
				contentType: 'text/html;charset=utf-8',
			})
			.done(function(data) {
				responseList = data.split(responseDelimiter);
				console.log(responseList);
				responseList = $.grep(responseList, function(v) {
					return v.toLowerCase().includes(partial.toLowerCase());
				});
			})
			.fail(function (xhr, ajaxOptions, thrownError) {
				alert('An Error Occurred!');
			});
		  
		  response(responseList);
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
			//this.value += ' ' + ui.item.value;
			
			var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( delimiter );
          return false;
          
		  
		  return false;
        }
      });
  } );