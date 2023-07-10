import './Body.scss';

interface BodyProps {
    title: string;
    titleClass?: string;
    logo?: string;
    logoClass?: string;

}



const Body = ({title,logo,logoClass}: BodyProps) => {
    return (
        <div className='body'>
            <img src={logo} className={logoClass}/>
            <h1 className='body__title'>{title}</h1>
        </div>
    )
}

export default Body