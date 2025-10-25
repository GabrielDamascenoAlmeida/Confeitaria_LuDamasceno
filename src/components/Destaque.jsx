import style from './css/Destaque.module.css'

export default function Destaque() {
    return (
        <section id={style.section_destaque}>
            <h1>Produtos mais vendidos</h1>
            <p>Conheça alguns dos nossos produtos mais queridos pelos clientes</p>
            <div id={style.card_produto}>

            </div>
        </section>
    )
}