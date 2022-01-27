import express from 'express';
import router from './routes/index.routes';
import { engine } from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(
  '.hbs',
  engine({
    layoutsDir: path.join(app.get('views'), 'layout'),
    defaultLayout: 'main',
    extname: '.hbs',
    partialsDir: path.join(app.get('views'), 'partials'),
  })
);

app.set('view engine', '.hbs');
app.use(router);
app.use(morgan('dev'));

export default app;
