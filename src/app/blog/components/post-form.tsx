'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [bannerImg, setBannerImg] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter(); // This hook is now usable here

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Prepare the data for the new post
    const newPost = {
      title,
      content,
      banner_img: bannerImg,
      isVisible,
    };

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      const data = await response.json();
      if (data.success) {
        // Redirect to the same page with a query to refresh the data
        router.refresh(); // Triggers a refresh of the current page
        setTitle('');
        setContent('');
        setBannerImg('');
        setIsVisible(true);
      } else {
        console.error('Error creating post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 w-full max-w-md'>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='px-4 py-2 border border-gray-300 rounded'
        required
      />
      <textarea
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='px-4 py-2 border border-gray-300 rounded'
        rows={4}
        required
      />
      <input
        type='text'
        placeholder='Banner Image URL'
        value={bannerImg}
        onChange={(e) => setBannerImg(e.target.value)}
        className='px-4 py-2 border border-gray-300 rounded'
      />
      <label className='flex items-center gap-2'>
        <input
          type='checkbox'
          checked={isVisible}
          onChange={() => setIsVisible(!isVisible)}
        />
        Visible
      </label>
      <button
        type='submit'
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
        Create Post
      </button>
    </form>
  );
};

export default PostForm;
