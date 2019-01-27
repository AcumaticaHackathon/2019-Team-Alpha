var htmlSearchFieldId = 'tags';
var wsName = 'https://6477a310-8568-4479-b535-225a4d52f46c.mock.pstmn.io/suggest';
var delimiter = ' ';
var responseDelimiter = '\n';

var customerLookup = {
	"ABCSTUDIOS": "ABC Studios Inc",
	"ABARTENDE": "USA Bartending School",
	"ACTIVESTAF": "Active Staffing Service",
	"ALPHABETLD": "Alphabetland School Center",
	"AMROBANK": "AMRO Bank N.V.",
	"ANTUNSWEST": "Antun's of Westchester",
	"APOSTELSCH": "Church of The Apostles",
	"ARTCAGES": "Artcages",
	"ASAHISUNTR": "Asahi Sun Tours",
	"ASBLBAR": "Nautilus Bar SABL",
	"AVACUST1": "Avalara Customer",
	"BEAUTYSCH": "New York International Beauty School Ltd",
	"BESTYPEIMG": "Bestype Image",
	"BIBIMBAB": "Bibimbab Korean Restaurant",
	"BORDERSHOP": "Borders Books, Music & Cafe",
	"BOULDERCR": "Boulder Couriers Denver",
	"BRASSKEY": "Brass Key Bar",
	"CARIBBEAN": "Caribbean Secretary Online",
	"CARTRIDGE": "Cartridge World Inc",
	"CASHCONNEC": "Cash Connection",
	"CHOCOLATE": "Chocolate By Design",
	"CJOEQUIP": "Jersey Central Office Equip",
	"FDICOCCIA": "Cocciatari Pizza",
	"COMPURESOU": "Compuresource, Ltd",
	"COMPUWORLD": "Computer World",
	"CRABTREE": "Crabtree Kittle House Inn",
	"CULINARYIN": "Institute of Culinary Education",
	"DACITYCONS": "DA CITY CONSTRUCT SUPERVISE TEAM",
	"NSSDATA": "Data Recovery Services",
	"DIGITECHPR": "Digitech Printers",
	"ELITEANSW": "Elite Answering",
	"ETELLIGENT": "Etelligent Solutions",
	"NSSGLOGCON": "Glog Consulting",
	"INDSUPPLY": "Industrial Supply Inc",
	"GOLDRIVER": "Gold River Taxi Service",
	"HDTECHSERV": "HD Technical Services Limited",
	"HIEKELCSEV": "Hiekel Computer Service",
	"HUNTINGTON": "Huntington National Learning Center",
	"JEVTCOMPUT": "Jevy Computers",
	"KAMMSYSTEM": "Kamm System France",
	"KRKCONSULT": "KRK Consulting Service",
	"LASERWORKS": "LaserWorks",
	"SNOTUSCANY": "SPORTS CENTER OF TUSCANY",
	"LOGICALINF": "Logical Information Solutions",
	"HGTBRICK": "Acme Brick Company",
	"FDIAGRI": "Agrilink Food",
	"MAKSYSTEMM": "Mak System France",
	"MARINAGOLF": "Marina Golf Club",
	"INDSACRAME": "Sacramento Industrial Supply",
	"MARLINOFFI": "Marlin Office Beverage Service",
	"MICROCHIP": "Microchip Restaurant",
	"MIDWOOD": "Midwood Ambulance",
	"MODELAGENC": "USA- NY Models Agency",
	"MUSICAREA": "MUSIC AREA",
	"NAAAPASSOC": "Naaap Associates",
	"NEPPERSONN": "NEP Personnel Unit",
	"NETCAFENY": "Netcafe NY",
	"NPCCALL": "NPC Call Center",
	"NRWESTPORT": "N R Westport LLC",
	"NYCARES": "New York Cares",
	"NYLIBRARY": "New York Public Library for the Performing Arts",
	"OFFICEDEP": "Office Depot",
	"TOYONEILL": "O'Neill's Trading",
	"ELEIMPORT": "Electonic Importers",
	"PHILLYPHOT": "Philly Photography",
	"SNOPORT": "Portmeirion Int.",
	"PRECISION": "Precision Photos",
	"PREMIERE": "Premiere Dermatology and Surgery",
	"FDIQVIK": "Qvik Process GmbH",
	"REALESRATE": "Real Estate Institute",
	"RICHVISION": "Rich Vision",
	"ROADBUILDR": "Road Builder Company",
	"WIDROTON": "ROTON Services",
	"SAFECREDIT": "Safe Credit Union",
	"SHOREMORT": "Shore Mortgage Inc",
	"SNOSHORT": "Shortstop Sports",
	"SILVERWATE": "Silver Springs Water",
	"TOYSTAR": "Star America Toys",
	"ELEVATION": "Elevation Computers",
	"STREAMRAY": "Streamray Inc",
	"UNIFORCE": "Uniforce Staffing Service",
	"UPWARDMOBI": "Upwardmobility",
	"VERACITYCR": "Veracity Credit Consultants",
	"VIDEOCITY": "Texas Video City",
	"WATERPROC": "CHENGDU RONGYI WATER PROCESSING",
	"WESTERNTRC": "Western Star Trucks",
	"WESTINGALL": "Westin Galleria Houston",
	"WESTWOOD": "Westwood Manor",
	"WFAN": "WFAN Radio",
	"WIDGETBUY": "Widget Connection",
	"WIDGETCC": "Widget Credit Card",
	"WRIGHTCORN": "Wright Corner",
	"WIDGETOLD": "Widget Customer",
	"INACTIVE": "Inactive Inc",
	"VANCOUVER": "Vancouver Supplies",
	"ABCHOLDING": "ABC Holdings Inc",
	"WIDPARENT": "Widget Consolidated Holdings",
	"WIDGETPCI": "Widget PCI Tokenized",
	"ABCVENTURE": "ABC Capital Ventures",
	"FDIACME": "Acme Food Distribution",
	"FDIMINN": "Minneapolis Food Distribution",
	"FDIGREEN": "Green Cooks",
	"FDITAMPA": "Tampa Bay Food Distribution",
	"FDIWEST": "Southwest Food Distribution",
	"REVRECCO": "Revenue Recognition Co",
};

var shipViaLookup = {
	"FEDEX1": "FEDEX1",
	"FEDEXGROUND": "FEDEXGROUND",
	"LOCAL": "LOCAL",
	"UPSGROUND": "UPSGROUND",
	"USPSNEXTDAY": "USPSNEXTDAY",
	"USPSFIRST": "USPSFIRST",
	"USPSINTL": "USPSINTL",
	"USPSPRIOR": "USPSPRIOR",
	"WILLCALL": "WILLCALL"
};

var inventoryLookup = {
	"CASELABOR": "Case Labor",
	"CASELABORO": "Case Labor OT",
	"PMRUNTIME": "Project Run Time Rate",
	"PMSETUP": "Project Setup Rate",
	"PMSUSPEND": "Project Suspend Rate",
	"SOFTLIC01": "Software license, base product",
	"SOFTLIC02": "Software license, add-on product",
	"SOFTMAINT": "Software maintenance",
	"SOFTSAAS1": "Software SaaS, base product",
	"SOFTSAAS2": "Software SaaS, add-on product",
	"SUPPHOURS": "Support hours",
	"DEPOSIT": "Contract Deposit",
	"ADMCHARGE": "Administrative Charges",
	"WIDGET01": "Widget 01 - High volume, low cost",
	"WIDGET02": "Widget 02 - Serial numbered item",
	"WIDGET03": "Widget 03 - Standard cost item",
	"SOFTADOBE": "Adobe Photoshop",
	"SOFTROSES": "Rosetta Stone Spanish",
	"SOFTOFF365": "Microsoft Office 365 Home",
	"SOFTNBA": "NBA Online Game Code",
	"AACOMPUT01": "Acer Laptop Computer",
	"AALEGO500": "Lego 500 piece set",
	"AAMACHINE1": "Injection molding machine - serial numbered",
	"AAPOWERAID": "Poweraid 32 Oz - lot numbered",
	"CONAIRT1": "Harvil 4 Foot Air Hockey Table",
	"CONBABY1": "South Shore Savannah Changing Table",
	"CONBABY2": "Little Tikes Bold n Bright Table & Chairs",
	"CONBABY3": "Grac Pack N Play with Newborn Napperstation",
	"CONBALBALL": "Gaiam Body Balance Ball Kit",
	"CONBOTTLE1": "Eddy Insulated Bottle .5L",
	"CONCHAIR1": "Caravan Canopy Recliner",
	"CONCRIB01": "Davinci Jayden Convertible Crib",
	"CONCRIB02": "Graco Stylus Classic Travel System",
	"CONFLAGPL": "Alum Telescoping Flag Pole",
	"CONGOLFR1": "Taylor Made Golf Set Right Handed",
	"CONGRILL": "Char-Broil Classic 480",
	"CONGRILLT": "Mr BBQ 18 PC Stainless Set & Case",
	"CONHEARTM1": "Polar Heart Rate Monitor",
	"CONHELMET1": "Arai Black Helmet",
	"CONHOSE50": "Telebrand Pocket Hose 50 Feet",
	"CONKID1": "Kiddraft Nantucket Toybox",
	"CONKID2": "Radio Flyer Interactive Riding Horse",
	"CONMITT": "Mizuno Fielders Baseball Mitt",
	"CONPOGO1": "Flybar Foam Pogo Stick",
	"CONPOOL1": "Intex Rainbow Ring Pool",
	"CONSTOOL1": "Garden Hopper Mobile Garden Stool",
	"CONTABLE1": "Folding Picnic Table 6 Foot",
	"CONTENBAL1": "Lobster Portable Tennis Ball Machine",
	"CONTRAIN1": "Stamina In-Motion Elliptical Trainer",
	"CONTRAMPL": "Skywalker trampoline - 15ft round",
	"CONWEIGHT1": "Bowflex Adjustable Dumbbells",
	"ELE32LED": "Samsung 40-Inch LED HDTV",
	"ELEBOARD": "Laptop computer motherboard",
	"ELEBOSE1": "Bose Quiet Comfort Noise Cancel Headset",
	"ELEBOSE2": "Bose Bluetooth Headset Series 2",
	"ELECOMP1": "Dell desktop computer",
	"ELECOMP2": "Lenovo laptop computer",
	"ELECPU1": "Intel CPU - 2.6GHz",
	"ELEHDD1": "Hard drive 1TB 7200rpm",
	"ELEHDD2": "Hard drive 1 TB SSD",
	"ELEKINDLE": "Kindle Fire 8.9\" Tablet HD",
	"ELEVGA": "2D-Magic VGA Card",
	"FOODBREAD": "Hot Dog Buns 8 PK (12per pack)",
	"FOODCHIP36": "Wise Potato Chips 1.25oz Bags / 36PK",
	"FOODCHOC": "Hershey Chocolate Kisses 3.5 Lbs",
	"FOODCOLA12": "Coca-Cola Cans 12 Count",
	"FOODDRAKE1": "Drake's Devil Dogs 8 ct",
	"FOODDRAKE2": "Drake's Yodels 10 ct",
	"FOODHOTDOG": "Ball Park Beef Franks 3lbs 2 PK",
	"FOODKCOF35": "Coffee K-Cup Sampler Coffee 35 Count",
	"FOODSUGAR": "Sweet N Low Sugar 12pk",
	"FOODTEA06": "Liptons Cold Brew Tea Bags 6 Pack",
	"INDCAT01": "2006 Cat D6N XL",
	"INDEXTWAR": "Extended warranty",
	"INDLIFT1": "Eagle American Auto Lift",
	"INDLIFT2": "Genie Scissor Lift Aerial Work Platform GS-1930",
	"INDLIFT3": "Rider Forklift - Big Joe",
	"INDMACH01": "Ranger Wheel Balancer DST-2420",
	"INDMACH02": "Horizontal Hydraulic Injection Molding Machine",
	"INDMIXER1": "Hobart HL600-1STD 60QT Mixer",
	"INDOVEN1": "Industrial Conveyor Oven",
	"INDOVEN2": "Baker Pride Y-602 double Deck Pizza Oven 60\"",
	"FOODCATER1": "Bundled Food Package 1",
	"MEALS": "Business dinner and lunch",
	"ACCOMODATE": "Hotels and Lodging",
	"PHONE": "Phone, internet, and wireless",
	"CARRENT": "Car and vehicle charges",
	"PMLABOR": "Project Labor",
	"CONSULTING": "Project Consulting",
	"TRAVEL": "Business Travel - Air, Train, Miles",
	"SPECIALORD": "Special or custom order",
	"MOTEX MX-2": "Motex MX-2616 Ace Price Labeler Printer",
	"NIKON2010": "Nikon's 2010 Coolpix digital camera",
	"NIKON1": "Nikon Coolpix P100",
	"NIKONL110": "Nikon Coolpix L110",
	"NIKON2": "Nikon Coolpix S8000",
	"ELEHDD3": "Hard drive 2TB 7200rpm",
	"CONSULTJR": "Junior Consultant",
	"CONSULTSR": "Senior Consultant",
	"CONSULTPM": "Project Manager",
	"FOODCOKD12": "Coca-Cola Diet Cans - 12 pack",
	"SUPPLIES": "Office Supplies",
	"INSTALL": "Installation Services - Flat Rate",
	"LABORSALES": "Sales Labor",
	"IND24ANB1": "Infinity 21 Central Air Conditioner by Carrier",
	"INST AC": "Air Conditioner Installation Service",
	"MRO AC": "Air Conditioner Repair Service",
	"IND24FAN01": "Carrier Condenser Fan Motor 1/8 HP 208-230V 1-Phase 1125 RPM CCW 48-Frame",
	"EQUIP": "FA Machinery and Equipment",
	"INST ROUT": "Router Installation",
	"INST DATAC": "Installation of Data Center and Network Room",
	"INST LAN": "Configuration of Local Area Network",
	"INST WAN": "Configuration of Wireless Area Network",
	"INST DB": "Data Base Installation",
	"BACKUP": "Data Backup",
	"SUPP TONER": "Printers Toner Supply",
	"SUPP OFFIC": "Office Material Supply",
	"MRO NETWRK": "Network Support",
	"MRO DB": "Data Base Support",
	"MRO DATAC": "Data Center Support",
	"TRAINING": "Technical Training",
	"MEETING": "Internal Meeting",
	"INST INTRN": "Internal installation of equipment",
	"INST SERV": "Server Installation",
	"INST GEN": "General Equipment Installation",
	"DC CUSTRN": "Data Center Customer Training",
	"PMCONTRACT": "Project Contract Amount",
	"PMDEPOSIT": "Project Contract Advance Payment",
	"CONSULTSRO": "Senior Consultant OT",
	"CONSULTJRO": "Junior Consultant",
	"IND24IND01": "Toshiba Carrier High Wall Indoor Unit - 28 decibels",
	"IND24IND02": "Toshiba Carrier High Wall Indoor Unit - 26 decibels",
	"IND24OUT01": "Toshiba Carrier High Wall Outdoor Unit - 26 decibels",
	"IND24OUT02": "Toshiba Carrier Cooling and Heating Pump",
	"IND24COM01": "Carrier Compressor with Refrigerant R410A",
	"IND24RMCTL": "Carrier AC Remote Control",
	"CONTONERXX": "Used Toner",
	"CONPAPERST": "Letter Paper Ream Standard",
	"CONPAPERA4": "Letter Paper Ream A4",
	"CONPEN100": "Pens - Box of 100",
	"CONPENC100": "Pencils - Box of 100",
	"MRO CLEAN": "Air Conditioner Cleaning Service",
	"FOODPOPTRT": "Pop-Tarts Strawberry Toaster Pastries - 32 count",
	"ELE20ABEAK": "Circuit Breaker - 20A - Square D",
};

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
          
		  var spaceRegex = new RegExp(' ', 'g');
		  var words = request.term.split(' ').join('%20');
		  console.log(words);
		  
		  var url = wsName + '?words=' + words;
			
		  /*
		  var lookupDataset = [];
		  var position = currentPosition(words);
		  
		  console.log('Position: ' + position);
		  
		  if(position == 1)
				lookupDataset = customerLookup;
		  else if(position == 3)
				lookupDataset = shipViaLookup;
		  else if((position - 3) % 3 == 1)
				lookupDataset = inventoryLookup;
		  */
		  
			var responseList = [];
			
			$.ajax({
				url:	url,
				async:	false,
				type:	'GET',
				contentType: 'text;charset=UTF-8',
			})
			.done(function(data) {
				responseList = data.split(' ');
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
		  this.value += ' ' + ui.item.value;
          return false;
        }
      });
  } );