import React from 'react';

import './main.scss';

import Navbar from '../../shared/components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import PartnersCarousel from './components/PartnersCarousel/PartnersCarousel';
import CustomerExperience from './components/CustomerExperience/CustomerExperience';
import NeedZotli from './components/NeedZotli/NeedZotli';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Faq from './components/Faq/Faq';
import Footer from '../../shared/components/Footer/Footer';

import undp_logo from '../../shared/assets/images/undp_logo.svg';

import green_tree from '../../shared/assets/images/green_tree.png';
import fire from '../../shared/assets/images/fire.png';
import garbage from '../../shared/assets/images/garbage.png';

function Main() {

    const menuParams = {
        loginLink: false,
        menuButton: {
            title: 'Оставить заявку',
            link: '/application',
            className: 'button button-success'
        },
        menuItems: [
            {
                title: 'COVID-19',
                link: '#',
                hasSub: true,
                subMenu: [
                    {
                        title: 'Онлайн карта COVID-19',
                        link: 'https://google.com/covid19-map',
                    },
                    {
                        title: 'Статистика COVID-19 в РТ',
                        link: 'https://covid.tj',
                    },
                    {
                        title: 'ВОЗ',
                        link: 'https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019',
                    },
                ]
            }
        ]
    }

    const partners = [
        {
            logo: undp_logo,
            link: 'https://www.tj.undp.org'
        },
        {
            logo: undp_logo,
            link: 'https://www.tj.undp.org'
        },
        {
            logo: undp_logo,
            link: 'https://www.tj.undp.org'
        },
        {
            logo: undp_logo,
            link: 'https://www.tj.undp.org'
        },
        {
            logo: undp_logo,
            link: 'https://www.tj.undp.org'
        },
    ]

    const customerExperiences = [
        {
            title: 'Незаконная вырубка деревьев',
            description: 'Вырубка деревьев\n' +
                'Одно взрослое дерево производит около 120 килограмм кислорода в год, т.е. почти 100 кубических метров. Этого достаточно для семьи из трех человек на протяжении того же года. \n' +
                'То же дерево сможет поглотить столько углерода, сколько выделяет двигатель автомобиля на протяжении нескольких тысяч километров. \n' +
                'За всю жизнь дерево перерабатывает более тонны углекислого газа. Не оставайтесь в стороне когда у Земли отнимают её здоровое дерево, которое может принести ей ещё много пользы.',
            image: green_tree
        },
        {
            title: 'Сжигание листьев',
            description: 'Сжигать листву очень вредно, ведь при сжигании листьев образуется угарный газ (не углекислый СO2, а угарный СО), который является одним из вреднейших газов для всего живого\n' +
                'на Земле. Людям, вдыхающим этот газ, деревьям, остающимся без питательной среды, в почве погибают все питательные организмы, тем самым нарушается её верхний слой.  \n' +
                'Поджигание листьев является нарушением закона Республики Таджикистан «Об охране атмосферного воздуха», в котором предусмотрена ответственность за сжигание листьев. \n' +
                'Не оставайтесь в стороне, когда жгут листья, не понимая, что тем самым приносят вред не только Земле, но и себе',
            image: fire
        },
        {
            title: 'Искусственные мусорки',
            description: 'Искусственные мусорки. \n' +
                'Очень часто идя по улице мы сталкиваемся с кучкой мусора, которая со временем превращается в точку его скопления, если вовремя не убрать её. \n' +
                'Если вовремя не обратить на это внимание весь этот нерегулируемый мусор со временем вернётся к каждому из нас в виде загрязнённой грунтовой воды, токсичной пыли.\n' +
                'Происходит выработка большого объема вредного для человеческого организма свалочного газа, состоящего из более, чем 140 химических веществ. \n' +
                'Не оставайтесь в стороне, помогите Земле избавиться от этих болячек.',
            image: garbage
        },
    ]

    const howItWorksParams = [
        {
            step: '1',
            title: 'Отправляем заявку',
            description: 'Вы фотографируете место скопления мусора либо нежелательных отходов на телефон. Приложение определеяет место через вашу геолокацию и отправляет заявку на сервер'
        },
        {
            step: '2',
            title: 'Следим за статусом',
            description: 'Ваша заявка будет рассматриваться и обрабатываться нашими специалистами-экологами. Будут также оповещены все государственные инстанции, отвечающие за экологию в вашем районе.'
        },
        {
            step: '3',
            title: 'Благодарим',
            description: 'Специалисты либо добровольцы выезжают на место и устраняют неблагоприятные условия. После очищения делается фото-отчёт.'
        },
    ]

    return (
        <div className="Main">
            <Navbar menuParams={menuParams} />
            <Banner />
            <PartnersCarousel partners={partners} />
            <CustomerExperience items={customerExperiences} />
            <NeedZotli />
            <HowItWorks params={howItWorksParams} />
            <Faq />
            <Footer />
        </div>
    );
}

export default Main;
