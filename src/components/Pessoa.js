/**
 * Ao inves de colocar props nos () da função e em cada elemento colocar:
 *  props.foto, 
 *  props.nome, 
 *  props.idade ...etc;  
 * faz um destructuring nos () da função e usa só o nome da propriedade. 
 */
export default function Pessoa({nome, idade, profissao, foto}) {
    return <div>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
    </div>
}