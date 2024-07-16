import React from 'react'
import PlatformTop from '../../components/PlatformTop/PlatformTop'
import PlatformBottom from '../../components/PlatformBottom/PlatformBottom'
import './Platform.scss'

const Platform = () =>
{
    return (
        <div className='platform'>
            <PlatformTop />
            <PlatformBottom />
        </div>
    )
}

export default Platform
