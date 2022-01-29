import moongose from 'mongoose';

(async () => {
  try {
    const db = await moongose.connect('mongodb://localhost:27017/toDoNodejs', {
      useNewUrlParser: true,
    });
    console.log('Connected to:', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
