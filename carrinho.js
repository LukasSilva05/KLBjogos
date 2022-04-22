import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    FlatList,
} from 'react-native';
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';

function Carrinho({ route, navigation }) {
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
            sobre: 'O NOVO RPG DE AÇÃO E FANTASIA. Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.',
            requisitos: {
                so: 'Windows 10/11',
                processador: 'INTEL CORE I7-8700K or AMD RYZEN 5 3600X',
                memoria: '16 GB de RAM',
                placa: 'NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB',
                armazenamento: '60 GB'
            }
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
            sobre: 'Um dos jogos mais aclamados pela crítica na história, Call of Duty®4: Modern Warfare® está de volta, remasterizado em alta definição com melhores texturas, renderização mais realista, efeitos de luz dinâmicos e muito mais para uma nova geração.',
            requisitos: {
                so: 'Windows 7 64-Bit or later',
                processador: 'Intel Core i3-3225 @ 3.30GHz or equivalent',
                memoria: '8 GB de RAM',
                placa: 'NVIDIA GeForce GTX 660 2GB / AMD Radeon HD 7850 2GB',
                armazenamento: '20 GB'
            }
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
            sobre: 'Experimente o dia a dia de um motorista de ônibus em duas cidades abertas nos EUA ou Europa. Dirija até 30 ônibus licenciados de fabricantes internacionais, incluindo ônibus de dois andares e elétricos.',
            requisitos: {
                so: 'Windows 10 64-Bit',
                processador: 'Intel Core i5-4440 / AMD FC-8140 ou equivalente',
                memoria: '8 GB de RAM',
                placa: 'NVIDIA GeForce GTX 1070 (8 GB de VRAM) / AMD Radeon RX Vega 56 (8 GB de VRAM) ou superior',
                armazenamento: '18 GB'
            }
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
            sobre: 'Obrigado aos nossos fãs, novos e de longa data! A Edição de Jogo do Ano (GOTY) do Microsoft Flight Simulator oferece 5 aeronaves inéditas, 8 aeroportos feitos à mão, 6 novos Voos de Descoberta, novos tutoriais e atualizações para o sistema de clima.',
            requisitos: {
                so: 'Windows 10',
                processador: 'Intel i5-8400 | AMD Ryzen 5 1500X',
                memoria: '16 GB de RAM',
                placa: ' NVIDIA GTX 970 | AMD Radeon RX 590',
                armazenamento: '150 GB'
            }
        },
    ]);
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
                        data={lancamentos}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.itensCarrinho}>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <Image source={item.image} style={styles.imagemCarrinho} />
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
                    <Text style={[styles.text, { fontSize: 20, paddingTop: 20 }]}>Forma de Pagamento: </Text>
                </View>
                <View style={{
                    margin: 10,
                    backgroundColor: '#A894BD',
                    borderRadius: 5,
                }}>
                    <View style={{ margin: 20 }}>
                        <Text style={styles.text4}>Subtotal:</Text>
                        <Text style={[styles.text4, { paddingTop: 10 }]}>Desconto aplicado:</Text>
                        <Text style={[styles.text4, { paddingTop: 10 }]}>Total:</Text>
                    </View>
                </View>
                <View style={styles.botaoComprar}>
                    <TouchableOpacity
                        style={styles.submitButtonComprar}
                        onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.submitButtonText}> COMPRAR </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Carrinho;
