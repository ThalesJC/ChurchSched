export default function AdminHeader() {

  return (
    <div className="min-w-full py-4 text-zinc-100 bg-blue-500 flex place-content-around border-b-4 border-blue-900 shadow-sm">
      <div className=""><p>Dashboard</p></div>
      <div className="space-x-6 pr-6">
        <span>"nome"</span>
        <button>Sair</button>
      </div>
    </div>
  )
}