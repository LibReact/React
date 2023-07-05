/**
 * Os eventos no react são definidos na própria tag do HTML
 * ex: onClick, onChange e etc;
 */
import Button from "./evento/Button";

                            // destructuring
export default function Evento({ numero }) {

    function meuEvento() {
        console.log(`Opa, fui ativado! ${numero}`);
    }

    return (
        <div>
            <p>Clique para disparar um evento!</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}