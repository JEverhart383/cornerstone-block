<?php
/* Plugin Name: Cornerstone Block
 *
 *
 *
 *
 *
 *
*/

function cornerstone_boilerplate_block() {

	// Cornerstone Block 1
	wp_register_script(
		'cornerstone-block-1-js',
		plugins_url( 'cornerstone-block-1.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);

	register_block_type( 'cornerstone-block/cornerstone-block-1', array(
		'editor_script' => 'cornerstone-block-js',
	) );

	// Cornerstone Block 1
	wp_register_script(
		'cornerstone-block-2-js',
		plugins_url( 'cornerstone-block-2.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);

	register_block_type( 'cornerstone-block/cornerstone-block-2', array(
		'editor_script' => 'cornerstone-block-js',
	) );


}
add_action( 'init', 'cornerstone_boilerplate_block' );