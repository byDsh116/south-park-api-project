/* eslint-disable indent */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
const React = require('react');
const Layout = require('./Layout');
const RandomButton = require('./components/RandomButton');
const InfoCard = require('./components/InfoCard');

module.exports = function Home() {
    return (
        <Layout>
            <div className="container">
                {/* как навесить на кнопку событие так что б она сохраняла данные в стейт */}
                {/* <RandomButton /> */}
                <InfoCard />
            </div>
        </Layout>
    );
};

// хэдр в лейауте
// кнопка гет рандом
// карточка у нее класс
// когда на кнопу визибл тру если данные пришли
// алерт с ошибкой если данных нет

// кнопку кликабельную
// крточку
// клик - крточка
//
