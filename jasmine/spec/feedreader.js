/*
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


// Tests are placed within the $() function, since some of these tests may
// require DOM elements, to ensure they don't run until the DOM is ready.
$(function() {

    // Tests about RSS Feeds definition
    describe('RSS Feeds', function() {

        // Test if RSS sourced are properly defined into allFeeds array
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        // Loop into every array's object to check if the url is defined
        // and not empty
        it('has an URL defined and not empty', function() {
            for(feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(allFeeds.url).not.toBe('');
            };
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('as name defined and not empty', function() {
            for(feed of allFeeds) {
                 expect(feed.name).toBeDefined();
                 expect(allFeeds.url).not.toBe('');
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        let body = document.getElementsByTagName('body')[0];

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect(body.classList.value).toBe('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('change visibility when the icon is clicked', function() {
            let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

            menuIcon.click();
            expect(body.classList.value).toBe('');

            menuIcon.click();
            expect(body.classList.value).toBe('menu-hidden');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('are loaded within the .feed container', function() {

            let feeds = document.getElementsByClassName('entry').length;
            expect(feeds).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

      //let feedLinks;
      let oldFeeds;
      let newFeeds;

          beforeEach(function(done) {
              loadFeed(0, function() {

                  oldFeeds = document.getElementsByClassName('feed')[0].innerHTML;
                  loadFeed(1, function() {

                      newFeeds = document.getElementsByClassName('feed')[0].innerHTML;
                      done();
                  });
              });
          });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('is correctly loaded within .feed container', function() {

            expect(newFeeds).not.toEqual(oldFeeds);
        });
    });

}());
