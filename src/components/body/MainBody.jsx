import React from 'react'
import '../Styles.css'

export default function MainBody() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm'>
                    <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{ margin: '50px' }}>Application 01</div>
                </div>
                <div className='col-sm'>
                    <div className="shadow p-3 mb-5 bg-white rounded" style={{ margin: '50px' }}>Application 02</div>
                </div>
                <div className='col-sm'></div>
            </div>
        </div>
    )
}
