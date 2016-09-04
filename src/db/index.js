import connect from './connect';
import controllers from './controllers';
import passport from './passport';
import session from './session';

export { connect, controllers, passport, session };

export default {
  connect,
  controllers,
  passport,
  session
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