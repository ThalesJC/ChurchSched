import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-w-full py-4 text-zinc-100 bg-blue-500 flex place-content-around border-b-4 border-blue-900 shadow-sm">
      <div className=""><p>"Logo"</p></div>
      <div className="space-x-6 pr-6">
        <span onClick={() => setIsOpen(true)}>"nome"</span>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}
          className="">
          <div className="min-h-fit p-10 w-4/6 p-4 rounded-2xl fixed inset-0 flex items-center justify-center bg-blue-600">
            <Dialog.Panel>
              <Dialog.Title>Editar meu perfil</Dialog.Title>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Telefone" />
              <button onClick={() => setIsOpen(false)}>Salvar</button>
              <button onClick={() => setIsOpen(false)}>Cancelar</button>
            </Dialog.Panel>
          </div>
        </Dialog>
        <button>Sair</button>
      </div>
    </div>
  )
}