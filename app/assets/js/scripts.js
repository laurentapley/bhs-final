/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
( function( $, window, document, undefined ) {

  'use strict';

  $( function() {
    console.log( 'working here' );
    $( 'a' ).hover( function() { //mouse in
      $( this ).animate( { paddingLeft: '20px' }, 400 );
    }, function() { //mouse out
      $( this ).animate( { paddingLeft: 0 }, 400 );
    } );
  } );


} )( jQuery, window, document );
