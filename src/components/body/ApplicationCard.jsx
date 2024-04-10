import React, { useState } from 'react'
import '../Styles.css';
import TicTacToe from '../Games/TicTacToe';

export default function ApplicationCard(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const onClickHandleOpen = () => {
        setIsPopupOpen(true);
    };

    const onClickHandleClose = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <div className='col-sm card-row-margin'>
                <div className="cardsize" onClick={onClickHandleOpen}>{props.appName}</div>
            </div>
            <div>
                {isPopupOpen && <div className='popup-overlay'>
                    <div className='popup-content'>
                        {!(props.appName === "Tic-Tac-Toe") && <p>PoP up content</p>}
                        {(props.appName === "Tic-Tac-Toe") && <TicTacToe />}
                    </div>
                    <button className='close-button' onClick={onClickHandleClose}> X </button>
                </div>}
            </div>
        </div>
    )
}
