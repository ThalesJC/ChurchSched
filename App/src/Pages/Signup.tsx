import { useState } from "react"

export default function Signup() {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    return (
        <div>
            <h1>Cadastre-se</h1>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Telefone" />
            <button>Salvar</button>
            <button>Já tenho uma conta</button>
        </div>
    )
}