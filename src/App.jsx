import Header from './components/Header'
import SectionProps from './components/SectionProps'
import Footer from './components/Footer'

import tortalimao from './assets/images/torta-limao.png'
import choco from './assets/images/bolo-chocolate.png'
import redvelvet from './assets/images/Bolo-redvelvet_morangos_encima.png'
import prestigio from './assets/images/prestigio.png'
import amor from './assets/Favorite.svg'
import medalha from './assets/Warranty.svg'
import confeiteira from './assets/images/confeiteira.jpg'

import './App.css'

function App() {
  
  return (
    <main>
        <Header />
        <SectionProps 
          conteudo1={
            <div id='section_div'>
              <h1>Doces que <p id='h1_p'>encantam</p></h1>
              <p>Criamos momentos especiais com bolos, doces e sobremesas artesanais, feitos com ingredientes selecionados e muito carinho.</p>
              <div id='div_but'>
                  <div className='botao' id='botao1'>
                    Ver Produtos →
                  </div>
                  <div className='botao' id='botao2'>
                    Entre em contato
                  </div>
              </div>
              <div id='div_icones'>
                <img src={amor} alt="Ícone de coração" /><p>Feito com amor</p>
                <img src={medalha} alt="Ícone de medalha" /><p>Alta qualidade</p>
              </div>
            </div>
          }
          imagem={redvelvet}

        />
        <SectionProps
         imagem={confeiteira}
        />
        <Footer />
    </main>
  )
}

export default App
