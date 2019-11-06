const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const Bundler = require('parcel-bundler');
const chalk = require('chalk');
const packageJSON = require('../package.json');

// logging middleware
app.use(morgan('dev'));

// bundler middleware
const entryFiles = [path.join(__dirname, './static/index.html')];
const bundler = new Bundler(entryFiles, packageJSON.parcel);
app.use(bundler.middleware());

// static middleware
app.use(express.static(path.join(__dirname, 'static')));

// start
app.listen(packageJSON.port, () =>
  console.log(
    chalk.green.inverse(`\nserving at http://localhost:${packageJSON.port}`)
  )
);
