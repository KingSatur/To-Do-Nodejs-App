import moongose from 'mongoose';
import config from './config';

(async () => {
  try {
    const db = await moongose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log('Connected to:', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
