// styles é um objeto com as classes css definidas no arquivo importado
import styles from './Frase.module.css'

export default function Frase(props) {
    console.log(styles);
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente {props.desc} com uma frase!</p>
        </div>
    )
}