import { useState } from "react"

export default function LoginCard() {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const handleName = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setName(target.value)
    }
    const handlePhone = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(target.value)
    }
    const handleClick = () => {
        console.log(name, phone)
        setName('');
        setPhone('');
    }
    
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Nome" value={name} onChange={ handleName } />
            <input type="text" placeholder="Telefone" value={phone} onChange={ handlePhone } />
            <button onClick={ handleClick }>Entrar</button>
            <button>Cadastre-se</button>
        </div>
    )
}