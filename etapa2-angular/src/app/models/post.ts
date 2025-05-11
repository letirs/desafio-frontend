export interface Post {
  createdAt?: string;
  id: number;
  title: string;
  body: string;
  image: string;
}

export type PostCriacao = Omit<Post, 'id'>;