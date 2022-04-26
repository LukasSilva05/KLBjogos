import React, { useState, useEffect } from "react";
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
import api from "./api";

function Carrinho({ navigation }) {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    api.get("/").then((response) => {
      setJogos(response.data);
    });
  }, []);

  const deleteJogo = () => {
    api
      .delete(`/`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

<<<<<<< HEAD
    const deleteJogo = (id) => {
        api.delete(`/${id}`)
        alert('Removido do carrinho')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
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
                        <TouchableOpacity>
                            <AntDesign name="shoppingcart" size={28} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 name="user-circle" size={28} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.meuCarrinho}>
                    <Text style={styles.text4}>Meu carrinho</Text>
                </View>
                <View style={styles.recomendados}>
                    <Text style={[styles.text, { fontSize: 20, paddingTop: 20 }]}>Itens</Text>
                </View>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={jogos}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.itensCarrinho}>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <Image style={styles.imagemCarrinho} />
                                        <View style={{ flex: 1, flexDirection: 'column' }}>
                                            <View style={styles.nomeCarrinho}>
                                                <Text style={styles.moneyText}>{item.name}</Text>
                                            </View>
                                            <View style={styles.moneyCarrinho}>
                                                <Text style={styles.moneyText}>{item.value}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity style={styles.btRemover}>
                                            <Text
                                                style={{
                                                    textAlign: 'center',
                                                    color: "white",
                                                    fontSize: 10,
                                                    fontFamily: "Audiowide_400Regular",
                                                }}
                                                onPress={() => {
                                                    deleteJogo(item.id)
                                                }}
                                            >
                                                Remover do carrinho
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
=======
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            <TouchableOpacity>
              <AntDesign name="shoppingcart" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="user-circle" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.meuCarrinho}>
          <Text style={styles.text4}>Meu carrinho</Text>
        </View>
        <View style={styles.recomendados}>
          <Text style={[styles.text, { fontSize: 20, paddingTop: 20 }]}>
            Itens
          </Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={jogos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.itensCarrinho}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Image style={styles.imagemCarrinho} />
                    <View style={{ flex: 1, flexDirection: "column" }}>
                      <View style={styles.nomeCarrinho}>
                        <Text style={styles.moneyText}>{item.name}</Text>
                      </View>
                      <View style={styles.moneyCarrinho}>
                        <Text style={styles.moneyText}>{item.value}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <TouchableOpacity style={styles.btRemover}>
                      <Text
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 10,
                          fontFamily: "Audiowide_400Regular",
>>>>>>> 30a3d1243a3b367d88bbea2d80fb1480aedf4870
                        }}
                      >
                        Remover do carrinho
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.recomendados}>
          <Text style={[styles.text, { fontSize: 20, paddingTop: 20 }]}>
            Forma de Pagamento:{" "}
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: "#A894BD",
            borderRadius: 5,
          }}
        >
          <View style={{ margin: 20 }}>
            <Text style={styles.text4}>Subtotal:</Text>
            <Text style={[styles.text4, { paddingTop: 10 }]}>
              Desconto aplicado:
            </Text>
            <Text style={[styles.text4, { paddingTop: 10 }]}>Total:</Text>
          </View>
        </View>
        <View style={styles.botaoComprar}>
          <TouchableOpacity
            style={styles.submitButtonComprar}
            onPress={() => alert("Compra realizada!")}
          >
            <Text style={styles.submitButtonText}> COMPRAR </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Carrinho;
