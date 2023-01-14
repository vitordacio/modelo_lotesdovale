import styles from './Footer.module.css'

import { BsTelephone } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContacts}>
                <h3>Contatos:</h3>
                <span><BsTelephone /> (99) 99999-9999</span>
                <a href='http://wa.me/5599999999999' target={`_blank`}><ImWhatsapp /> WhatsApp</a>
                <a href='https://www.instagram.com' target={`_blank`}><BsInstagram /> Instagram</a>
            </div>
            <span>@Copyrigth 2023 - Todos os direitos reservados a Lotes do Vale</span>
        </footer>
    )
}

export default Footer