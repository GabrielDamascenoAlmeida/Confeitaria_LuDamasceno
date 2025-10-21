import logo from '../assets/images/logo.png'
import insta from '../assets/instas.svg'
import face from '../assets/Facebook.svg'
import style from './css/Footer.module.css' 

export default function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="logo confeitaria" />
                <h2>Confeitaria Lu Damasceno</h2>
                <p>Criando momentos doces e especiais com ingredientes selecionados e muito amor em cada receita.</p>
            </div>
            <div>
                <h2>Contato</h2>
                <p>Rua das Delícias, 123 - Centro</p>
                <p>(11) 98615-2515</p>
                <p>lucinalvaalmeida@gmail.com</p>
            </div>
            <div>
                <h2>Nos siga</h2>
                <div className={style.rede}><img src={insta} alt="Logo instagram" /></div>
                <div className={style.rede}><img src={face} alt="Logo facebook" /></div>
                <p>Horário de funcionamento:</p>
                <p>Seg - Sex: 8h às 18h</p>
                <p>Sáb - Dom: 8h às 16h</p>
            </div>

            <br />

            <div id={style.linha}></div>

            <br />

            <p id={style.copyright}>© 2024 Confeitaria Lu Damasceno. Todos os direitos reservados.</p>
        </footer>
    )
}