import style from './css/CardAvaliacao.module.css'
import star from '../assets/Star.svg'

export default function CardAvaliacao ({texto}) {
    return (
        <div id={style.card_coment}>
            <div id={style.stars_div}>
                <img src={star} alt="icone de estrela" id={style.stars}/>
                <img src={star} alt="icone de estrela" id={style.stars}/>
                <img src={star} alt="icone de estrela" id={style.stars}/>
                <img src={star} alt="icone de estrela" id={style.stars}/>
                <img src={star} alt="icone de estrela" id={style.stars}/>
            </div>
            <p>{texto}</p>
        </div>
    )
}