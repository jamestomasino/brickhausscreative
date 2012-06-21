Namespace.baseURL = 'js/';
Namespace.import ( this, 'org.tomasino.events.EventDispatcher' );
Namespace.import ( this, 'org.tomasino.display.TileGrid' );

var matrix = [ $('#home'),  $('#logos'),      $('#directmail'),  $('#advertising'),  $('#brochure'),  $('#packaging'),
			   null,        $('#logos_more') ];

var grid = new TileGrid ( );
	grid.setContainer ( $('#container') );
	grid.setDisplayWidth ( 1024 );
	grid.setDisplayHeight ( 672 );
	grid.attachMatrix ( matrix, 6, 2 );

$('#container').css('visibility', 'visible' );

$('.nav').bind('touchend click', onNav );

function onNav ( e ) {
	var id = '#' + this.id.substr(4);
	grid.goToID(id, true);
}
