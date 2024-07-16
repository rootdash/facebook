import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import * as SecureStore from "expo-secure-store";

function ProfileScreen({ navigation }) {
    const [view, setView] = useState('Following');


    const following = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7', 'User 8', 'User 9', 'User 10'];
    const followers = ['User A', 'User B', 'User C'];

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ height: 100, paddingHorizontal: 18, paddingTop: 30, width: "100%", gap: 28, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", gap: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>Profile</Text>
                </View>
                <TouchableOpacity onPress={async () => {
                    await SecureStore.deleteItemAsync("access_token");
                    navigation.navigate("Login");
                }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", padding: 12, color: "#2E89FF" }}>Logout</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ height: 100, width: "100%", borderBottomColor: "lightgray", borderBottomWidth: 1 }}>
                    <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 18, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <TouchableOpacity>
                                <Image source={require("../../assets/Default_pfp.png")} style={{ height: 80, width: 80 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: "column", gap: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: "600" }}>lorem ipsum dolor sit</Text>
                                <Text style={{ fontSize: 16, fontWeight: "400" }}>@lorem</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                    <TouchableOpacity onPress={() => setView('Following')} style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>120</Text>
                        <Text style={{ fontSize: 16, fontWeight: "400" }}>Following</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setView('Followers')} style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>200</Text>
                        <Text style={{ fontSize: 16, fontWeight: "400" }}>Followers</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center', gap: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>{view}</Text>
                    {view === 'Following' ? (
                        following.map((user, index) => (
                            <View style={{ width: "100%", height: 60, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                                    <Image source={require("../../assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                                    <Text>{user}</Text>
                                </View>
                            </View>
                        ))
                    ) : (
                        followers.map((user, index) => (
                            <View style={{ width: "100%", height: 60, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                                    <Image source={require("../../assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                                    <Text>{user}</Text>
                                </View>
                            </View>
                        ))
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

export default ProfileScreen;