import { NextRequest, NextResponse } from 'next/server';
import { addDoc, collection, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../../../../firebase.config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  try {
    const postsSnapshot = await getDocs(collection(db, 'posts'));

    const posts = postsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching posts' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, banner_img, isVisible } = await req.json();

    // Validate input data
    if (!title || !content || !banner_img) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Add a new post to the Firestore 'posts' collection
    const newPost = {
      title,
      content,
      banner_img,
      date: Timestamp.now(),
      isVisible: isVisible ?? true, // default isVisible to true if not provided
    };

    // Add document to Firestore
    const postRef = await addDoc(collection(db, 'posts'), newPost);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Post created successfully',
        postId: postRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { success: false, message: 'Error creating post' },
      { status: 500 }
    );
  }
}
