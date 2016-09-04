// import connect from './connect';
// import controllers from './controllers';
// import passport from './passport';
// import session from './session';

// export { connect, controllers, passport, session };

// export default {
//   connect,
//   controllers,
//   passport,
//   session
// };

import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { mongo } from './constants';

export default () => {
  const connect = () => {
    mongoose.connect(mongo, (err) => {
      if (err) {
        console.log(`===>  Error connecting to ${mongo}`);
        console.log(`Reason: ${err}`);
      } else {
        console.log(`===>  Succeeded in connecting to ${mongo}`);
      }
    });
  };
  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);  

  // Register schema as mongoose model
  const modelPath = path.join(__dirname, 'models');
  fs.readdirSync(modelPath).forEach((file) => {
    if (~file.indexOf('.js')) require(`${modelPath}/${file}`);
  });

  return db  
};


// export default callback => {
//  // connect to a database if needed, the pass it to `callback`:
//   var mockData = {
//     name: "Anthony",
//     steps: "10,000"
//   }
//   console.log("db callback called")
//  callback(mockData);
// }