=== CS Likes Counter ===
Contributors: bykaVBS
Tags: likes, dislikes, likes counter
Donate link: http://codesweet.ru/developments/wordpress-plugins/cs-likes-counter/
Requires at least: 3.9
Tested up to: 4.7.4
Stable tag: 1.0.6
License: GPLv2

Show multiple Likes Counter on your website.

== Description ==

Counter allows you to count the likes and dislikes.

Counting is carried out using AJAX.

Limitation of cheating over IP (from one IP can vote with 10 minutes intervals).

= Usage =

Simply place the template single.php function call inside the loop

    <?php while(have_post()) : the_post(); ?>
	    <?php echo CS_Likes::show_buttons_like(); ?>
	<?php endwhile; ?>

Or use ID of post, if function call outside the loop

	<?php echo CS_Likes::show_buttons_like($post_id); ?>


To obtain the number of likes, use the function:

	<?php $likes_count = CS_Likes::get_post_likes($post_id); ?>


To obtain the number of dislikes, use the function:

	<?php $dislikes_count = CS_Likes::get_post_dislikes($post_id); ?>


== Installation ==

1. Upload cs-likes-counter directory to the /wp-content/plugins/ directory
2. Activate the plugin through the Plugins menu in WordPress
3. Place <?php echo CS_Likes::show_buttons_like(); ?> function in your template inside the loop

or

1. Install plugin directly in WordPress through the Plugins, Add New -> Search panel
2. Search for CS Likes Counter
3. Place <?php echo CS_Likes::show_buttons_like(); ?> function in your template inside the loop

== Frequently Asked Questions ==

= I'm having issues getting the plugin to work what should I do? =

See the [FAQs](http://codesweet.ru/developments/wordpress-plugins/cs-likes-counter/) page for a detailed rundown of common issues


== Changelog ==

= 1.0 =

* First stable release.

= 1.0.2 =

* Add Russian Language support
* Add likes metabox to page

= 1.0.3 =

* Add support function outside the loop

= 1.0.4 =

* Update for wordpress 4.5

= 1.0.5 =

* Update for wordpress 4.7.4
* function CS_Likes::show_buttons_like($post_id = NULL, $show = false) add parameter $show for display vote form

= 1.0.6 =

* Update for wordpress 4.9.8

Example 1: CS_Likes::show_buttons_like('', true) for display inside post loop
Example 2: CS_Likes::show_buttons_like($post_id, true) for display outside post loop