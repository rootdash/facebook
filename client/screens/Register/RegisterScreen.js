import { Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { styles } from '../../styles/CommonStyles';

function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.upperText}>English (US)</Text>
            <Image source={require("../../assets/Facebook_f_logo_(2019).png")} style={styles.logoR} />
            <View style={styles.inputViewR}>
                <View style={styles.inputRow}>
                    <TextInput style={styles.inputName} placeholder="Name" />
                    <TextInput style={styles.inputUserName} placeholder="Username" />
                </View>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry />
                <TouchableHighlight onPress={() => navigation.navigate('Login')} style={styles.loginBtn}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableHighlight>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.optionText}>Login Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterScreen;