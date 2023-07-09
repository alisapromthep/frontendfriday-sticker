import './Header.scss';
import {BiSearch} from 'react-icons/bi';

const Header = () => {
    return (
        <header className='header__container'>
            <h1 className='header__name'>sticker maker</h1>
            <form className='searchbar'>
                <button className='searchbar__button'>
                    <BiSearch className='searchbar__icon'/>
                    </button>
                <input
                type='text'
                className='searchbar__input'
                placeholder='Search stickers'>
                </input>
            </form>
        </header>
    )
}

export default Header