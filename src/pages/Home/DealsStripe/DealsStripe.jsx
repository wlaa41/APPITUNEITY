import "./DealsStripe.scss";
import info from './info.js'

const DealsStripe = () => {
    const inf = info();
    return (
        <div className="briefStrip">
            <div className="main-container">
                
                <div className="up">
                    <div className="up-left">
                        <p className="first-desc">
                        {inf.title}
                           </p>
                        </div>
                    <div className="up-right">
                        <p className="second-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                </div>
                <div className="down">
                    <div className="left">
                        <p className="footer-desc">15+ years Of experience in the big Tech</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DealsStripe;