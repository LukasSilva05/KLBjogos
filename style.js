﻿import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#73648A',
        flex: 1,
    },

    /*   INICIO DO STYLE DA TELA DE LOGIN  */

    input: {
        color: 'white',
        paddingLeft: 12,
        margin: 10,
        width: 261,
        height: 49,
        backgroundColor: '#1C1B1F99',
        borderRadius: 5,
    },
    submitButton: {
        marginBottom: 5,
        backgroundColor: '#1C1B1F',
        padding: 10,
        margin: 15,
        height: 43,
        width: 168,
        borderRadius: 100,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 12,
        marginRight: 12,
    },
    botoes: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputs: {
        alignItems: 'center',
    },
    blocoLogin: {
        flex: 50,
    },
    avatar: {
        backgroundColor: 'white',
        borderWidth: 0,
    },
    logo: {
        flex: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        height: 300,
        width: 300,
        marginTop: 80,
    },
    textEsqueceu: {
        padding: 40,
        textAlign: 'center',
        color: 'white',
    },

    /*   FIM DO STYLE DA TELA DE LOGIN  */

    /*   INICIO DO STYLE DA TELA PRINCIPAL  */

    topBar: {
        flex: 1,
        backgroundColor: '#1C1B1FD9',
        alignItems: 'center',
        paddingTop: 35,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    textBar: {
        flex: 120,
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 20,
    },
    textKLB: {
        fontSize: 30,
        color: 'white',
    },
    textJogos: {
        fontSize: 12,
        color: 'white',
    },
    userAndShop: {
        flex: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    user: {
        marginRight: 10,
    },

    recomendados: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 1,
    },

    imgRecomendados: {
        borderRadius: 5,
    },
    btImg: {
        marginTop: 10,
        marginRight: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    img1: {
        height: 205,
        width: 333,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
    lancamentos: {
        paddingLeft: 15,
        paddingTop: 30,
    },

    /*   FIM DO STYLE DA TELA PRINCIPAL  */
});

export default styles;