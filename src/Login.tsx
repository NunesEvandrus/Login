import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import Logo from './assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './Componentes/Titulo';
import { EntradaTexto } from './Componentes/EntradaTexto';
import { Botao } from './Componentes/Botao';

export default function Principal() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>
        Faça login em sua conta
      </Titulo>
            <Box w="100%">
              <EntradaTexto
                label="Email"
                placeholder="Insira seu endereço de e-mail"
              />
              <EntradaTexto
                label="Senha"
                placeholder="Insira sua senha"
                secureTextEntry = {true}
              />
            </Box>
           <Botao>
              Entrar
            </Botao>
            <Link href='http://www.ecnsystem.com.br' mt={2}>
              Esqueceu seua senha?
            </Link>
            <Box w={'100%'} mt={8} flexDirection='row' justifyContent='center'>
              <Text>Ainda não tem cadastro?</Text>
              <TouchableOpacity>
                <Text color='blue.500'>Faça seu cadastro.</Text>
              </TouchableOpacity>
            </Box>
    </VStack>
  );
}

