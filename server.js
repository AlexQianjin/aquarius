var express = require("express");
var browserify = require('browserify-middleware');
var babelify = require("babelify");
var browserSync = require('browser-sync');
var app = express();
var port = process.env.PORT || 8080;

browserify.settings({
    transform: [babelify.configure({
    })],
    presets: ["es2015", "react"],
    extensions: ['.js', '.jsx'],
    grep: /\.jsx?$/
});

// serve client code via browserify
app.get('/bundle.js', browserify(__dirname+'/source/app.jsx'));

// resources
app.get(['*.png', '*.jpg', '*.css', '*.map'], function (req,
    res) {
    res.sendFile(__dirname + "/public/" + req.path);
});

// all other requests will be routed to index.html
app.get('*', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Run the server
app.listen(port, function () {
    browserSync({
        proxy: 'localhost:' + port,
        files: ['source/**/*.{jsx}', 'public/**/*.{css}'],
        options: {
            ignored: 'node_modules'
        }
    });
});