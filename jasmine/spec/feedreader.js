/*
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


// Tests are placed within the $() function, since some of these tests may
// require DOM elements, to ensure they don't run until the DOM is ready.
$(function() {

    // Tests suite for RSS Feeds definition
    describe('RSS Feeds', function() {

        // Test if RSS sources are properly defined into allFeeds array
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loop into every array's object to check if the url is defined
        // and not empty
        it('has an URL defined and not empty', function() {
            for(feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            };
        });

        // As before, the test loop into every allFeeds element to check
        // if the name property is defined and not empty
        it('as name defined and not empty', function() {
            for(feed of allFeeds) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name).not.toBe('');
            };
        });
    });


    // Test suite for the menu
    describe('The menu', function() {
        let body = document.getElementsByTagName('body')[0];


        // The visibility of the menu is determinated by the body's
        // 'menu-hidden' class. This test check if it's present in body
        // by default to properly hide the menu
        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        // Since the body's class is toggled when the menu icon is clicked,
        // the test check if the class is properly removed and added
        it('change visibility when the icon is clicked', function() {
            let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    // Test suite to check if the single entries are properly loaded into
    // the HTML sheet
    describe('Initial Entries', function() {

        // The test should start when every element is loaded. Since this is an
        // asynchronous process, we should call the test after loadFeed is
        // called by beforeEach, to avoid checking empty elements
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // This test store the feed entries in a variable, selecting first the
        // feed container and then all the single entries. The variable is an array,
        // so if the entries are properly loaded the array should be greater than 0
        it('are loaded within the .feed container', function() {

            let feedEntries = document.querySelector('.feed').querySelectorAll('.entry');
            expect(feedEntries.length).toBeGreaterThan(0);
        });
    });

    // Test suite to check page refresh when new feed set is selected
    describe('New Feed Selection', function() {
        let oldFeeds;
        let newFeeds;

        // As before we should start the test when the contents are loaded
        beforeEach(function(done) {
            // Load the first set of feeds
            loadFeed(0, function() {

                // Store the HTML content into oldFeeds variable
                oldFeeds = document.getElementsByClassName('feed')[0].innerHTML;

                // Load the second set of feeds
                loadFeed(1, function() {

                    // Store the HTML of the new feeds into newFeeds variable
                    newFeeds = document.getElementsByClassName('feed')[0].innerHTML;
                    done();
                });
            });
        });

        // The test compare the content of two variables: oldFeeds and newFeeds.
        // If the feed content has correctly changed after the new set was loaded
        // then also the HTML content must change so the variables should be
        // different
        it('is correctly loaded within .feed container', function() {
            expect(newFeeds).not.toEqual(oldFeeds);
        });
    });
}());
