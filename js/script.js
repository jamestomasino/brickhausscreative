Namespace.baseURL = 'js/';
Namespace.import ( this, 'org.tomasino.events.EventDispatcher' );
Namespace.import ( this, 'org.tomasino.display.TileGrid' );

var matrix = [ null,        $('#logos_more'),   null,              null,
               $('#home'),  $('#logos'),        null,              null,
               null,        $('#directmail'),  $('#advertising'),  null,
			   null,        null,              $('#brochure'),     $('#packaging') ];

var grid = new TileGrid ( );
	grid.setContainer ( $('#container') );
	grid.setDisplayWidth ( 1024 );
	grid.setDisplayHeight ( 672 );
	grid.attachMatrix ( matrix, 4, 4);
	grid.goto(0,1);

$('#container').css('visibility', 'visible' );

$('.nav').bind('touchend click', onNav );

function onNav ( e ) {
	var id = '#' + this.id.substr(4);
	grid.goToID(id, true);
}
