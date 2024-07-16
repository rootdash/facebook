import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../../client/styles/CommonStyles';
function SearchScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ height: 100, paddingHorizontal: 18, paddingTop: 30, width: "100%", gap: 28, alignItems: "center", flexDirection: "row" }} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <TextInput style={styles.search} placeholder="Search" returnKeyType="search" />
            </View>
            <ScrollView>
                <View style={{ flex: 1, padding: 20, gap: 20 }}>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                    <View style={{ height: 60, borderRadius: 20, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'lightgrey', backgroundColor: "white", shadowColor: "#2E89FF", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                            <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text>lorem ipsum dolor sit</Text>
                        </View>
                        <Text style={{ color: "#2E89FF" }}>Follow</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SearchScreen;