<?php
namespace fuel;
/**
 * Custom Post Type
 *
 * @author Kyeong Jun Lee<eric@fuelmultimedia.ca>
 *
 * Usage:
 *
 * include 'inc/cpt.php';
 * $arg = array( 'menu_icon' => 'dashicons-admin-multisite' );
 * $cpt = new \fuel\CPT('test','tests','zulich',$arg);
 *
 *
 */
class CPT
{
    /**
     * @var {string} $single      - singular post type name
     * @var {string} $plural      - plural post type name
     * @var {string} $text_domain - text domain
     * @var {array()} $arg        - options for the post type
     */
    public $single;
    public $plural;
    public $text_domain;
    public $arg;

    /**
     * @param {string} $s      - singular post type name
     * @param {string} $p      - plural post type name
     * @param {string} $td     - text domain
     * @param {array()} $arg   - options for the post type
     */
    public function __construct($s, $p, $td, $arg = array() ) {
        // Make it sure to have 'name' as plural
        $this->single       = $s;
        $this->plural       = $p;
        $this->text_domain  = $td;
        $this->arg          = $arg;

        $this->addAction();
    }
    function addAction() {
        //Add Custom Post Type
        add_action( 'init', array( $this, 'custom_post_type'), 0 );
    }
    // Register Custom Post Type
    function custom_post_type() {
        /**
         * A local variable for singular post type name
         * @var {string}
         */
        $_single = $this->single;
        /**
         * A local variable for plural post type name
         * @var {string}
         */
        $_plural = $this->plural;
        /**
         * Regular expression to repalce spaces with '_'
         * @var {pattern}
         */
        $find_space = '/\s/';
        /**
         * generated post type name with all the blanks replaced with '_'
         * @var {string}
         */
        $_post_type = strtolower( preg_replace( $find_space, '_',$this->plural ) );
        /**
         * Reassign arguments to be used locally
         * @var {array()}
         */
        $_arg = $this->arg;

        $labels = array(
            'name'                  => _x( $_plural, 'Post Type General Name', 'text_domain' ),
            'singular_name'         => _x( $_single, 'Post Type Singular Name', 'text_domain' ),
            'menu_name'             => __( $_plural, 'text_domain' ),
            'name_admin_bar'        => __( $this->name, 'text_domain' ),
            'archives'              => __( $_single.' Archives', 'text_domain' ),
            'parent_item_colon'     => __( 'Parent '.$_single.':', 'text_domain' ),
            'all_items'             => __( 'All '.$_plural, 'text_domain' ),
            'add_new_item'          => __( 'Add New '.$_single , 'text_domain' ),
            'add_new'               => __( 'Add New' , 'text_domain' ),
            'new_item'              => __( 'New '.$_single , 'text_domain' ),
            'edit_item'             => __( 'Edit '.$_single , 'text_domain' ),
            'update_item'           => __( 'Update '.$_single , 'text_domain' ),
            'view_item'             => __( 'View '.$_single , 'text_domain' ),
            'search_items'          => __( 'Search '.$_single , 'text_domain' ),
            'not_found'             => __( 'Not found', 'text_domain' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
            'featured_image'        => __( 'Featured Image', 'text_domain' ),
            'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
            'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
            'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
            'insert_into_item'      => __( 'Insert into '.$_single , 'text_domain' ),
            'uploaded_to_this_item' => __( 'Uploaded to this '.$_single , 'text_domain' ),
            'items_list'            => __( 'Items list', 'text_domain' ),
            'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
            'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
        );
        $args = array(
            'label'                 => __( $_single, 'text_domain' ),
            'description'           => __( $_arg['description'] ? $_arg['description'] : 'No description' , 'text_domain' ),
            'labels'                => $labels,
            /**
             * Supports
             * array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'trackbacks', 'revisions', 'custom-fields', 'page-attributes', 'post-formats', )
             */
            'supports'              => isset($_arg['supports']) ? $_arg['supports'] : array('title', 'editor', 'excerpt', 'thumbnail','page-attributes'),
            'taxonomies'            => isset($_arg['taxonomies']) ? $_arg['taxonomies'] : array( 'category', 'post_tag' ),
            'hierarchical'          => isset($_arg['hierarchical']) ? $_arg['hierarchical'] : false,
            'public'                => isset($_arg['public']) ? $_arg['public'] : true,
            'show_ui'               => isset($_arg['show_ui']) ? $_arg['show_ui'] : true,
            'show_in_menu'          => isset($_arg['show_in_menu']) ? $_arg['show_in_menu'] : true,
            'menu_position'         => isset($_arg['menu_position']) ? $_arg['menu_position'] : 5,
            'menu_icon'             => isset($_arg['menu_icon']) ? $_arg['menu_icon'] : 'dashicons-admin-post',
            'show_in_admin_bar'     => isset($_arg['show_in_admin_bar']) ? $_arg['show_in_admin_bar'] : true,
            'show_in_nav_menus'     => isset($_arg['show_in_nav_menus']) ? $_arg['show_in_nav_menus'] : true,
            'can_export'            => isset($_arg['can_export']) ? $_arg['can_export'] : true,
            'has_archive'           => isset($_arg['has_archive']) ? $_arg['has_archive'] : true,
            'exclude_from_search'   => isset($_arg['exclude_from_search']) ? $_arg['exclude_from_search'] : false,
            'publicly_queryable'    => isset($_arg['publicly_queryable']) ? $_arg['publicly_queryable'] : true,
            'capability_type'       => isset($_arg['capability_type']) ? $_arg['capability_type'] :'page',
        );
        register_post_type( $_post_type , $args );
    }
}

