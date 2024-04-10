import React from 'react'
import '../Styles.css'

export default function MainBody() {
    return (
        <div className='container'>
            <div className='row application-cards'>
                <div className='col-sm card-row-margin'>
                    <div className="cardsize">Application 01</div>
                </div>
                <div className='col-sm card-row-margin'>
                    <div className="cardsize">Application 02</div>
                </div>
                <div className='col-sm card-row-margin'>
                    <div className="cardsize">Application 03</div>
                </div>
            </div>

            <div className='row application-cards'>
                <div className='col-sm card-row-margin'>
                    <div className="cardsize">Application 04</div>
                </div>
                <div className='col-sm card-row-margin'>
                    <div className="cardsize">Application 05</div>
                </div>
                <div className='col-sm card-row-margin'>
                    <div className="cardsize">Application 06</div>
                </div>
            </div>

            <div className='row application-cards'>
                <div className='col-sm card-row-margin'>
                    <div className="cardsize">Application 07</div>
                </div>
                <div className='col-sm card-row-margin'>
                    <div className="cardsize">Application 08</div>
                </div>
                <div className='col-sm card-row-margin'>
                    <div className="cardsize">Application 09</div>
                </div>
            </div>
        </div>
    )
}
