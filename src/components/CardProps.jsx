import style from './css/CardProps.module.css'


export default function CardProps ({background, preco, titulo, texto}) {
    return (
        <div className={style.cards}>
            <div id={style.div_superior} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat:'no-repeat'}}>
                
            </div>
            <div id={style.div_inferior}>
                <h2>{titulo}</h2>
                <p>{texto}</p>
                <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center ',margin:'auto',  marginTop:'50px', width:'85%'}}>
                    <h2 style={{color:'#FFB0CE', marginBottom: '0px', marginTop:'0px' }}>R${preco}</h2>
                    <div id={style.button}>
                        Encomendar
                    </div>
                </div>
                
            </div>
        </div>
    )
}