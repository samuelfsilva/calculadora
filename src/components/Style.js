import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
      },
      entrada: {
        flex: 2,
        backgroundColor: '#21610B',
        justifyContent: 'flex-end',
      },
      teclado: {
        flex: 8,
        backgroundColor:'#01DF01',
      },
      styleBotao: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#000',
    },
    styleBotaoTexto: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0B3B0B',
    },
    inputRow: {
      flex: 1,
      flexDirection: 'row',
    },
    texto: {
        flex: 1,
        fontSize: 50,
    },
});

export default Style;