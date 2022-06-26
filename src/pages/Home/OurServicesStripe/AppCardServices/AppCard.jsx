import "./AppCard.scss";
import { truncate } from '../../../../shared/String';
const AppCard = ({ item, mode, className }) => {

    return (
        <div className={`app-card ${mode}-card ${className}`}>
            <div className="innerWhite">
            <h3 itemScope={item.titleSch_itemscope} >{item.title}</h3>
            <div className="app-card-desc">
                <p>
                    <span className="">{truncate(item.description, 125)}</span>
                    <span className="">{truncate(item.description, 175)}</span>
                    <span>Read More</span>
                </p>
            </div>
            <div className="app-card-footer">
                {item.icon && <img src={item.icon} alt={item.title} />}
            </div>
            
            </div>
        </div>
    )
}
export default AppCard;