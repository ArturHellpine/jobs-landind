import React from 'react';
import selection from '../images/selection-on-svgrepo-com.svg'

const FullVacancyModal = ({ visible, setVisible, vacancy }) => {

    return (
        <div className={visible ? 'vacancyModal active' : 'vacancyModal'} onClick={() => setVisible(false)}>
            <div className={visible ? 'vacancyModalContent active' : 'vacancyModalContent'} onClick={e => e.stopPropagation()}>
                <img src={selection} alt="" width={25}/>
                <p>{vacancy.title}</p>
                <p>{vacancy.salary}</p>
                <p>{vacancy.city}</p>
                <button className='button'>Apply</button>
            </div>
        </div>
    );
};

export default FullVacancyModal;