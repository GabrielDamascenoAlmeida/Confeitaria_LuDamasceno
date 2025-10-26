import style from './css/CardProps.module.css'


export default function CardProps ({background, preco, titulo, texto}) {
    return (
        <div className={style.cards}>
            <div id={style.div_superior} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat:'no-repeat'}}>
                
            </div>
            <div id={style.div_inferior}>
                <h2 className={style.marrom}>{titulo}</h2>
                <p>{texto}</p>
                <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center ',margin:'auto',  marginTop:'50px', width:'85%'}}>
                    <h2 style={{color:'#FFB0CE', marginBottom: '0px', marginTop:'0px' }} id={style.preco}>R${preco}</h2>
                    <a href="https://wa.me/5511986152515" target='_blank'>
                        <div id={style.button}>
                            Encomendar
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    )
}