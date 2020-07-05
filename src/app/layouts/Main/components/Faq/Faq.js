import React from 'react';

import './faq.scss';

import TitleTemplate from '../../../../shared/components/TitleTemplate/TitleTemplate';
import Faqs from './Faqs/Faqs';

function Faq() {

    const params = {
        title: 'Частые вопросы',
        description: 'Some text...'
    }

    const faqs = [
        {
            id: 1,
            question: 'Вопрос?',
            answer: 'Ответ'
        },
        {
            id: 2,
            question: 'Вопрос?',
            answer: 'Ответ'
        },
        {
            id: 3,
            question: 'Вопрос?',
            answer: 'Ответ'
        },
        {
            id: 4,
            question: 'Вопрос?',
            answer: 'Ответ'
        },
        {
            id: 5,
            question: 'Вопрос?',
            answer: 'Ответ'
        },
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