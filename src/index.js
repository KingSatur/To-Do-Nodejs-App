//commonjs --> Usar require para importar
//babel --> Compilar de javascript nuevo a javascript que los navegadores puedan entender

import app from './app';
import config from './config';

app.listen(config.PORT, () => {
  console.log('Execute');
});
