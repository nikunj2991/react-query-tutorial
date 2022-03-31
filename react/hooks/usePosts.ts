import { useQuery } from 'react-query';
import axios from 'axios';
import { Post } from './types';

const fetchPosts = async (): Promise<Post[]> => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const usePosts = () => useQuery('posts', fetchPosts);

export default usePosts;