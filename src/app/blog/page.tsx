import { fetchPosts } from '../../lib/fetchPosts';
import PostForm from './components/post-form';

export default async function Blog() {
  const posts = await fetchPosts();

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <p className='text-2xl font-semibold'>Blog Page</p>

        {/* Form for creating new post */}
        <PostForm />

        {/* Display posts */}
        <div className='w-full max-w-md mt-8'>
          <h2 className='text-xl font-semibold'>Posts</h2>
          <ul className='mt-4'>
            {posts?.map((post) => (
              <li
                key={post.id}
                className='mb-4 p-4 border border-gray-200 rounded'>
                <h3 className='font-semibold'>{post.title}</h3>
                {/* <img
                  src={post.banner_img}
                  alt={post.title}
                  className='w-full h-64 object-cover mt-4'
                /> */}
                <p className='mt-2'>{post.content}</p>
                <p className='mt-2 text-sm text-gray-500'>
                  {new Date(post.date.seconds * 1000).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
