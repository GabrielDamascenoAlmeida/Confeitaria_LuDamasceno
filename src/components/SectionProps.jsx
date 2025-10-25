import style from './css/SectionProps.module.css'

export default function SectionProps ({conteudo1, imagem, alt}) {
    return (
        <section id={style.section_props}>
            {conteudo1}
            <img src={imagem} alt={alt} />
        </section>
    )
}