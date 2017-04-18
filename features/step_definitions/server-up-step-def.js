/*eslint-env node*/
/*eslint-disable new-cap*/

const { defineSupportCode } = require( "cucumber" );

defineSupportCode( function( { Given, When, Then } ) {

    When( "I make a request to the server", function (callback) {

        this.browser.visit( "/", callback );

    } );
    
    Then( "I should recieve a status {int} back", function ( code, callback ) {
        
        this.browser.assert.status( code );
        callback();

    } );

    Then('I should recieve a html document', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    } );

} );
