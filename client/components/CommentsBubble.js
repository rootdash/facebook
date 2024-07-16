import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommentBubble = ({ text, author }) => {
    return (
        <View style={{ minHeight: 100, paddingVertical: 5 }}>
            <View style={{ flexDirection: "row", gap: 20 }}>
                <Image source={require("../../client/assets/Default_pfp.png")} style={{ height: 40, width: 40 }} />
                <View style={{ backgroundColor: "#E3E1D9", width: "70%", borderRadius: 18, paddingHorizontal: 5, justifyContent: "center" }}>
                    <Text style={{ paddingHorizontal: 15, paddingTop: 15, paddingBottom: 10, fontWeight: 'bold' }}>lorem ipsum dolor sit</Text>
                    <Text style={{ paddingHorizontal: 15, paddingBottom: 15 }}>lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</Text>
                </View>
            </View>
        </View>
    );
};

export default CommentBubble;