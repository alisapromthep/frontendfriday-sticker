import './Section.scss';

interface ContentData {
    name:string;
    img:string;
}

interface SectionProps {
    title: string;
    titleClass?: string;
    logo?: string;
    logoClass?: string;
    bodyClass?: string;
    content: ContentData[];
    imgClass: string;
    contentClass?:string;
}



const Section = ({title,logo,logoClass,bodyClass, content,imgClass,contentClass}: SectionProps) => {
    return (
        <section className={`section ${bodyClass || ""}`}>
            <div className='section__top'>
                <img src={logo} className={logoClass}/>
                <h1 className='section__title'>{title}</h1>
            </div>
            <div className={`section__content ${contentClass  || ""}`}>
                {
                    content.map((image,i)=>(
                        <img key={i} src={image.img} alt={image.name}
                        className={imgClass}
                        />
                    ))
                }

            </div>

        </section>
    )
}

export default Section;