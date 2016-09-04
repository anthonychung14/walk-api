import session from 'express-session';
import connectMongo from 'connect-mongo';
import config from '../config/config.json';


const MongoStore = connectMongo(session);

export default () =>
  new MongoStore(
    {
      url: config.dbHost,
      autoReconnect: true
    }
  );
