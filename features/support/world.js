const {defineSupportCode} = require("cucumber");
const Browser = require("zombie");
const config = require("../../src/config");
Browser.localhost( config.url, config.port );

function CustomWorld() {

    this.browser = new Browser();

}

defineSupportCode( function( {setWorldConstructor} ) {

    setWorldConstructor(CustomWorld);

} );