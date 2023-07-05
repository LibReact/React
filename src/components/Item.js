import PropTypes from 'prop-types';

export default function Item({ marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

// Definindo o tipo dos valores das propriedades do componente
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

// Definindo valores default nas propriedades do componente
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}