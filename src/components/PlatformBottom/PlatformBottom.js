import './PlatformBottom.scss'
import s1 from '../../images/img1.png'
const PlatformBottom = () =>
{
    return (
        <div className='platform_bottom'>
            <h2>Screenshots</h2>
            <div className="screenshots">
                <div className="screenshot">
                    <img src={s1} alt="" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PlatformBottom
