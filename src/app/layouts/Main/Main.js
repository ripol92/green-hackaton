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
            description: 'Some text...',
            image: green_tree
        },
        {
            title: 'Сжигание листьев',
            description: 'Some text...',
            image: fire
        },
        {
            title: 'Искусственные мусорки',
            description: 'Some text...',
            image: garbage
        },
    ]

    const howItWorksParams = [
        {
            step: '1',
            title: 'Отправляем заявку',
            description: 'Some text...'
        },
        {
            step: '2',
            title: 'Следим за статусом',
            description: 'Some text...'
        },
        {
            step: '3',
            title: 'Благодарим',
            description: 'Some text...'
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
