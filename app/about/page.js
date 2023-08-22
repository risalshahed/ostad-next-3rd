import getAllPosts from '@/lib/getAllPosts';

export default async function About() {
  const blogData = await getAllPosts();

  // console.log(blogData);

  return (
    <div className="container mx-auto pt-10 pb-40">
      <h1 className="text-3xl font-bold mb-6">About</h1>
      <div className="pt-10">
        <h3 className="text-2xl font-bold pb-8">Short Story</h3>

        {blogData.map(blog => (
          <div key={blog.id}>
            <p className='pb-4'>
              {blog.short}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}