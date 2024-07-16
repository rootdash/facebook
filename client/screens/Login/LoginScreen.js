import { Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { gql, useMutation } from "@apollo/client";
import * as React from 'react';
import { styles } from '../../styles/CommonStyles';
import * as SecureStore from "expo-secure-store";

function LoginScreen({ navigation }) {
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const LOGIN = gql`
mutation LoginUser($username: String, $password: String) {
  loginUser(username: $username, password: $password) {
    access_token
  }
}
  `;

    const [login, { loading }] = useMutation(LOGIN);

    const handleSubmit = async () => {
        try {
            const result = await login({ variables: { username, password } });
            console.log(result);
            await SecureStore.setItemAsync(
                "access_token",
                result.data.loginUser.access_token
            );
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert(error.message);
            console.log(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.upperText}>English (US)</Text>
            <Image source={require("../../assets/Facebook_f_logo_(2019).png")} style={styles.logo} />
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Username" onChangeText={setUserName}
                    value={username} />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword}
                    value={password} />
                <TouchableHighlight onPress={handleSubmit} style={styles.loginBtn}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableHighlight>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.optionText}>Register Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;