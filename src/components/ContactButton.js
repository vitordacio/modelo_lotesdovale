import styles from './ContactButton.module.css'



const ContactButton = ({ item }) => {

    const handleModal = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const closeBtn = document.createElement('div')
        closeBtn.classList.add('closeBtn')
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()

            return root.removeChild(container)
        })


        const interest = document.createElement('h2')
        interest.textContent = 'Interessado no'
        const interestName = document.createElement('span')
        interestName.textContent = `${item.name} ?`
        interest.appendChild(interestName)

        const text = document.createElement('p')
        text.textContent = 'Para continuar é muito simples!'

        const text2 = document.createElement('p')
        text2.textContent = 'Clique no botão abaixo e fale diretamente com o corretor.'

        const wpp = document.createElement('a')
        wpp.href = `http://wa.me/5599999999999?text=Olá!+Tenho+interesse+no+${item.name}.`
        wpp.target = '_blank'
        wpp.classList.add('modalWpp')
        wpp.textContent = 'WhatsApp'

        const more = document.createElement('p')
        more.classList.add('more')
        more.textContent = 'Ou se preferir, consulte nossos contatos.'

        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.append(closeBtn, interest, text, text2, wpp, more)

        const container = document.createElement('div')
        container.classList.add('container')
        container.appendChild(modal)

        container.addEventListener('click', (e) => {
            if (e.target.className === 'container') {
                return root.removeChild(container)
            }
        })

        const root = document.querySelector('#root')
        root.appendChild(container)
    }

    return (
        <button className={styles.btnContact} onClick={handleModal}>Tenho Interesse</button>
    )
}

export default ContactButton