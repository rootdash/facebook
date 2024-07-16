import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 20,
        paddingTop: 80
    },
    logo: {
        height: 50, width: 50, marginBottom: 80
    },
    logoR: {
        height: 50, width: 50, marginBottom: 40
    },
    inputView: {
        width: "100%", gap: 15
    },
    inputViewR: {
        width: "100%", gap: 15,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputName: {
        width: "48%",
        height: 50, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 15, backgroundColor: "white"
    },
    inputUserName: {
        width: "48%",
        height: 50, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 15, backgroundColor: "white"
    },
    input: {
        width: "100%", height: 55, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 15, backgroundColor: "white"
    },
    inputName: {
        width: "50%", height: 55, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 15, backgroundColor: "white"
    },
    inputUserName: {
        width: "50%", height: 55, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 15, backgroundColor: "white"
    },
    loginBtn: {
        backgroundColor: "#2E89FF", borderRadius: 20, height: 50, justifyContent: "center"
    },
    loginText: {
        color: "white", textAlign: "center", fontSize: 16
    },
    optionText: {
        textAlign: "right", marginTop: 14, paddingRight: 10, color: "#2E89FF"
    },
    search: {
        height: 40,
        width: "80%",
        borderRadius: 30,
        backgroundColor: "white",
        borderColor: 'lightgray',
        borderWidth: 1,
        paddingHorizontal: 20,
    },
    post: {
        height: 40,
        width: "80%",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: "white",
        borderColor: 'lightgray',
        borderWidth: 1,
        paddingHorizontal: 20,
    },
});