import { useState } from "react"

export default function SignupCard() {

    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const handleName = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setName(target.value)
    }
    const handlePhone = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(target.value)
    }

    const handleClick = () => {
        console.log(name, phone)
    }

    return (
            <section className="bg-heaven bg-fixed bg-clip-border bg-no-repeat bg-cover">
                <div className="min-h-screen flex flex-col justify-center items-center ">
                    <div className="flex flex-col space-y-4 bg-white/20 backdrop-blur-md  mx-auto max-w-md py-8 px-10 shadow rounded-lg">
                        <h1 className="self-center">Cadastre-se</h1>
                            <input id="input-name" className="bg-white/10 backdrop-blur-sm" type="text" placeholder="Nome" value={name} onChange={handleName} />
                            <input id="input-phone" className="bg-white/10 backdrop-blur-sm" type="text" placeholder="Telefone" value={phone} onChange={handlePhone} />
                        <button className="" onClick={handleClick}>Salvar</button>
                        <button>Já possuo uma conta</button>
                    </div>
                </div>
            </section>
    )
}