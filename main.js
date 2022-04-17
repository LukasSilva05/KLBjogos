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

function Main({ navigation }) {

    const [lancamentos, setimages] = useState([
        { id: 1, name: 'Elden Ring', value: 'R$ 249,90', image: require('./assets/eldenring.jpg') },
        { id: 2, name: 'Call Of Duty', value: 'R$ 65,96', image: require('./assets/cod.jpg') },
        { id: 3, name: 'Bus Simulator 21', value: 'R$ 117,99', image: require('./assets/bus21.jpg') },
        { id: 4, name: 'Microsoft Flight Simulator', value: 'R$ 249,95', image: require('./assets/pesado.jpg') },
    ]);

    const [populares, setimages1] = useState([
        { id: 1, name: 'Grand Theft Auto 5', value: 'R$ 66,66', image: require('./assets/gta.jpg') },
        { id: 2, name: 'Call Of Duty', value: 'R$ 65,96', image: require('./assets/cod.jpg') },
        { id: 3, name: 'Fortnite', value: 'Gratuito', image: require('./assets/fort.jpg') },
        { id: 4, name: 'Euro Truck Simulator 2', value: 'R$ 39,99', image: require('./assets/ETS2.jpg') },
    ]);

    const [maisVendidos, setimages2] = useState([
        { id: 1, name: 'Forza Horizon 5', value: 'R$ 249,00', image: require('./assets/forza.jpg') },
        { id: 2, name: 'Elden Ring', value: 'R$ 249,90', image: require('./assets/eldenring.jpg') },
        { id: 3, name: 'Call Of Duty', value: 'R$ 65,96', image: require('./assets/cod.jpg') },
        { id: 4, name: 'Formula 1 2021', value: 'R$ 249,00', image: require('./assets/f1.jpg') },
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
                            /* onPress={() => navigation.openDrawer()} */
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textBar}>
                        <Text style={styles.textKLB}>
                            KLB<Text style={styles.textJogos}>jogos</Text>
                        </Text>
                    </View>
                    <View style={styles.userAndShop}>
                        <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
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
                                <TouchableOpacity onPress={() => navigation.navigate('Details', { jogo: item })}>
                                    <Image source={item.image} style={styles.imgRecomendados} />
                                </TouchableOpacity>
                            )
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
                                <TouchableOpacity onPress={() => navigation.navigate('Details', { jogo: item })}>
                                    <Image source={item.image} style={styles.carrocelImagens} />
                                </TouchableOpacity>
                            )
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
                                <TouchableOpacity onPress={() => navigation.navigate('Details', { jogo: item })}>
                                    <Image source={item.image} style={styles.carrocelImagens} />
                                </TouchableOpacity>
                            )
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
                                <TouchableOpacity onPress={() => navigation.navigate('Details', { jogo: item })}>
                                    <Image source={item.image} style={styles.carrocelImagens} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Main;
