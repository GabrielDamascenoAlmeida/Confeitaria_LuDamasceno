import style from './css/Avaliacao.module.css'
import CardAvaliacao from './CardAvaliacao'


export default function Avaliacao () {
    return (
        <section id={style.section_avali}>
            <h1>O que nossos clientes dizem?</h1>
            <p>Conheça alguns dos nossos produtos mais queridos pelos clientes</p>
            <div id={style.div_coments}>
                <CardAvaliacao 
                    texto={'"Os bolos da Lu são simplesmente perfeitos! Sabor incrível e apresentação impecável."'}
                />
                <CardAvaliacao 
                    texto={'"Encomendei um bolo para aniversário e todos os convidados elogiaram. Recomendo!"'}
                />
                <CardAvaliacao 
                    texto={'"Qualidade excepcional e atendimento personalizado. Minha confeitaria favorita!"'}
                />
            </div>
        </section>
    )
}