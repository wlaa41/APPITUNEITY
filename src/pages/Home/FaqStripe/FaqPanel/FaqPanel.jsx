import { useState } from 'react';
import "./FaqPanel.scss";

const FaqPanel = ({ item }) => {
    const [isOpen, setIsOpen] = useState(item.isOpen);
    return (
        <div className={`faq-panel ${isOpen ? 'opened' : 'closed'}`}>
            <h3 className="faq-panel-question">
                <p>{item.question}</p>
                <span className="toggler" onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-' : '+'}</span>
            </h3>
            <p className="faq-panel-answer">{item.answer}</p>
        </div>
    )
}
export default FaqPanel;