var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bodyParser = require('body-parser'),
    path     = require( 'path' ),
    port     = process.env.PORT || 8000,
    app      = express();

process.env['APPROOT'] = __dirname;

app.use( express.static( path.join(process.env['APPROOT'], 'client' )));
app.use( express.static( path.join(process.env['APPROOT'], 'bower_components' )));
app.use(bodyParser.json());

require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
