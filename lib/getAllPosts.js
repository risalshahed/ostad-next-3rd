export default async function getAllPosts() {
  // const res = await fetch('./blogData.json');
  const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest');

  if(!res.ok) {
    throw new Error('error fetching posts')
  }

  return res.json();
}