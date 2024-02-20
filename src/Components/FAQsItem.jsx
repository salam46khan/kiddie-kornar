
const FAQsItem = ({faqs}) => {
    const {question, answer} = faqs;
    return (
        <div className="collapse collapse-arrow bg-slate-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
                {question}
            </div>
            <div className="collapse-content bg-slate-100">
                {answer}
            </div>
        </div>
    );
};

export default FAQsItem;