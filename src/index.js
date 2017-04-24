const express = require("express");
const path = require("path");
const exphbs  = require("express-handlebars");
const config = require("./config");
const app = express();

var hbs = exphbs.create( {

    defaultLayout: "main",
    extname: ".html",
    layoutsDir:  path.join( __dirname, "views/layouts" )

} );

app.engine("html", exphbs( hbs.engine ) );
app.set( "view engine", "html" );
app.set("views", path.join( __dirname, "views" ) );

app.use( express.static( path.join( __dirname, "public" ) ) );

app.get( "/", (req, res) => {

    res.render( "body", {
        title: "Main page",
    } );

} );

app.listen( config.port, () => {

    console.log("your app is now up");

}) ;
