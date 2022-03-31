import { useQuery, QueryOptions } from 'react-query';
import axios from 'axios';
import { PostComments } from './types';

const fetchPost = async (postId: number): Promise<PostComments[]> => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return data;
};

const usePost = (postId: number) => useQuery(['posts', postId ], () => fetchPost(postId));

export default usePost;