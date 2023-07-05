/**
 * Quando o form for submetido/enviado ele vai disparar o evento cadastrarUsuario.
 * 
 */
import { useState } from "react";

export default function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log('Cadastrou Usuário');
        console.log(`Usuáro ${name} foi cadastrando com a senha: ${password}`)
    }

    // nome do campo, e o que será alterado
    const [name, setName] = useState('Bruno') // 'Bruno' é um valor padrão definido no estado inicial do componente
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}