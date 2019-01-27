var htmlSearchFieldId = 'tags';

var responseData = {
	1: [
		{ value: 'ABCSTUDIOS', label: 'ABC Studios Inc' },
		{ value: 'ABARTENDE', label: 'USA Bartending School' },
		{ value: 'ACTIVESTAF', label: 'Active Staffing Service' },
		{ value: 'ALPHABETLD', label: 'Alphabetland School Center' },
		{ value: 'AMROBANK', label: 'AMRO Bank N.V.' },
		{ value: 'ANTUNSWEST', label: 'Antun\'s of Westchester' },
		{ value: 'APOSTELSCH', label: 'Church of The Apostles' },
		{ value: 'ARTCAGES', label: 'Artcages' },
		{ value: 'ASAHISUNTR', label: 'Asahi Sun Tours' },
		{ value: 'ASBLBAR', label: 'Nautilus Bar SABL' },
		{ value: 'AVACUST1', label: 'Avalara Customer' },
		{ value: 'BEAUTYSCH', label: 'New York International Beauty School Ltd' },
		{ value: 'BESTYPEIMG', label: 'Bestype Image' },
		{ value: 'BIBIMBAB', label: 'Bibimbab Korean Restaurant' },
		{ value: 'BORDERSHOP', label: 'Borders Books, Music & Cafe' },
		{ value: 'BOULDERCR', label: 'Boulder Couriers Denver' },
		{ value: 'BRASSKEY', label: 'Brass Key Bar' },
		{ value: 'CARIBBEAN', label: 'Caribbean Secretary Online' },
		{ value: 'CARTRIDGE', label: 'Cartridge World Inc' },
		{ value: 'CASHCONNEC', label: 'Cash Connection' },
		{ value: 'CHOCOLATE', label: 'Chocolate By Design' },
		{ value: 'CJOEQUIP', label: 'Jersey Central Office Equip' },
		{ value: 'FDICOCCIA', label: 'Cocciatari Pizza' },
		{ value: 'COMPURESOU', label: 'Compuresource, Ltd' },
		{ value: 'COMPUWORLD', label: 'Computer World' },
		{ value: 'CRABTREE', label: 'Crabtree Kittle House Inn' },
		{ value: 'CULINARYIN', label: 'Institute of Culinary Education' },
		{ value: 'DACITYCONS', label: 'DA CITY CONSTRUCT SUPERVISE TEAM' },
		{ value: 'NSSDATA', label: 'Data Recovery Services' },
		{ value: 'DIGITECHPR', label: 'Digitech Printers' },
		{ value: 'ELITEANSW', label: 'Elite Answering' },
		{ value: 'ETELLIGENT', label: 'Etelligent Solutions' },
		{ value: 'NSSGLOGCON', label: 'Glog Consulting' },
		{ value: 'INDSUPPLY', label: 'Industrial Supply Inc' },
		{ value: 'GOLDRIVER', label: 'Gold River Taxi Service' },
		{ value: 'HDTECHSERV', label: 'HD Technical Services Limited' },
		{ value: 'HIEKELCSEV', label: 'Hiekel Computer Service' },
		{ value: 'HUNTINGTON', label: 'Huntington National Learning Center' },
		{ value: 'JEVTCOMPUT', label: 'Jevy Computers' },
		{ value: 'KAMMSYSTEM', label: 'Kamm System France' },
		{ value: 'KRKCONSULT', label: 'KRK Consulting Service' },
		{ value: 'LASERWORKS', label: 'LaserWorks' },
		{ value: 'SNOTUSCANY', label: 'SPORTS CENTER OF TUSCANY' },
		{ value: 'LOGICALINF', label: 'Logical Information Solutions' },
		{ value: 'HGTBRICK', label: 'Acme Brick Company' },
		{ value: 'FDIAGRI', label: 'Agrilink Food' },
		{ value: 'MAKSYSTEMM', label: 'Mak System France' },
		{ value: 'MARINAGOLF', label: 'Marina Golf Club' },
		{ value: 'INDSACRAME', label: 'Sacramento Industrial Supply' },
		{ value: 'MARLINOFFI', label: 'Marlin Office Beverage Service' },
		{ value: 'MICROCHIP', label: 'Microchip Restaurant' },
		{ value: 'MIDWOOD', label: 'Midwood Ambulance' },
		{ value: 'MODELAGENC', label: 'USA- NY Models Agency' },
		{ value: 'MUSICAREA', label: 'MUSIC AREA' },
		{ value: 'NAAAPASSOC', label: 'Naaap Associates' },
		{ value: 'NEPPERSONN', label: 'NEP Personnel Unit' },
		{ value: 'NETCAFENY', label: 'Netcafe NY' },
		{ value: 'NPCCALL', label: 'NPC Call Center' },
		{ value: 'NRWESTPORT', label: 'N R Westport LLC' },
		{ value: 'NYCARES', label: 'New York Cares' },
		{ value: 'NYLIBRARY', label: 'New York Public Library for the Performing Arts' },
		{ value: 'OFFICEDEP', label: 'Office Depot' },
		{ value: 'TOYONEILL', label: 'O\'Neill\'s Trading' },
		{ value: 'ELEIMPORT', label: 'Electonic Importers' },
		{ value: 'PHILLYPHOT', label: 'Philly Photography' },
		{ value: 'SNOPORT', label: 'Portmeirion Int.' },
		{ value: 'PRECISION', label: 'Precision Photos' },
		{ value: 'PREMIERE', label: 'Premiere Dermatology and Surgery' },
		{ value: 'FDIQVIK', label: 'Qvik Process GmbH' },
		{ value: 'REALESRATE', label: 'Real Estate Institute' },
		{ value: 'RICHVISION', label: 'Rich Vision' },
		{ value: 'ROADBUILDR', label: 'Road Builder Company' },
		{ value: 'WIDROTON', label: 'ROTON Services' },
		{ value: 'SAFECREDIT', label: 'Safe Credit Union' },
		{ value: 'SHOREMORT', label: 'Shore Mortgage Inc' },
		{ value: 'SNOSHORT', label: 'Shortstop Sports' },
		{ value: 'SILVERWATE', label: 'Silver Springs Water' },
		{ value: 'TOYSTAR', label: 'Star America Toys' },
		{ value: 'ELEVATION', label: 'Elevation Computers' },
		{ value: 'STREAMRAY', label: 'Streamray Inc' },
		{ value: 'UNIFORCE', label: 'Uniforce Staffing Service' },
		{ value: 'UPWARDMOBI', label: 'Upwardmobility' },
		{ value: 'VERACITYCR', label: 'Veracity Credit Consultants' },
		{ value: 'VIDEOCITY', label: 'Texas Video City' },
		{ value: 'WATERPROC', label: 'CHENGDU RONGYI WATER PROCESSING' },
		{ value: 'WESTERNTRC', label: 'Western Star Trucks' },
		{ value: 'WESTINGALL', label: 'Westin Galleria Houston' },
		{ value: 'WESTWOOD', label: 'Westwood Manor' },
		{ value: 'WFAN', label: 'WFAN Radio' },
		{ value: 'WIDGETBUY', label: 'Widget Connection' },
		{ value: 'WIDGETCC', label: 'Widget Credit Card' },
		{ value: 'WRIGHTCORN', label: 'Wright Corner' },
		{ value: 'WIDGETOLD', label: 'Widget Customer' },
		{ value: 'INACTIVE', label: 'Inactive Inc' },
		{ value: 'VANCOUVER', label: 'Vancouver Supplies' },
		{ value: 'ABCHOLDING', label: 'ABC Holdings Inc' },
		{ value: 'WIDPARENT', label: 'Widget Consolidated Holdings' },
		{ value: 'WIDGETPCI', label: 'Widget PCI Tokenized' },
		{ value: 'ABCVENTURE', label: 'ABC Capital Ventures' },
		{ value: 'FDIACME', label: 'Acme Food Distribution' },
		{ value: 'FDIMINN', label: 'Minneapolis Food Distribution' },
		{ value: 'FDIGREEN', label: 'Green Cooks' },
		{ value: 'FDITAMPA', label: 'Tampa Bay Food Distribution' },
		{ value: 'FDIWEST', label: 'Southwest Food Distribution' },
		{ value: 'REVRECCO', label: 'Revenue Recognition Co' }
	],
	
	2: [],
	
	3: [
		{ value: 'FEDEX1', label: 'FEDEX1' },
		{ value: 'FEDEXGROUND', label: 'FEDEXGROUND' },
		{ value: 'LOCAL', label: 'LOCAL' },
		{ value: 'UPSGROUND', label: 'UPSGROUND' },
		{ value: 'USPSNEXTDAY', label: 'USPSNEXTDAY' },
		{ value: 'USPSFIRST', label: 'USPSFIRST' },
		{ value: 'USPSINTL', label: 'USPSINTL' },
		{ value: 'USPSPRIOR', label: 'USPSPRIOR' },
		{ value: 'WILLCALL', label: 'WILLCALL' }
	]
	
};

$( function() {
	
	
    function split( val ) {
      return val.split( /;\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
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
          var termsAsArray = split(request.term);
		  var lastToken = termsAsArray[termsAsArray.length - 1];
		  var position = termsAsArray.length;
		  
		  var filteredData = $.grep(responseData[position], function(v) {
			  return v.label.toLowerCase().includes(lastToken.toLowerCase());
		  });
		  
		  response(filteredData);
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
          this.value = terms.join( ";" );
		  
		  console.log(ui.item.label + ' ' + ui.item.value);
		  
          return false;
        }
      });
  } );