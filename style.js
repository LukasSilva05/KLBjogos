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
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 1,
  },

  imgRecomendados: {
    margin: 10,
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
    paddingLeft: 15,
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
    margin: 15,
    padding: 15,
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
    marginLeft: 15,
    marginTop: 10,
  },

  infoGames: {
    paddingBottom: 5,
    fontSize: 12,
    color: "white",
    fontFamily: "Audiowide_400Regular",
  },
  /*   FIM DO STYLE DA TELA PRINCIPAL  */
});

export default styles;
