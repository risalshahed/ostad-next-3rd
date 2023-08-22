import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';

export default async function Blog() {
  const blogData = await getAllPosts();

  // console.log(blogData);

  return (
    <div className="container mx-auto pt-10 pb-40">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {blogData.map(blog => (
          <div key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <h3 className="text-xl text-blue-800 hover:underline font-bold">
                {blog.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}