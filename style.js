import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8262A9",
    flex: 1,
  },

  /*   INICIO DO STYLE DA TELA DE LOGIN  */

  input: {
    color: "white",
    paddingLeft: 12,
    margin: 10,
    width: 261,
    height: 49,
    backgroundColor: "#1C1B1F99",
    borderRadius: 5,
    fontFamily: "Audiowide_400Regular",
  },
  submitButton: {
    marginBottom: 5,
    backgroundColor: "#1C1B1F",
    padding: 10,
    margin: 15,
    height: 43,
    width: 168,
    borderRadius: 100,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    marginLeft: 12,
    marginRight: 12,
    fontFamily: "Audiowide_400Regular",
  },
  botoes: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputs: {
    alignItems: "center",
  },
  blocoLogin: {
    flex: 50,
  },
  avatar: {
    backgroundColor: "white",
    borderWidth: 0,
  },
  logo: {
    flex: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    height: 300,
    width: 300,
    marginTop: 80,
  },
  textEsqueceu: {
    padding: 40,
    textAlign: "center",
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },

  /*   FIM DO STYLE DA TELA DE LOGIN  */

  /*   INICIO DO STYLE DA TELA PRINCIPAL  */

  topBar: {
    flex: 1,
    backgroundColor: "#1C1B1FD9",
    alignItems: "center",
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    flexDirection: "row",
  },
  textBar: {
    flex: 120,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
  },
  textKLB: {
    fontSize: 30,
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },
  textJogos: {
    fontSize: 12,
    color: "white",
    lineHeight: 11,
    paddingRight: 4,
    fontFamily: "Audiowide_400Regular",
  },
  userAndShop: {
    flex: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  user: {
    marginRight: 10,
  },

  recomendados: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 1,
  },

  imgRecomendados: {
    margin: 8,
    height: 250,
    width: 400,
    borderRadius: 5,
  },

  text: {
    fontSize: 16,
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },

  text2: {
    paddingLeft: 10,
    fontSize: 16,
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },
  text3: {
    paddingLeft: 5,
    fontSize: 15,
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },
  lancamentos: {
    paddingTop: 30,
  },
  maisVendidos: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  nomeJogo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#A894BD",
  },
  imgDetails: {
    height: 200,
    width: 390,
    borderRadius: 5,
  },
  money: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#47365C",
  },
  btCarrinho: {
    backgroundColor: "#6FCA59",
    margin: 10,
    padding: 11,
    borderRadius: 10,
  },
  carrocelImagens: {
    width: 130,
    height: 150,
    borderRadius: 5,
    margin: 8,
  },

  infoGames: {
    paddingBottom: 5,
    fontSize: 12,
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },

  sinopse: {
    fontSize: 12,
    textAlign: 'justify',
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },
  meuCarrinho: {
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 30,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#A894BD",
  },
  text4: {
    fontSize: 15,
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },
  itensCarrinho: {
    margin: 10,
    backgroundColor: '#A894BD',
    borderRadius: 5,
  },
  imagemCarrinho: {
    margin: 8,
    height: 80,
    width: 130,
    borderRadius: 5,
  },
  moneyCarrinho: {
    height: 30,
    width: 85,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#47365C",
  },
  moneyText: {
    textAlign: 'left',
    fontSize: 10,
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },
  nomeCarrinho: {
    paddingLeft: 4,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btRemover: {
    backgroundColor: "#DE3636",
    width: 150,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 11,
    borderRadius: 10,
  },

  botaoComprar: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  submitButtonComprar: {
    marginBottom: 5,
    backgroundColor: "#6FCA59",
    padding: 10,
    margin: 15,
    height: 43,
    width: 168,
    borderRadius: 100,
  },
  /*   FIM DO STYLE DA TELA PRINCIPAL  */
});

export default styles;
