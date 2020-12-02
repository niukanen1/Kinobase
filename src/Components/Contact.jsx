import React from 'react'; 


export default class Contact extends React.Component { 

    render () { 
        return ( 
            <div>
                <div className="contact-body">
                    <input placeholder='Ваше имя'/>
                    <input placeholder='Адрес почты'/>
                    <textarea placeholder='Сообщение'/>  
                    <div className='submit-btn'>
                        Отправить
                    </div>                 
                </div>
            </div>
        )
    }
}