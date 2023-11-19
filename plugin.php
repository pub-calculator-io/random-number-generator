<?php
/*
Plugin Name: Random Number Generator by www.calculator.io
Plugin URI: https://www.calculator.io/random-number-generator/
Description: Random number generators have a variety of uses beyond picking a number to determine a prize winner. Find out what situations are ideal for them and how they solve problems.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_random_number_generator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Random Number Generator by Calculator.iO";

function display_ci_random_number_generator(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Random Number Generator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_random_number_generator_iframe"></iframe></div>';
}

add_shortcode( 'ci_random_number_generator', 'display_ci_random_number_generator' );