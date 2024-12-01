// This function is executed on the server side to fetch posts
export type Post = {
  id: string;
  title: string;
  content: string;
  banner_img: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  isVisible: boolean;
};

export type Posts = Post[];

export async function fetchPosts() {
  let posts: Posts = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
      {
        method: 'GET',
        credentials: 'include',
      }
    );

    const data = await response.json();

    if (data) {
      posts = data;
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return posts;
}
