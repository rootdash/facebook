import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, Dimensions } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CommentBubble from '../../components/CommentsBubble';

const screenHeight = Dimensions.get('window').height;
const remainingHeight = screenHeight - 555;

function PostViewScreen() {
    const commentInputRef = useRef(null);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ paddingTop: 40 }}>
                    <View style={styles.header}>
                        <View style={styles.row}>
                            <View style={{ flex: 1, paddingHorizontal: 18, flexDirection: "row", alignItems: "center", gap: 20 }}>
                                <Image source={require("../../assets/Default_pfp.png")} style={{ height: 40, width: 40, borderRadius: 20 }} />
                                <Text style={styles.user}>lorem ipsum dolor sit</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.9}>
                        <Text style={styles.post}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed mi vulputate, pretium justo nec, placerat ipsum. Donec rhoncus convallis massa, eu aliquet orci blandit vel.
                            Curabitur enim libero, aliquet in fermentum ac, porttitor et enim.
                        </Text>
                        <Image style={styles.photo} source={require('../../assets/gratisography-funflower.jpg')} />
                    </TouchableOpacity>
                    <View style={styles.footer}>
                        <View style={styles.footerCount}>
                            <Text style={styles.textCount}>88 likes</Text>
                            <Text style={styles.textCount}>2k comments</Text>
                        </View>
                        <View style={styles.footerMenu}>
                            <TouchableOpacity style={styles.button}>
                                <View style={styles.icon}>
                                    <AntDesign name='like2' size={20} color='#424040' />
                                </View>
                                <Text style={styles.text}>Like</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => commentInputRef.current.focus()}>
                                <View style={styles.icon}>
                                    <MaterialCommunityIcons name='comment-outline' size={20} color='#424040' />
                                </View>
                                <Text style={styles.text}>Comment</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <View style={styles.icon}>
                                    <MaterialCommunityIcons name='share-outline' size={20} color='#424040' />
                                </View>
                                <Text style={styles.text}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ minHeight: remainingHeight }}>
                    <View style={{ flex: 1, padding: 10 }}>
                        <CommentBubble />
                        <CommentBubble />
                        <CommentBubble />
                    </View>
                    <View style={{ bottom: 0, left: 0, right: 0, height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 60, paddingHorizontal: 18, width: "100%", gap: 28, alignItems: "center", flexDirection: "row" }} >
                            <TextInput ref={commentInputRef} style={styles.search} placeholder="Write a comment..." returnKeyType="input" />
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="send" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    user: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#222121',
    },
    post: {
        fontSize: 12,
        color: '#222121',
        lineHeight: 16,
        padding: 11,
    },
    photo: {
        marginTop: 9,
        width: '100%',
        height: 300,
    },
    footer: {
        padding: 11,
    },
    footerCount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 9,
    },
    textCount: {
        fontSize: 11,
        color: '#424040',
    },
    footerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 9,
    },
    button: {
        flexDirection: 'row',
    },
    icon: {
        marginRight: 6,
    },
    text: {
        fontSize: 12,
        color: '#424040',
    },
    bottomDivider: {
        width: '100%',
        height: 9,
        background: '#f0f2f5',
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
});


export default PostViewScreen;