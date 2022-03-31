import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { Post as PostType } from '../hooks/types';
import { Posts } from '../screens/Posts/Posts';
import { Post } from '../screens/Post/Post';

export type RootStackParamList = {
    Home: undefined,
    Post: { post: PostType }
}

export type HomeScreenNavigationProps = StackScreenProps<RootStackParamList, 'Home'>;
export type PostScreenNavigationProps = StackScreenProps<RootStackParamList, 'Post'>;

const MainStack = createStackNavigator<RootStackParamList>();

export const Main = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Posts} />
        <MainStack.Screen name="Post" component={Post} />
    </MainStack.Navigator>
);
