import mongoose from 'mongoose';
mongoose.Promise = require('bluebird')
import { dbHostProd, dbHostDev } from '../config/config.json';

export default () => {
  let db;
  // Find the appropriate database to connect to, default to localhost if not found.
  if(process.env.NODE_ENV === "production") {
    db = dbHostProd
  } else {
    db = dbHostDev
  }  
  const connect = () => {
    mongoose.connect(db, (err) => {
      if (err) {
        console.log(`===>  Error connecting to ${db}`);
        console.log(`Reason: ${err}`);
      } else {
        console.log(`===>  Succeeded in connecting to ${db}`);
      }
    });
  };
  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);  
};
