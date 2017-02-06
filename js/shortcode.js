( function( $, document ) {
	$( document ).ready( function() {

		// Sort handling.
		$( ".awardees-filters" ).on( "click", ".awardees-sort", function() {
			var $sorter = $( this ),
				state = $sorter.attr( "aria-sort" ),
				sortby = $sorter.data( "sortby" ),
				text = $sorter.text(),
				$awardees_container = $sorter.closest( ".awardees" ),
				$awardees = $awardees_container.find( ".awardee" );

			// Set ARIA attributes.
			if ( typeof state !== typeof undefined && state !== false ) {
				if ( "ascending" === state ) {
					$sorter.attr( "aria-sort", "descending" );
					$sorter.attr( "aria-label", text + ": activate to sort ascending" );
				}

				if ( "descending" === state ) {
					$sorter.attr( "aria-sort", "ascending" );
					$sorter.attr( "aria-label", text + ": activate to sort descending" );
				}
			} else {

				// Return the other sorting filters to the default state.
				$.each( $sorter.siblings( ".awardees-sort" ), function() {
					$( this ).removeAttr( "aria-sort" ).attr( "aria-label", $( this ).text() + ": activate to sort ascending" );
				} );

				$sorter.attr( "aria-sort", "ascending" );
				$sorter.attr( "aria-label", text + ": activate to sort descending" );
			}

			// Do the sort.
			$awardees.sort( function( a, b ) {
				var an = a.getAttribute( "data-" + sortby ),
					bn = b.getAttribute( "data-" + sortby );

				if ( typeof state !== typeof undefined && state !== false && "ascending" === state ) {
					an = b.getAttribute( "data-" + sortby );
					bn = a.getAttribute( "data-" + sortby );
				}

				if ( an > bn ) {
					return 1;
				}

				if ( an < bn ) {
					return -1;
				}

				return 0;
			} );

			$awardees.detach().appendTo( $awardees_container );
		} );

		// Search handling.
		$( ".awardees-search" ).on( "keyup", "input", function() {
			var	search_value = $( this ).val(),
				awardees = $( this ).closest( ".awardees" ).find( ".awardee" );

			if ( search_value.length > 0 ) {
				awardees.each( function() {
					var person = $( this );
					if ( person.text().toLowerCase().indexOf( search_value.toLowerCase() ) === -1 ) {
						person.hide( "fast" );
					} else {
						person.show( "fast" );
					}
				} );
			} else {
				awardees.show( "fast" );
			}
		} );

		// Inscription display handling.
		$( ".awardees" ).on( "click", ".has-inscription", function( e ) {
			e.stopPropagation();

			var $awardee = $( this );

			if ( $awardee.hasClass( "show-inscription" ) ) {
				$awardee.removeClass( "show-inscription" );
			} else {
				$awardee.addClass( "show-inscription" ).siblings( ".has-inscription" ).removeClass( "show-inscription" );
			}
		} );

		// Close open modal inscription if any other spot on the page is clicked.
		if ( $( ".awardees" ).hasClass( "unbox" ) ) {
			$( document ).click( function() {
				$( ".has-inscription" ).removeClass( "show-inscription" );
			} );
		}
	} );
}( jQuery, document ) );
