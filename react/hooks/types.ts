export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
} 

export type PostComments = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}