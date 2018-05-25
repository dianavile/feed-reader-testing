# Feedreader Testing, a Udacity's projecy

This project is part of the __Frontend Web Developer Nanodegree (full Google scholarship)__. This project's purpose is to build testing suites with Jasmine to check one by one the main functionalities of a feed reader.

## Table of Contents

* [Instructions](#instructions)
* [Installation](#installation)
* [Functionality](#functionality)
* [Requirements](#requirements)
* [Dependencies](#dependencies)
* [Contributing](#contributing)

## Instructions

The RSS feedreader itself was provided as starting code and came with all the main functionalities a feed reader should have. There are fuour different feed sources to select from a menù and every time a new source is selected, a new set of feeds is loaded within the feed section into the HTML sheet. The menù itself is hidden and it's shown when the hamburger icon is clicked with a CSS/HTML class based system.

I've wrote four different kind of suite to test the main functionalities provided: the `RSS feeds` definition, the `menu` behavior once clicked, the `initial entries` loaded and the `new feed selection` loading once another source is selected.

## Installation

You can clone this repository or download it as a .zip file, then simply open the `index.html` file to open the RSS reader and check the test results on the page bottom.

You can also try a live test version [here.](https://ivanteso.github.io/feed-reader-testing/).

## Functionality

These are the four main area I've tested

- __`RSS Feeds`__: this suite check if the RSS sources `are defined` properly, if they `contain a valid URL` and if they have `a valid name` (means that this fields must not be empty or undefined)

- __`The menu`__: this suite check if the menu `is hidden by default` and `change visibility when the icon is clicked`. The menù is hidden if the body has the 'menu-hidden'. The class is toggled clicking on the hamburger icon. The test check if the body's class is present at the page loading and if is properly removed and added if the icon get a click.

- __`Initial Entries`__: this suite check if the default feed collection (the first element of allFeeds array) is properly loaded within the feed container in the HTML sheet. This means that our test must start after the contents are loaded, so the loadFeed function is called by the beforeEach function, to set the test start after the feed load. The test store the feed elements into an array, so if they are properly loaded the array's element are more than 0.

- __``New Feed Selection__: this suite check if the new contents eventually selected by the user are properly properly loaded within the feed container in the HTML sheet to replace the olds. To make this we must start the test with a beforeEach, to ensure the content to be loaded correctly. The HTML code for the first feed collection is stored into a variable, as well as he second collection. In the end we compare the two variables and if the variables content is different, this means the also the HTML content is different.

## Requirements

The feed reader testing had to follow some code criteria in order to satisfy the project specifications. The full detailed list of the requirements is available to consult at the [Project Rubric Link](https://review.udacity.com/#!/rubrics/18/view).

## Dependencies

The project is created starting from the original [Udacity's Project](https://github.com/udacity/frontend-nanodegree-feedreader).

The main code came with the following resources to provide the main RSS Feed Reader functionalities:

- [jQuery](https://jquery.com/)
- [Google Roboto Font](https://fonts.google.com/specimen/Roboto)
- [Icomoon](https://icomoon.io/)
- [Google's JavaScript Loader API](https://www.google.com/jsapi)
- [Handlebars](https://handlebarsjs.com/)

I've used the following resources to write my code in order to complete the project:

__Javascript:__
- [VanillaJS](http://vanilla-js.com/)
- [Jasmine](https://jasmine.github.io/)

## Contributing

All suggestions and tips will be more than appreciated but, as general rule, no pull requested are normally accepted.
