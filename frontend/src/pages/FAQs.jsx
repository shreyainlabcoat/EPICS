//Version 2
import '../index.css'
import { Navbar } from '../components/Navbar';
import { useState } from 'react';

function FAQs(){
    const [selected,setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <>
        <Navbar/>
        <h2 className='faq-title'>Frequently Asked Questions (FAQs)</h2>
        <div className='faq-wrapper'>
        <div className='accordian'>
            {data.map((item,i) => (
                <div className='item'>
                    <div className='title' onClick={()=>toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected===i ? '-':'+'}</span>
                    </div>
                    <div className={selected===i ? 'content show':'content'}>{item.answer}</div>
                </div>
            )           
            
            )}

            </div>
        </div>
        </>


    )
    }


const data = [
 
    {
        question: 'What services does Saajha offer?',
        answer: 
        'Search and explore a comprehensive directory of NGOs, Easily apply for volunteering opportunities at various NGOs, Book appointments with counsellors and view medical records (securely).'

    },
    {
        question: 'How do I apply to volunteer at an NGO?',
        answer: 
        'Sign-up as a Volunteer on our portal, explore NGOs and causes that interest you and directly apply with a click of a button'

    },
    {
        question: 'How do I book an appointment with a counsellor?',
        answer: 
        'Once you have been registered by a counsellor, you can book appointments directly through the Saajha portal after logging in to your account.'

    },
    {
        question: 'Is my information confidential on Saajha?',
        answer: 
        'Saajha prioritizes data security. Your information is protected according to strict privacy policies.'

    },
    {
        question: 'How do I register my NGO on Saajha?',
        answer: 
        'Contact us via our form and we will get in touch with you to register your NGO.'

    },
    {
        question: 'How can Saajha help my NGO recruit volunteers?',
        answer: 
        'Saajha showcases your NGO to a wide pool of potential volunteers, making it easier to attract qualified individuals.'

    },
    {
        question: 'Can I manage volunteer applications through Saajha?',
        answer: 
        'Saajha simplifies volunteer application management. You can review applications and connect with potential volunteers directly through the portal.'

    }

]

export default FAQs