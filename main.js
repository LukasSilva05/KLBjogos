import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Entypo, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import styles from "./style";
import { ScrollView } from "react-native-gesture-handler";

function Main({ navigation }) {
  const [lancamentos, setimages] = useState([
    {
      id: 1,
      name: "Elden Ring",
      value: "R$ 249,90",
      image: require("./assets/eldenring.jpg"),
      data: "25 de fevereiro de 2022",
      desenvolvedor: "FromSoftware",
      plataforma:
        "PlayStation 4, Xbox Series X, Xbox One, PlayStation 5, Microsoft Windows",
      genero: "Aventura, RPG, Ação",
      idade: 16,
    },
    {
      id: 2,
      name: "Call Of Duty: Modern Warfare",
      value: "R$ 65,96",
      image: require("./assets/cod.jpg"),
      data: "25 de outubro de 2019",
      desenvolvedor: "Infinity Ward",
      plataforma: "PlayStation 4, Xbox One, Microsoft Windows",
      genero: "Ação",
      idade: 16,
    },
    {
      id: 3,
      name: "Bus Simulator 21",
      value: "R$ 117,99",
      image: require("./assets/bus21.jpg"),
      data: "07 de setembro de 2021",
      desenvolvedor: "Stillalive Studios",
      plataforma:
        "Xbox Series X, Xbox One, PlayStation 4, Microsoft Windows, PlayStation 5",
      genero: "Simulação",
      idade: 16,
    },
    {
      id: 4,
      name: "Microsoft Flight Simulator",
      value: "R$ 249,95",
      image: require("./assets/pesado.jpg"),
      data: "18 de agosto de 2020",
      desenvolvedor: "Asobo Studio",
      plataforma: "Xbox Series X, Microsoft Windows, Xbox Cloud Gaming, OpenXR",
      genero: "Simulação",
      idade: 16,
    },
  ]);

  const [populares, setimages1] = useState([
    {
      id: 1,
      name: "Grand Theft Auto 5",
      value: "R$ 66,66",
      image: require("./assets/gta.jpg"),
      data: "17 de setembro de 2013",
      desenvolvedor: "Rockstar",
      plataforma:
        "PlayStation 4, Xbox Series X, Xbox One, PlayStation 3, PlayStation 5, Xbox 360, Microsoft Windows",
      genero: "Aventura, Ação",
      idade: 16,
    },
    {
      id: 2,
      name: "Call Of Duty: Modern Warfare",
      value: "R$ 65,96",
      image: require("./assets/cod.jpg"),
      data: "25 de outubro de 2019",
      desenvolvedor: "Infinity Ward",
      plataforma: "PlayStation 4, Xbox One, Microsoft Windows",
      genero: "Ação",
      idade: 16,
    },
    {
      id: 3,
      name: "Fortnite",
      value: "Gratuito",
      image: require("./assets/fort.jpg"),
      data: "21 de julho de 2017",
      desenvolvedor: "Epic Games",
      plataforma:
        "Nintendo Switch, PlayStation 4, iOS, Xbox One, Xbox Series X, Android, PlayStation 5, macOS, Microsoft Windows",
      genero: "Battle Royale, Ação",
      idade: 16,
    },
    {
      id: 4,
      name: "Euro Truck Simulator 2",
      value: "R$ 39,99",
      image: require("./assets/ETS2.jpg"),
      data: "19 de outubro de 2012",
      desenvolvedor: "SCS Software",
      plataforma: "Microsoft Windows, Linux, Mac OS",
      genero: "Simulador",
      idade: 16,
    },
  ]);

  const [maisVendidos, setimages2] = useState([
    {
      id: 1,
      name: "Forza Horizon 5",
      value: "R$ 249,00",
      image: require("./assets/forza.jpg"),
      data: "04 de novembro de 2021",
      desenvolvedor: "Playground Games",
      plataforma: "Xbox Series X, Xbox One, Android, Microsoft Windows",
      genero: "Simulador, Ação, Aventura, Corrida",
      idade: 16,
    },
    {
      id: 2,
      name: "Elden Ring",
      value: "R$ 249,90",
      image: require("./assets/eldenring.jpg"),
      data: "25 de fevereiro de 2022",
      desenvolvedor: "FromSoftware",
      plataforma:
        "PlayStation 4, Xbox Series X, Xbox One, PlayStation 5, Microsoft Windows",
      genero: "Aventura, RPG, Ação",
      idade: 16,
    },
    {
      id: 3,
      name: "Call Of Duty: Modern Warfare",
      value: "R$ 65,96",
      image: require("./assets/cod.jpg"),
      data: "25 de outubro de 2019",
      desenvolvedor: "Infinity Ward",
      plataforma: "PlayStation 4, Xbox One, Microsoft Windows",
      genero: "Ação",
      idade: 16,
    },
    {
      id: 4,
      name: "Formula 1 2021",
      value: "R$ 249,00",
      image: require("./assets/f1.jpg"),
      data: "13 de julho de 2021",
      desenvolvedor: "Codemasters",
      plataforma:
        "PlayStation 4, Xbox One, PlayStation 5, Xbox Series X, Microsoft Windows",
      genero: "Corrida",
      idade: 16,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topBar}>
          <View style={styles.menuBar}>
            <TouchableOpacity>
              <Entypo
                name="menu"
                size={24}
                color="white"
                onPress={() => navigation.openDrawer()}
              />
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
        <View style={styles.recomendados}>
          <Text style={styles.text}>Recomendados</Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={lancamentos}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details", { jogo: item })}
                >
                  <Image source={item.image} style={styles.imgRecomendados} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.lancamentos}>
          <Text style={styles.text2}>Lançamentos</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={lancamentos}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details", { jogo: item })}
                >
                  <Image source={item.image} style={styles.carrocelImagens} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.lancamentos}>
          <Text style={styles.text2}>Populares</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={populares}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details", { jogo: item })}
                >
                  <Image source={item.image} style={styles.carrocelImagens} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.maisVendidos}>
          <Text style={styles.text2}>Mais Vendidos</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={maisVendidos}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details", { jogo: item })}
                >
                  <Image source={item.image} style={styles.carrocelImagens} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main;
