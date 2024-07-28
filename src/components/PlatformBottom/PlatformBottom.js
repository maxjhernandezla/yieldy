import './PlatformBottom.scss'
import ImagesSlider from '../Slider/Slider'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const PlatformBottom = () =>
{
    useEffect(() =>
    {
        Aos.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    }, [])
    return (

        <div className='platform_bottom'>
            <h2 data-aos='fade-right'>Screenshots</h2>
            <div className="screenshots">
                <ImagesSlider />
            </div>
        </div>
    )
}

export default PlatformBottom
