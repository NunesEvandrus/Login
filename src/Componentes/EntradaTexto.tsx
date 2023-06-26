import { Input } from "native-base";

export function EntradaTexto({...rest}) {
    return (
        <Input
            placeholder='Insira o seu email'
            size='lg'
            w='100%'
            borderRadius='lg'
            bgColor='gray.100'
            shadow='3'
            {...rest}
        />
    );
}