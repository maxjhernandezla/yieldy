import React from 'react'
import PlatformTop from '../../components/PlatformTop/PlatformTop'
import PlatformBottom from '../../components/PlatformBottom/PlatformBottom'
import './Platform.scss'
import { useRefs } from '../../context/RefContext'

const Platform = () =>
{
    const { platformRef } = useRefs()

    return (
        <div ref={platformRef} className='platform_general'>
            <PlatformTop />
            <PlatformBottom />
        </div>
    )
}

export default Platform
