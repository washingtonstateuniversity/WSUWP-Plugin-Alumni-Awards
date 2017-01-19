<?php

class WSUWP_Alumni_Awards {
	/**
	 * @var WSUWP_Alumni_Awards
	 */
	private static $instance;

	/**
	 * The slug used to register the awardee post type.
	 *
	 * @var string
	 */
	var $post_type_slug = 'awardee';

	/**
	 * Maintain and return the one instance. Initiate hooks when
	 * called the first time.
	 *
	 * @since 0.0.1
	 *
	 * @return \WSUWP_Alumni_Awards
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new WSUWP_Alumni_Awards();
			self::$instance->setup_hooks();
		}
		return self::$instance;
	}

	/**
	 * Setup hooks to include.
	 *
	 * @since 0.0.1
	 */
	public function setup_hooks() {
		add_action( 'init', array( $this, 'register_post_type' ) );
	}

	/**
	 * Register the alumni award post type.
	 *
	 * @since 0.0.1
	 */
	public function register_post_type() {
		$labels = array(
			'name' => 'Awardees',
			'singular_name' => 'Awardee',
			'all_items' => 'All Awardees',
			'add_new_item' => 'Add Awardee',
			'add_new' => 'Add Awardee',
			'new_item' => 'New Awardee',
			'edit_item' => 'Edit Awardee',
			'update_item' => 'Update Awardee',
			'view_item' => 'View Awardee',
			'search_items' => 'Search Awardees',
			'not_found' => 'Not found',
			'not_found_in_trash' => 'Not found in Trash',
			'menu_name' => 'Alumni Awards',
		);

		$args = array(
			'label' => 'Alumni Awards',
			'labels' => $labels,
			'description' => 'WSU Alumni Association award recipient profiles.',
			'public' => true,
			'show_in_admin_bar' => false,
			'show_in_nav_menus' => false,
			'hierarchical' => false,
			'menu_icon' => 'dashicons-awards',
			'menu_position' => 25,
			'supports' => array(
				'title',
				'editor',
				'thumbnail',
				'revisions',
			),
			'has_archive' => true,
			'show_in_rest' => true,
			'rest_base' => 'alumni_awards',
		);

		register_post_type( $this->post_type_slug, $args );
	}
}
