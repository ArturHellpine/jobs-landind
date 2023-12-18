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
        e.target.reset()
    }

    return (
        <div className='contact_page'>
            <form onSubmit={sendEmail} ref={formRef} className='contacts_form'>
                <h1>Fill out the application and we will call you!</h1>
                <input name='user_name' className='input' type="text" placeholder='Full Name'/>
                <input name='user_email' className='input' type="email" placeholder='Email'/>
                <input className='input' type="text" placeholder='Phone Number'/>
                <textarea style={{maxWidth: '300px', maxHeight: '100px'}} className='input' name="" id="" cols="30" rows="3" placeholder='What a vacancy you liked?'></textarea>
                <button className='submit_contact_btn button'>Send Contacts</button>
            </form>
        </div>
    );
};

export default ContactFormPage;