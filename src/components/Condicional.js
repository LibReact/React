import { useState } from "react"

export default function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState() // altera o estado do campo email no submit do form

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email); // Manipulação do dado email antes de enviar. 
    }

    function limparEmail() {
        setUserEmail(); // retorna false pq esta vazio         
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar</button>
                
                {   // verifica se no userEmail existe algum valor, caso sim - concatena com && e a <div>
                    userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}