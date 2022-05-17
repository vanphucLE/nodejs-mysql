import express from 'express';
import routes from './routes';

const app = express();
const PORT = 8888;

// parse application/json
app.use(express.json({ limit: '50mb' }));
// parse application/x-www-form-urlencoded

app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
