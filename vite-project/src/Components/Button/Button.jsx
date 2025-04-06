import style from './Button.module.css'

const Button = (props) => {
    const { texto, tipo = "primario", ...outrasProps } = props;
    <button tipo={tipo} {...outrasProps} className={style.Botao}>
        {texto}
    </button>
}

export{ Button };