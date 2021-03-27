import logger from './logger';
import app from './app';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`App is listening on ${PORT}`);
});
