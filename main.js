import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
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
      idade: require("./assets/classificacao-16-anos.png"),
      sobre:
        "O NOVO RPG DE AÇÃO E FANTASIA. Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
      requisitos: {
        so: "Windows 10/11",
        processador: "INTEL CORE I7-8700K or AMD RYZEN 5 3600X",
        memoria: "16 GB de RAM",
        placa: "NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB",
        armazenamento: "60 GB",
      },
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
      idade: require("./assets/classificacao-16-anos.png"),
      sobre:
        "Um dos jogos mais aclamados pela crítica na história, Call of Duty®4: Modern Warfare® está de volta, remasterizado em alta definição com melhores texturas, renderização mais realista, efeitos de luz dinâmicos e muito mais para uma nova geração.",
      requisitos: {
        so: "Windows 7 64-Bit or later",
        processador: "Intel Core i3-3225 @ 3.30GHz or equivalent",
        memoria: "8 GB de RAM",
        placa: "NVIDIA GeForce GTX 660 2GB / AMD Radeon HD 7850 2GB",
        armazenamento: "20 GB",
      },
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
      idade: require("./assets/classificacao-14-anos.png"),
      sobre:
        "Experimente o dia a dia de um motorista de ônibus em duas cidades abertas nos EUA ou Europa. Dirija até 30 ônibus licenciados de fabricantes internacionais, incluindo ônibus de dois andares e elétricos.",
      requisitos: {
        so: "Windows 10 64-Bit",
        processador: "Intel Core i5-4440 / AMD FC-8140 ou equivalente",
        memoria: "8 GB de RAM",
        placa:
          "NVIDIA GeForce GTX 1070 (8 GB de VRAM) / AMD Radeon RX Vega 56 (8 GB de VRAM) ou superior",
        armazenamento: "18 GB",
      },
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
      idade: require("./assets/classificacao-14-anos.png"),
      sobre:
        "Obrigado aos nossos fãs, novos e de longa data! A Edição de Jogo do Ano (GOTY) do Microsoft Flight Simulator oferece 5 aeronaves inéditas, 8 aeroportos feitos à mão, 6 novos Voos de Descoberta, novos tutoriais e atualizações para o sistema de clima.",
      requisitos: {
        so: "Windows 10",
        processador: "Intel i5-8400 | AMD Ryzen 5 1500X",
        memoria: "16 GB de RAM",
        placa: " NVIDIA GTX 970 | AMD Radeon RX 590",
        armazenamento: "150 GB",
      },
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
      idade: require("./assets/classificacao-16-anos.png"),
      sobre:
        "Grand Theft Auto V para PC oferece aos jogadores a opção de explorar o gigantesco e premiado mundo de Los Santos e Blaine County em resoluções de até 4K e além, assim como a chance de experimentar o jogo rodando a 60 FPS (quadros por segundo).",
      requisitos: {
        so:
          "Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1",
        processador:
          "Intel Core i5 3470 @ 3.2 GHZ (4 CPUs) / AMD X8 FX-8350 @ 4 GHZ (8 CPUs)",
        memoria: "8 GB de RAM",
        placa: "NVIDIA GTX 660 2 GB / AMD HD7870 2 GB",
        armazenamento: "72 GB",
      },
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
      idade: require("./assets/classificacao-16-anos.png"),
      sobre:
        "Um dos jogos mais aclamados pela crítica na história, Call of Duty®4: Modern Warfare® está de volta, remasterizado em alta definição com melhores texturas, renderização mais realista, efeitos de luz dinâmicos e muito mais para uma nova geração.",
      requisitos: {
        so: "Windows 7 64-Bit or later",
        processador: "Intel Core i3-3225 @ 3.30GHz or equivalent",
        memoria: "8 GB de RAM",
        placa: "NVIDIA GeForce GTX 660 2GB / AMD Radeon HD 7850 2GB",
        armazenamento: "20 GB",
      },
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
      idade: require("./assets/classificacao-14-anos.png"),
      sobre:
        "Fortnite é um jogo multijogador grátis que está sempre em evolução e permite que você e os seus amigos escolham entre batalhar para ver quem é o último a ficar de pé ou colaborar uns com os outros para criar o mundo dos sonhos no jogo. Jogue Battle Royale e o Modo Criativo do Fortnite GRÁTIS. Baixe agora e mergulhe de cabeça na ação. Esse download também te dá a oportunidade de adquirir a campanha JxA cooperativa Salve o Mundo.",
      requisitos: {
        so: "Windows 10 64-bit",
        processador: "Core i5-7300U 3.5 GHz",
        memoria: "8 GB RAM",
        placa: "Nvidia GTX 960, AMD R9 280, or equivalent DX11 GPU",
        armazenamento: "50 GB",
      },
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
      idade: require("./assets/classificacao-14-anos.png"),
      sobre:
        "Viaje pela Europa como o rei da estrada, um caminhoneiro que entrega cargas importantes em distâncias impressionantes! Com dezenas de cidades para explorar, sua resistência, habilidade e velocidade serão levadas ao limite.",
      requisitos: {
        so: "Windows 7/8.1/10 64-bit",
        processador: "Quad core CPU 3.0 GHz",
        memoria: "6 GB RAM",
        placa: "GeForce GTX 760-class (2 GB)",
        armazenamento: "12 GB",
      },
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
      idade: require("./assets/classificacao-14-anos.png"),
      sobre:
        "Sua maior aventura Horizon te espera! Explore o mundo aberto vibrante e em constante evolução nas terras mexicanas. Participe de corridas divertidas e sem limites enquanto pilota centenas dos melhores carros do mundo. Comece hoje sua Aventura Horizon e adicione o jogo a sua Lista de Desejos!",
      requisitos: {
        so: "Windows 10 version 15063.0 or higher",
        processador: "Intel i5-8400 or AMD Ryzen 5 1500X",
        memoria: "16 GB de RAM",
        placa: "NVidia GTX 1070 OR AMD RX 590",
        armazenamento: "110 GB",
      },
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
      idade: require("./assets/classificacao-16-anos.png"),
      sobre:
        "O NOVO RPG DE AÇÃO E FANTASIA. Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
      requisitos: {
        so: "Windows 10/11",
        processador: "INTEL CORE I7-8700K or AMD RYZEN 5 3600X",
        memoria: "16 GB de RAM",
        placa: "NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB",
        armazenamento: "60 GB",
      },
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
      idade: require("./assets/classificacao-16-anos.png"),
      sobre:
        "Um dos jogos mais aclamados pela crítica na história, Call of Duty®4: Modern Warfare® está de volta, remasterizado em alta definição com melhores texturas, renderização mais realista, efeitos de luz dinâmicos e muito mais para uma nova geração.",
      requisitos: {
        so: "Windows 7 64-Bit or later",
        processador: "Intel Core i3-3225 @ 3.30GHz or equivalent",
        memoria: "8 GB de RAM",
        placa: "NVIDIA GeForce GTX 660 2GB / AMD Radeon HD 7850 2GB",
        armazenamento: "20 GB",
      },
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
      idade: require("./assets/classificacao-14-anos.png"),
      sobre:
        "Toda história tem um começo no F1® 2021, o vídeo game oficial do 2021 FIA FORMULA ONE WORLD CHAMPIONSHIP™. Divirta-se com os novos recursos do F1® 2021, incluindo a experiência da história “Ponto de Frenagem”, a Carreira de dois jogadores e fique mais perto do grid.",
      requisitos: {
        so:
          "Windows 10 64-bit (Version 1709) | For Ray Tracing: Windows 10 64-bit (Version 2004)",
        processador: "Intel Core i5 9600K or AMD Ryzen 5 2600X",
        memoria: "16 GB de RAM",
        placa:
          "NVIDIA GTX 1660 Ti or AMD RX 590 | For Ray Tracing: GeForce RTX 3070 or Radeon RX 6800",
        armazenamento: "80 GB",
      },
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topBar}>
          <View style={styles.menuBar}>
            <TouchableOpacity>
              <FontAwesome5 name="user-circle" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.textBar}>
            <Text style={styles.textKLB}> KLB </Text>
            <Text style={styles.textJogos}>jogos</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
              <AntDesign name="shoppingcart" size={28} color="white" />
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
            keyExtractor={(item) => item.id}
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
            keyExtractor={(item) => item.id}
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
            keyExtractor={(item) => item.id}
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
            keyExtractor={(item) => item.id}
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
