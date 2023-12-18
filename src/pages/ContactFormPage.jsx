import React from 'react';

const ContactFormPage = () => {
    return (
        <div className='contact_page'>
            <form className='contacts_form'>
                <h1>Fill out the application and we will call you!</h1>
                <input className='input' type="text" placeholder='Full Name'/>
                <input className='input' type="email" placeholder='Email'/>
                <input className='input' type="text" placeholder='Phone Number'/>
                <textarea className='input' name="" id="" cols="50" rows="3" placeholder='What a vacancy you liked?'></textarea>
                <button className='submit_contact_btn button'>Send Contacts</button>
            </form>
        </div>
    );
};

export default ContactFormPage;