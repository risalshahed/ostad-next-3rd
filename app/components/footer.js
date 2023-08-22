export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      <h2>{year}</h2>
    </footer>
  )
}