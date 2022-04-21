import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";
import styles from "./style";
import { ScrollView } from "react-native-gesture-handler";

function Details({ route, navigation }) {
  let jogo = route.params["jogo"];
  return (
    <SafeAreaView style={{ backgroundColor: "#5A4E65", flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: "#8262A9", paddingBottom: 10 }}>
          <View style={styles.topBar}>
            <View style={styles.menuBar}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.textBar}>
              <Text style={styles.textKLB}> KLB </Text>
              <Text style={styles.textJogos}>jogos</Text>
            </View>
            <View style={styles.userAndShop}>
              <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
                <AntDesign name="shoppingcart" size={28} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5 name="user-circle" size={28} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.nomeJogo}>
            <Text style={styles.text3}>{jogo.name}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image style={styles.imgDetails} source={jogo.image} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View style={styles.money}>
              <Text style={styles.text3}>{jogo.value}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btCarrinho}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontFamily: "Audiowide_400Regular",
                  }}
                >
                  Adicionar ao carrinho
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 18, paddingBottom: 5, paddingHorizontal: 18 }}>
          <Text style={styles.infoGames}>
            <Text style={{ textDecorationLine: "underline" }}>
              Data de lançamento
            </Text>
            : {jogo.data}
          </Text>
          <Text style={styles.infoGames}>
            <Text style={{ textDecorationLine: "underline" }}>
              Desenvolvedor
            </Text>
            : {jogo.desenvolvedor}
          </Text>
          <Text style={styles.infoGames}>
            <Text style={{ textDecorationLine: "underline" }}>Plataformas</Text>
            : {jogo.plataforma}
          </Text>
          <Text style={styles.infoGames}>
            <Text style={{ textDecorationLine: "underline" }}>Gêneros</Text>:{" "}
            {jogo.genero}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 18,
          }}
        >
          <View>
            <Image source={jogo.idade} style={{
              height: 25,
              width: 25,
            }} />
          </View>
          <View>
            <TouchableOpacity>
              <SimpleLineIcons name="share" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.4,
            borderColor: "#A894BD",
            marginHorizontal: 18,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Details;
