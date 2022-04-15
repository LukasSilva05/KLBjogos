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

function Details({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.topBar}>
                    <View style={styles.menuBar}>
                        <TouchableOpacity>
                            <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.navigate('Main')} />
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
            </ScrollView>
        </SafeAreaView>
    );
}

export default Details;
