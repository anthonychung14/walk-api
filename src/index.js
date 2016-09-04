import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import middleware from './middleware';
import config from './config/config.json';
import morgan from 'morgan'

import stepsRouter from './api/steps'
import groupsRouter from './api/groups'
import usersRouter from './api/users'

import initializeDb from './db';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(express.static('client'))
app.use(morgan('dev'))
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.urlencoded({
  extended : true
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// connect to db
initializeDb( db => {

  console.log("DB INITIALIZATION")  
  //TODO: CRUD UTIL
  // app.use(api({ db }))  
  app.use(middleware({ db }));
  app.use('/steps', stepsRouter({ db }))  
  app.use('/groups', groupsRouter({ db }))  
  app.use('/users', usersRouter({ db }))  

  // app.use(middleware({ config, db }));


  app.use(function(err, req, res, next) {
    if (err) {
      console.log(err.message);
      res.status(500).send(err);
    }
  });
	app.server.listen(process.env.PORT || config.port);

	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
