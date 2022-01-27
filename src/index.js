//commonjs --> Usar require para importar
//babel --> Compilar de javascript nuevo a javascript que los navegadores puedan entender

import app from './app';

app.listen(3000, () => {
  console.log('Execute');
});
