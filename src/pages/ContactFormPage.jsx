import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {useNavigate} from "react-router-dom";
import arrowBack from '../images/arrow-back-long-svgrepo-com.svg'
import sendIcon from '../images/send-svgrepo-com.svg'
import contactIcon from '../images/contacts-alt-svgrepo-com.svg'

const ContactFormPage = () => {
    const formRef = useRef()
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_q5lrsah', 'template_2gwu4tc', formRef.current, 'DZR5pkJsOc_DlCCIQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        navigate('/success')
    }

    return (
        <div className='contact_page'>
            <div className='single_div'></div>
            <button className='back_button button' onClick={() => navigate('/home')}>
                <img src={arrowBack} className='arrowBack' alt=""/>
                <span>Назад</span>
            </button>
            <form onSubmit={sendEmail} ref={formRef} className='contacts_form'>
                <h4 className='contact_form_title'>
                    <span>Заполните форму</span>
                    <img src={contactIcon} className='contact_icon' alt=""/>
                </h4>

                <div className='input_item'>
                    <label className='contact_label'>Полное имя</label>
                    <input
                        name='user_name'
                        className='input'
                        type="text"
                        placeholder='Полное имя'
                        required
                    />
                </div>

                <div className='input_item'>
                    <label className='contact_label'>Почта</label>
                    <input
                        name='user_email'
                        className='input'
                        type="email"
                        placeholder='E-mail'
                        required
                    />
                </div>

                <div className='input_item'>
                    <label className='contact_label'>Номер <span className='socials'>(Viber, Telegram, WhatsApp)</span></label>
                    <input
                        name='user_phone'
                        className='input'
                        type="text"
                        placeholder='Мобильный номер'
                        required
                    />
                </div>

                <div className='input_item'>
                    <label className='contact_label'>Какая вакансия вас интересует?</label>
                    <input
                        required
                        className='input'
                        name="message"
                        placeholder='Напишите сообщение..'
                    />
                </div>
                <button className='submit_contact_btn button'>
                    <span>Отправить заявку</span>
                    <img src={sendIcon} className='sendIcon' alt=""/>
                </button>
            </form>
        </div>
    );
};

export default ContactFormPage;