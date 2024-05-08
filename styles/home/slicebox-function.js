			$(function() {
				var Page = (function() {
					var $navDots = $( '#nav-dots' ).hide(),
						$nav = $navDots.children( 'span' ),
						slicebox = $( '.slider' ).slicebox( {
							onReady : function() {
								$navDots.show();
							},
							onBeforeChange : function( pos ) {
								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );
							}
						} ),
						init = function() {
							initEvents();
						},
						initEvents = function() {
							$nav.each( function( i ) {
								$( this ).on( 'click', function( event ) {
									var $dot = $( this );
									if( !slicebox.isActive() ) {
										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );
									}
									slicebox.jump( i + 1 );
									return false;
								} );
							} );
						};
						return { init : init };
				})();
				Page.init();
			});
