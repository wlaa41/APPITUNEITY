import "./DedicatedTeamsStripe.scss";
import OutlineCard from "../../../components/OutlineCard/OutlineCard";
import icon from "../../../assets/images/teams_cards_icons/Highly Flexible And Scalable.svg";
const DedicatedTeamsStripe = () => {
    const cardItems = [
        {
            id: 1,
            title: "Highly Flexible And Scalable",
            icon: icon,
        },
        {
            id: 2,
            title: "Get The Best Developers",
            icon: icon,
        },
        {
            id: 3,
            title: "Increased Productivity",
            icon: icon,

        },
        {
            id: 4,
            title: "Customers Are At The Center Of Focus",
            icon: icon,
        },
        {
            id: 5,
            title: "Transparent Management",
            icon: icon,
        },
        {
            id: 6,
            title: "Fair Pricing",
            icon: icon,
        }
    ]
    return (
        <div className="dedicated-teams-stripe">
            <div className="main-container">
                <div className="stripe-header">
                    <h2>Why Hiring Dedicated Teams</h2>
                </div>
                <div className="row row-cols-auto justify-content-center">
                    {cardItems.map((item) => {
                        return (
                            <div className="outline-card-item col" key={item.id}>
                                <OutlineCard item={item} />
                            </div>
                        )
                    })}
                </div>
                <div className="row row-cols-auto justify-content-center">
                    <div className="col">
                        <p className="footer-desc">Regardless of the size of your project, you are the one who initially decides how many specialists developers you need to hire on the project. You can always add new developers to your team or reduce the team as necessary.It is all done quickly and without any side cost.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DedicatedTeamsStripe;