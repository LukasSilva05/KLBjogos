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

function Carrinho({ navigation }) {
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
                    <View style={styles.user}>
                        <TouchableOpacity >
                            <FontAwesome5 name="user-circle" size={28} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Carrinho;
