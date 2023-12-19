import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactFormPage = () => {
    const formRef = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_q5lrsah', 'template_2gwu4tc', formRef.current, 'DZR5pkJsOc_DlCCIQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contact_page'>
            <form onSubmit={sendEmail} ref={formRef} className='contacts_form'>
                <h4 className='contact_form_title'>
                    Please enter your contacts
                </h4>

                <label className='contact_label'>Name</label>
                <input
                    name='user_name'
                    className='input'
                    type="text"
                    placeholder='Full Name'
                    required
                />

                <label className='contact_label'>Email</label>
                <input
                    name='user_email'
                    className='input'
                    type="email"
                    placeholder='E-Email'
                    required
                />

                <label className='contact_label'>Phone Number</label>
                <input
                    name='user_phone'
                    className='input'
                    type="text"
                    placeholder='Phone Number'
                    required
                />

                <label className='contact_label'>What vacancy you interested?</label>
                <input
                    required
                    className='input'
                    name="message"
                    placeholder='Write message...'
                 />
                <button className='submit_contact_btn button'>Send Contacts</button>
            </form>
        </div>
    );
};

export default ContactFormPage;