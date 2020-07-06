import React from 'react';

import './faq.scss';

import TitleTemplate from '../../../../shared/components/TitleTemplate/TitleTemplate';
import Faqs from './Faqs/Faqs';

function Faq() {

    const params = {
        title: 'Частые вопросы',
        description: ''
    }

    const faqs = [
        {
            id: 1,
            question: 'Собираем ли мы какие либо данные о пользователях?',
            answer: 'Коротко - нет. Нам нужна лишь информация о неблагоприятных условиях в виде фотографии, которую вы нам отправляете'
        },
        {
            id: 2,
            question: 'Ответственны ли мы за информацию пользователей?',
            answer: 'Платформа Clean City служит лишь информационным звеном между ответственными инстанциями и жителями нашего города. Ответственность за информацию либо отправленную пользователем мы не несём.'
        },
        {
            id: 3,
            question: 'Как быстро выполняется запрос?',
            answer: 'После получения заявки платформа категоризирует проблему и оповещает вышестоящие инстанции, также для очистки нежелательных условий подключены активисты-экологи, мардикоры, которым важно соблюдать чистоту в вашем городе, районе.'
        }
    ]

    return (
        <div className="Faq">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <TitleTemplate params={params} />
                    </div>

                    <div className="col-lg-8">
                        <div className="faq-accordion-content">
                            <Faqs params={faqs} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;