import React from 'react';
import { View, FlatList, TouchableOpacity, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { HomeScreenNavigationProps } from '../../navigation/Main';
import usePosts from '../../hooks/usePosts';
import { Post } from '../../hooks/types';
import { Text } from '../../components/Text';
import { styles } from './styles'

export const Posts = ({ navigation }: HomeScreenNavigationProps) => {
    const { data, isLoading, isSuccess } = usePosts();

    const renderItem: ListRenderItem<Post> = ({ item }: ListRenderItemInfo<Post>) => (
        <TouchableOpacity
            onPress={() => navigation.push('Post', { post: item})}
            style={styles.post}
        >
            <View style={styles.item}>
                <Text text={item.title} style={styles.postTitle}/>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {
                isLoading ? (
                    <React.Fragment>
                        <Text text='Loading...'/>
                    </React.Fragment>
                ) : null
            }

            {
                isSuccess ? (
                    <React.Fragment>
                        <Text text='All Posts' style={styles.header}/>
                        <FlatList 
                            data={data}
                            style={styles.wrapper}
                            keyExtractor={(item: Post) => `${item.id}`}   
                            renderItem={renderItem}
                        />
                    </React.Fragment>
                ) : null
            }
        </View>
    )
}