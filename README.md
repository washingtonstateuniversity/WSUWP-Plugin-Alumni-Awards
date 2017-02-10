# WSUWP Alumni Awards

[![Build Status](https://travis-ci.org/washingtonstateuniversity/WSUWP-Plugin-Alumni-Awards.svg?branch=master)](https://travis-ci.org/washingtonstateuniversity/WSUWP-Plugin-Alumni-Awards)

A WordPress plugin for tracking and displaying alumni awards.

This plugin provides a shortcode for displaying recipients by award:
* `[alumni_awards]`

The shortcode attributes are as follows:
* `award_slug` - The only required attribute. Accepts the slug of the award to display recipients for as a value.
* `inscription` - Determines how the inscription should be presented. By default, the inscription drops down below the awardee's name. Accepts `modal` as a value to display the inscription in a lightbox instead.
* `type` - Suffix to include with the "Year Awarded/Inducted" data for awardees. Defaults to "Recipient".
* `awarded` -Set to `hide` if the "Year Awarded/Inducted" data for each recipient should not be displayed.
* `class` - Set to `hide` if the "Class of" data for each recipient should not be displayed.
* `filters` - Set to `hide` if the "Sort by" filters and search box should not be displayed.
* `header` - Set to `hide` if the name and description of the award should not be displayed.
* `sport` - set to `show` if the "Sport(s)" data should be show instead of the "Class of" data. This also swaps out the "Class" sorting filter for "Sport(s)".
