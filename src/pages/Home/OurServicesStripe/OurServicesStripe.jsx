import "./OurServicesStripe.scss";
import info from './info/info'
import AppCard from "./AppCardServices/AppCard";


const OurServicesStripe = () => {
    const cardItems = info()
    return (
        <div className="our-services-stripe">
            <div className="main-container">
                <div className="stripe-header">
                    <h2>Offshore Software Development & IT Outsourcing Services</h2>
                </div>
                <div className="app-card-container ">
                    {cardItems.map((item) => {
                        return (
                            <div className="app-card-item ">
                                <AppCard className="card-theme" item={item} key={item.id} mode="horizontal" />
                            </div>
                        )

                    })}
                </div>
            </div>
        </div>
    )
}
export default OurServicesStripe;