import React from 'react';
import { View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../client/styles/CommonStyles';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import CommentBubble from './CommentsBubble';


const CommentsBottomSheet = ({ bottomSheetRef, currentIndex, handleCloseComments, navigation }) => {
    return (
        currentIndex !== -1 && (
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'flex-end',
            }}>
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={['100%']}
                    index={currentIndex}
                    onChange={(index) => {
                        if (index === -1) handleCloseComments();
                    }}
                    enablePanDownToClose={true}
                >
                    <View style={{ flex: 1 }}>
                        <BottomSheetView style={{ flex: 1, padding: 10 }}>
                            <ScrollView>
                                <CommentBubble />
                                <CommentBubble />
                                <CommentBubble />
                                <CommentBubble />
                            </ScrollView>
                        </BottomSheetView>
                    </View>
                    <View style={{ bottom: 0, left: 0, right: 0, height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 60, paddingHorizontal: 18, width: "100%", gap: 28, alignItems: "center", flexDirection: "row" }} >
                            <TextInput style={styles.search} placeholder="Write a comment..." returnKeyType="input" />
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="send" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </BottomSheet>
            </View>
        )
    );
};

export default CommentsBottomSheet;