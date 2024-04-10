import React, { useState } from 'react'
import '../Styles.css';

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
                        <p>PoP up content</p>
                    </div>
                    <button className='close-button' onClick={onClickHandleClose}> X </button>
                </div>}
            </div>
        </div>
    )
}
