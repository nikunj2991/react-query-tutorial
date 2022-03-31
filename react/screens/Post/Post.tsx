import React from 'react';
import { View, ScrollView } from 'react-native';
import usePost from '../../hooks/usePost';
import { PostScreenNavigationProps } from '../../navigation/Main';
import { Text } from '../../components/Text';
import { styles } from './styles';

export const Post = ({ route }: PostScreenNavigationProps) => {
    const { post } = route && route.params;
    const { data: comments, isSuccess, isLoading } = usePost(post.id);

    return (
        <ScrollView>
            <Text text={post.title} style={styles.header} />
            <View style={styles.post}>
                <Text text={post.body} />
            </View>

            {
                isLoading ?
                (
                    <Text text="Loading..." style={{ textAlign: "center" }}/>
                ): null
            }

            {
                isSuccess ? (
                    <React.Fragment>
                        <Text style={styles.commentHeader} text="Comments" />
                        {
                            comments.map((comment) => (
                                <View key={comment.id} style={styles.post}> 
                                    <Text text={comment.body} />
                                    <Text text={comment.email} />
                                </View>
                            ))
                        }
                    </React.Fragment>
                ) : null
            }
        </ScrollView>
    );
};