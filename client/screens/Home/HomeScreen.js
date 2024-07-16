import React, { useRef, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { styles } from '../../styles/CommonStyles';
import PostCard from '../../components/PostCard';
import CommentsBottomSheet from '../../components/CommentsBottomSheet';

import { useQuery, gql } from '@apollo/client';
const GET_POSTS = gql`
query GetAllPosts {
  getAllPosts {
    _id
    content
    tags
    imgUrl
    authorId
    comments {
      content
      username
      createdAt
      updatedAt
    }
    likes {
      username
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
    userDetails {
      _id
      name
      username
      email
    }
  }
}
`

function HomeScreen({ navigation }) {

    const [posts, setPosts] = useState([]);
    const { loading, error, data } = useQuery(GET_POSTS);

    const bottomSheetRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const handleOpenComments = () => {
        setCurrentIndex(0);
    };

    const handleCloseComments = () => {
        setCurrentIndex(-1);
    };

    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "white", height: 100, paddingHorizontal: 18, paddingTop: 30, width: "100%", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }} >
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#2E89FF",
                        textAlign: "left"
                    }}>facebook</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Search')
                    }} ><Octicons name="search" size={28} color="black" /></TouchableOpacity>
                </View>
                <View style={{ flex: 1, width: "100%" }}>
                    <ScrollView scrollEnabled={true}>
                        <View style={{ height: 80, width: "100 %" }} >
                            <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 18, flexDirection: "row", backgroundColor: "white" }}>
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 20 }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} >
                                        <Image source={require("../../assets/Default_pfp.png")} style={{ height: 40, width: 40 }} />
                                    </TouchableOpacity>
                                    <TouchableWithoutFeedback onPress={() => {
                                        navigation.navigate('Post')
                                    }}>
                                        <View style={styles.post}>
                                            <Text style={{ color: "grey" }}>What's on your mind?</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flex: 1, width: "100 %", gap: 10 }} >
                            <PostCard navigation={navigation} onCommentPress={handleOpenComments} />
                            <PostCard navigation={navigation} onCommentPress={handleOpenComments} />
                            <PostCard navigation={navigation} onCommentPress={handleOpenComments} />
                            <PostCard navigation={navigation} onCommentPress={handleOpenComments} />
                        </View>
                    </ScrollView>
                </View>

            </View>
            <CommentsBottomSheet
                bottomSheetRef={bottomSheetRef}
                currentIndex={currentIndex}
                handleCloseComments={handleCloseComments}
                navigation={navigation}
            />
        </View >
    );
}

export default HomeScreen;