import styles from './Header.module.css'

import { Link } from 'react-router-dom'

import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';

const Header = () => {
    return (
        <nav>
            <Link to='/'><AiOutlineCodeSandbox /></Link>
            <a href='http://wa.me/5599999999999' target={`_blank`} className={styles.wpp}>WhatsApp <ImWhatsapp /></a>
        </nav>
    )

}

export default Header