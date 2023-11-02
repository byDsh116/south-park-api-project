/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
const React = require('react');

module.exports = function InfoCard() {
    return (
        <div className="info-card_container">
            <div className="info-card_img" style={{ marginLeft: '10%' }}>
                <img alt="img" id="episode-image" />
            </div>
            <div className="episode-info">
                <p id="name-string">Name: </p>
                <p id="season-string">Season: </p>
                <p id="episode-string">Episode: </p>
            </div>
            <div className="episode-description_container">
                {/* <p id="data-string">Data: </p> */}
                <p id='airDate-string'> Air-date: </p>
                <p id='description-string'>Description: </p>
            </div>
            <div className="characters">
            </div>
        </div>

    );
};
