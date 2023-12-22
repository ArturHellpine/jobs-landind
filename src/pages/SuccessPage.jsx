import React from 'react';
import {useNavigate} from "react-router-dom";
import {Result} from "antd";
import selectIcon from '../images/select-svgrepo-com.svg'

const SuccessPage = () => {
    const navigate = useNavigate()

    return (
        <div className='success_page'>
            <Result status={"success"} style={{marginBottom: '-50px'}} />
            <h2 className='success_text'>Заявка отправлена! <br/> Мы ответим вам в течение дня</h2>
            <button className='success_btn button' onClick={() => navigate('/home')}>
                <span>Закрыть</span>
                <img src={selectIcon} className='selectIcon' alt=""/>
            </button>
        </div>
    );
};

export default SuccessPage;