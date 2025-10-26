import style from './css/Header.module.css'


export default function Header() {
    return (
        <header>
            <div id={style.esquerda}>
                <a href="#"><div id={style.logo_div}></div></a>
                <h1>Confeitaria Lu Damasceno</h1>
            </div>
            <nav>
                <a href="#">Início</a>
                <a href="https://wa.me/5511986152515" target='_blank'>Pedido</a>
                <a href="#" title='Em breve'>Produtos</a>
            </nav>
        </header>
    )
}