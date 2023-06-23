import {NativeBaseProvider, StatusBar} from 'native-base';

import Login from './src/Login';
import {TEMAS} from './src/Estilos/temas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue['800']} />
      <Login />
    </NativeBaseProvider>
  );
}
