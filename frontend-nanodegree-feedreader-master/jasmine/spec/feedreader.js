/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
   /*RSS feed suite*/
    describe('RSS Feeds', function() {
        /* test to make sure that the allFeeds variable has been defined and that it is not
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('all feeds have URL defined',function(){
             allFeeds.forEach(function(Feeds) {
                expect(Feeds.url).toBeDefined();
                expect(Feeds.url.length).not.toBe(0);
            });
         });


        /*  test that loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty. */

         it('all feeds have names defined',function(){
             allFeeds.forEach(function(Feeds) {
                expect(Feeds.name).toBeDefined();
                expect(Feeds.name.length).not.toBe(0);
            });
         })
    });


    /* test suite named "The menu" */
    describe('The menu',function(){

       /* test that ensures the menu element is hidden by default. */
         it('menu element is hidden',function(){
           expect($(document.body).hasClass('menu-hidden')).toBe(true); //checkingif the body has a class menu-hidden
            })

         /* test that ensures the menu changes visibility when the menu icon is clicked. */
          it('menu displays when clicked and hides when clicked again',function(){
           $('a.menu-icon-link').click()// check if the menu is not hidden when clicked
           expect(document.body.className).not.toContain('menu-hidden');
           $('a.menu-icon-link').click();
           expect(document.body.className).toContain('menu-hidden'); //checks if the menu is hidden if clicked again
          })
              });

    /*  test suite named "Initial Entries" */
    describe('Initial Entries',function(){

        beforeEach(function (done) {
            loadFeed(0, done); //ensures load feed function is complete
        });
    it('the .feed container is not empty',function(done){
        expect($('.feed .entry').length).not.toBe(0); //to test if the .entry element is not empty
            done();
         });
             });

    /*  suite named "New Feed Selection"*/
    describe('New Feed Selection',function(){
        var $Feed,$Feed2;

        beforeEach(function (done){
            loadFeed(1, function(){
                $Feed = $('.feed').html(); // getting the first feed/title
                loadFeed(2, function(){
                    $Feed2 = $('.feed').html(); //getting the second feed/title
                    done();
                });
            });
        });
        it('when a new feed is loaded content changes', function (done) {
            expect($Feed2).not.toBe($Feed); //comparing if bth the feeds are not equal
            done();

         })
             })
}());
