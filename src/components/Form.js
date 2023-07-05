/**
 * Quando o form for submetido/enviado ele vai disparar o evento cadastrarUsuario.
 * 
 */
export default function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log('Cadastrou Usuário');
    }

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar" />
                </div>
            </form>
        </div>
    )
}