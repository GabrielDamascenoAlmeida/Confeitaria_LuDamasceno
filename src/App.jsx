import Header from './components/Header'
import Destaque from './components/Destaque'
import SectionProps from './components/SectionProps'
import Avaliacao from './components/Avaliacao'
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
                  <div className='botao' id='botao1' title='Em breve'>
                    Ver Produtos →
                  </div>
                  <a href="https://wa.me/5511986152515" target='_blank'><div className='botao' id='botao2'>
                    Entre em contato
                  </div></a>
              </div>
              <div id='div_icones'>
                <img src={amor} alt="Ícone de coração" /><p>Feito com amor</p>
                <img src={medalha} alt="Ícone de medalha" /><p>Alta qualidade</p>
              </div>
            </div>
          }
          imagem={redvelvet}
        />
        <Destaque />
        <SectionProps
         conteudo1={
            <div id='section_sobre'>
                <h1>Nossa história</h1>
                <p>A Confeitaria da Lucinalva Damasceno nasceu do sonho de criar doces únicos e especiais. Cada receita é desenvolvida com carinho e ingredientes selecionados, garantindo sabores inesquecíveis.</p>
                <br />
                <p>Nossa paixão pela confeitaria se reflete em cada detalhe, desde a escolha dos ingredientes até a apresentação final. Acreditamos que cada doce tem o poder de criar momentos especiais e memórias afetivas.</p>
            </div>
         }
         imagem={confeiteira}
        />
        <Avaliacao />
        <Footer />
    </main>
  )
}

export default App
