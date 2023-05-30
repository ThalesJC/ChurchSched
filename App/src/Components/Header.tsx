import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-w-full py-4 text-zinc-100 bg-blue-500 flex place-content-around border-b-4 border-blue-900 shadow-sm">
      <div className=""><p>Missas</p></div>
      <div className="space-x-6 pr-6">
        <span onClick={() => setIsOpen(true)}>"nome"</span>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}
          className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5">
            <Dialog.Panel className="w-auto h-auto p-4 rounded-lg flex flex-col justify-center items-center gap-4 bg-blue-600 border text-white">
              <Dialog.Title>Editar meu perfil</Dialog.Title>
              <div>
                <input className="w-full h-8 bg-blue-600 text-sm border-b-2 border-blue-800 shadow-sm" type="text" placeholder="Nome" />
                <input className="w-full h-8 bg-blue-600 text-sm border-b-2 border-blue-800 shadow-sm" type="text" placeholder="Telefone" />
              </div>
              <div className="w-full flex items-center justify-around">
                <button className="bg-green-600 px-4 py-1 rounded-full" onClick={() => setIsOpen(false)}>Salvar</button>
                <button className="bg-red-600 px-4 py-1 rounded-full" onClick={() => setIsOpen(false)}>Cancelar</button>
              </div>
            </Dialog.Panel>
        </Dialog>
        <button>Sair</button>
      </div>
    </div>
  )
}