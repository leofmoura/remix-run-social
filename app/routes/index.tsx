import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPosts, Post } from 'services/posts.server';
import { Post as PostComponent } from '~/components/Post';

type LoaderData = {
  posts: Post[];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { posts: await getPosts() };
  return json(data);
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  console.log(posts);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      {posts.map((post) => (
        <PostComponent header={post.title}>{post.body}</PostComponent>
      ))}
    </div>
  );
}
