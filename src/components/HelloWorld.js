import Frase from "./Frase";

export default function HelloWorld() {

    const msg = 'react 2023';

    return (
        <div>
            <Frase />
            <h1>Meu primeiro componente</h1>
            <Frase />
            <Frase desc={msg} />
        </div>
    )
}