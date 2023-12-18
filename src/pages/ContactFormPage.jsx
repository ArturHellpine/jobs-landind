import React from 'react';

const ContactFormPage = () => {
    return (
        <div>
            залиште свої контакти, і ми вам зателефонуємо
            <form>
                <input type="text" placeholder='name'/>
                <input type="email" placeholder='email'/>
                <input type="text" placeholder='phone number'/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ContactFormPage;