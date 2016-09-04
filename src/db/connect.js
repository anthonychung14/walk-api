import mongoose from 'mongoose';
mongoose.Promise = require('bluebird')
import { dbHost } from '../config/config.json';

export default () => {
  // Find the appropriate database to connect to, default to localhost if not found.
  const connect = () => {
    mongoose.connect(dbHost, (err) => {
      if (err) {
        console.log(`===>  Error connecting to ${dbHost}`);
        console.log(`Reason: ${err}`);
      } else {
        console.log(`===>  Succeeded in connecting to ${dbHost}`);
      }
    });
  };
  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);  
};
