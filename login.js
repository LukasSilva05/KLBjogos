import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import styles from "./style"

function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.imagem} source={require('./assets/logoKLB.png')} />
            </View>
            <View style={styles.blocoLogin}>
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Email"
                        placeholderTextColor="white"
                    />

                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Senha"
                        placeholderTextColor="white"
                        secureTextEntry
                    />
                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.submitButtonText}> ENTRAR </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textEsqueceu}>Esqueceu sua senha?</Text>
                </View>
            </View>
        </View>
    );
}

export default Login