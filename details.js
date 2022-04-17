import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';

function Details({ route, navigation }) {
    let jogo = route.params['jogo']
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
                <View style={styles.nomeJogo}>
                    <Text style={styles.text3}>{jogo.name}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.imgDetails} source={jogo.image} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={styles.money}>
                        <Text style={styles.text3}>{jogo.value}</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.btCarrinho}>
                            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Audiowide_400Regular' }}>Adicionar ao carrinho</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default Details;
