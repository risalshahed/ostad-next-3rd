import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';

export default async function Home() {
  const blogData = await getAllPosts();

  // console.log(blogData);

  return (
    <div className="container mx-auto pt-10 pb-40">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
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

      <div className="pt-10">
        <h3 className="text-2xl font-bold pb-5">Blog Creation Date</h3>

        {blogData.map(blog => (
          <div key={blog.id}>
            <h4 className="text-lg font-semibold">
              {blog.created_at}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}