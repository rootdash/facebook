import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/Register/RegisterScreen';
import HomeScreen from './screens/Home/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import PostScreen from './screens/Post/PostScreen';
import PostViewScreen from './screens/Post/PostViewScreen';
import CommentsBottomSheet from './components/CommentsBottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ProfileScreen from './screens/Profile/ProfileScreen';
import { ApolloProvider } from '@apollo/client';
import client from './config/apollo';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false, animation: "slide_from_bottom" }} />
            <Stack.Screen name="Post" component={PostScreen} options={{ headerShown: false, animation: "slide_from_bottom" }} />
            <Stack.Screen name="PostView" component={PostViewScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Comments" component={CommentsBottomSheet} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </ApolloProvider>
  );
}

export default App;

