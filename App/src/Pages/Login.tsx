import { useState } from "react"

export default function Login() {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Telefone" />
            <button>Entrar</button>
            <button>Cadastre-se</button>
        </div>
    )
}