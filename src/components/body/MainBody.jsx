import React from 'react'
import '../Styles.css';
import ApplicationCard from './ApplicationCard';

export default function MainBody() {
    return (
        <div className='container'>
            <div className='row application-cards'>
                <ApplicationCard appName='Application 01' />
                <ApplicationCard appName='Application 02' />
                <ApplicationCard appName='Application 03' />
            </div>

            <div className='row application-cards'>
                <ApplicationCard appName='Application 04' />
                <ApplicationCard appName='Application 05' />
                <ApplicationCard appName='Application 06' />
            </div>

            <div className='row application-cards'>
                <ApplicationCard appName='Application 07' />
                <ApplicationCard appName='Application 08' />
                <ApplicationCard appName='Application 09' />
            </div>
        </div>
    )
}
