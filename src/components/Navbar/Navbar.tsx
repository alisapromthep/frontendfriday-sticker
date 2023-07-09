import './Navbar.scss';
import iconOne from '../../assets/icons/Icon-1.png';
import iconTwo from '../../assets/icons/Icon-2.png';
import iconThree from '../../assets/icons/Icon-3.png';

interface MenuItems {
    name: string;
    img: string;
}

const Navbar = () => {

    const menuItems: MenuItems[]=[
        {
            name: 'save',
            img: iconOne
        },
        {
            name: 'save',
            img: iconTwo
        },
        {
            name: 'save',
            img: iconThree
        },

    ]

    
    return (
        <nav className='nav'>
            <ul className='nav__container'>
                {
                    menuItems.map((item,i)=>(
                        <li key={i} className='nav__item'>
                            <img src={item.img} alt={item.name}/>
                        </li>
                    ))
                }

            </ul>

        </nav>
    )
}

export default Navbar