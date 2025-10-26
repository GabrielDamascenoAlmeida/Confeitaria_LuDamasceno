import style from './css/Destaque.module.css'
import tortalimao from '../assets/images/torta-limao.png'
import choco from '../assets/images/bolo-chocolate.png'
import girassol from '../assets/images/girassois.png'
import prestigio from '../assets/images/prestigio.png'
import CardProps from './CardProps'

export default function Destaque() {
    return (
        <section id={style.section_destaque}>
            <h1>Produtos mais vendidos</h1>
            <p>Conheça alguns dos nossos produtos mais queridos pelos clientes</p>
            <div id={style.card_produto}>
                <CardProps 
                    background={choco}
                    titulo={'Bolo de chocolate Premium'}
                    texto={'Bolo massa de chocolate com recheio e cobertura de brigadeiro gourmet.'}
                    preco={' 130,00'}
                />
                <CardProps 
                    background={prestigio}
                    titulo={'Bolo de Prestígio'}
                    texto={'Bolo com recheio de prestígiom, acompanhado por beijinhos.'}
                    preco={' 125,00'}
                />
                <CardProps 
                    background={girassol}
                    titulo={'Bolos customizáveis'}
                    texto={'São os bolos em que os clientes podem pedir customização, como, personagens, temas e formas.'}
                    preco={' 360,00'}
                />
            </div>

            <div id={style.button_products} title='Em breve'>
                <p>ver todos os produtos →</p>
            </div>
                
        </section>
    )
}