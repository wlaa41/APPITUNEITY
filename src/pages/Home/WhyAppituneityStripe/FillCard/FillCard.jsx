import "./FillCard.scss";
const FillCard = ({ item, className }) => {

    return (
        <div className={`fill-card ${className}`}>
            <div className="fill-card-content">

                {/*  FLIP CARD  */}
                {/* <div className="fill-card-front">
                    <div className="fill-card-img">
                        {item.icon && <img src={item.icon} alt={item.title} />}
                    </div>
                    <div className="fill-card-desc">
                        <h2>{item.title}</h2>
                    </div>
                </div> */}
                <div className="fill-card-back">
                    <div className="fill-card-header">
                        {item.icon && <img src={item.icon} alt={item.title} />}
                        <h2>{item.title}</h2>
                    </div>
                    <div className="fill-card-body">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FillCard;