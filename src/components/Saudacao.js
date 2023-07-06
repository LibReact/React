/**
 * State Lift: tem componente que altera e tem componente que usa
 */
export default function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`;
    }
    return (
        <>
            {
                nome && 
                <p>{gerarSaudacao(nome)}</p>
            }
        </>
    )
}