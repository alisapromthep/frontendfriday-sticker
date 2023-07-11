import './Section.scss';

interface ContentData {
    name:string;
    img:string;
    num?:number;
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
    icon?:string;
}



const Section = ({title,logo,logoClass,bodyClass, content,imgClass,contentClass,icon}: SectionProps) => {
    return (
        <section className={`section ${bodyClass || ""}`}>
            <div className='section__top'>
                <img src={logo} className={logoClass}/>
                <h1 className='section__title'>{title}</h1>
            </div>
            <div className={`section__content ${contentClass  || ""}`}>
                {
                    content.map((image,i)=>{
                        return (
                            <div key={i}>
                                <img src={image.img} alt={image.name}
                                className={imgClass}
                                />
                                {
                                    icon && 
                                    <div className='section__save-num'>
                                        <img src={icon} alt='save icon'/>
                                        <p className='section__num'>{image.num}</p>
                                    </div>
                                }
                            </div>
                        )
                        })
                }

            </div>

        </section>
    )
}

export default Section;