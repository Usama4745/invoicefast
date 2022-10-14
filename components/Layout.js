export default function Layout({ children }) {
  return (
    <div>
      <main className="bg-gray-100 h-screen w-screen">
        {children}
      </main>

    </div>
  )
}