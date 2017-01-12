<?php
/*
Plugin Name: WSUWP Alumni Awards
Version: 0.0.1
Description: Tracks and displays alumni awards.
Author: washingtonstateuniversity
Author URI: https://web.wsu.edu/
Plugin URI: https://github.com/washingtonstateuniversity/WSUWP-Plugin-Alumni-Awards
*/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// The core plugin class.
require dirname( __FILE__ ) . '/includes/class-wsuwp-alumni-awards.php';

add_action( 'after_setup_theme', 'WSUWP_Alumni_Awards' );
/**
 * Start things up.
 *
 * @return \WSUWP_Alumni_Awards
 */
function WSUWP_Alumni_Awards() {
	return WSUWP_Alumni_Awards::get_instance();
}
