import logo from '../assets/images/logo.png'
import location from '../assets/Location.svg'
import phone from '../assets/Phone.svg'
import letter from '../assets/Letter.svg'
import insta from '../assets/instas.svg'
import face from '../assets/Facebook.svg'
import style from './css/Footer.module.css' 

export default function Footer() {
    return (
        <footer>
            <section>
                <div className={style.larguradiv}>
                    <div id={style.minlogo}>
                        <img src={logo} alt="logo confeitaria" />
                        <h2>Confeitaria Lu Damasceno</h2>
                    </div>
                    <p>Criando momentos doces e especiais com ingredientes selecionados e muito amor em cada receita.</p>
                </div>
                <div className={style.fix}>
                    <div className={style.larguradiv} id={style.larguradiv}>
                        <h2>Contato</h2>
                        <div id={style.texto_meio}>
                            <p><img src={location} alt="Ícone de " className={style.minicon}/> Rua das Delícias, 123 - Centro</p>
                            <p><img src={phone} alt="Ícone de " className={style.minicon}/> (11) 98615-2515</p>
                            <p><img src={letter} alt="Ícone de " className={style.minicon}/> lucinalvaalmeida@gmail.com</p>
                        </div>
                    </div>
                        <div className={style.larguradiv}>
                        <h2>Nos siga</h2>
                        <div id={style.sociais}>
                            <div className={style.rede}><img src={insta} alt="Logo instagram" /></div>
                            <div className={style.rede}><img src={face} alt="Logo facebook" /></div>
                        </div>
                        <p>Horário de funcionamento:</p>
                        <p>Seg - Sex: 8h às 18h</p>
                        <p>Sáb - Dom: 8h às 16h</p>
                    </div>
                </div>
                
            </section>
            <br />

            <div id={style.linha}></div>

            <br />

            <p id={style.copyright}>© 2024 Confeitaria Lu Damasceno. Todos os direitos reservados.</p>
        </footer>
    )
}