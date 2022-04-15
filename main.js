import React from 'react';
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
                        <TouchableOpacity>
                            <AntDesign name="shoppingcart" size={28} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 name="user-circle" size={28} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.recomendados}>
                    <Text style={styles.text}>Recomendados</Text>
                    <TouchableOpacity style={styles.btImg} onPress={() => navigation.navigate('Details')}>
                        <Image style={styles.img1} source={require('./assets/eldenring.jpg')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lancamentos}>
                    <Text style={styles.text}>Lançamentos</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Main;
