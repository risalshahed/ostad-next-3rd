export default async function getSinglePost(id) {
  const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

  if(!res.ok) {
    throw new Error('error fetching post')
  }

  return res.json();
}