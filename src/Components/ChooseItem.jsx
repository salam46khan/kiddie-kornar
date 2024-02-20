import PropTypes from 'prop-types'
const ChooseItem = ({choose}) => {
    const {id, reason, details} = choose;

    const detail = details.length > 100 ? details.slice(0,100)+"..." : details
    
    return (
        <div className=" pt-10">
            <div className="text-center py-5 pt-7 rounded-md shadow-md shadow-Second hover:shadow-lg hover:-translate-y-1 px-3 bg-slate-100  duration-200 relative">
                <div className="bg-white h-20 w-20 rounded-full left-[50%] top-0 -translate-y-[50%] -translate-x-[50%] absolute text-slate-100 font-extrabold flex items-center justify-center text-5xl border-8 border-slate-100">
                    <p>{id}</p>
                </div>
                <p className="text-lg font-bold">{reason}</p>
                <p>{detail}</p>
            </div>
        </div>
    );
};
ChooseItem.propTypes = {
    choose: PropTypes.object
}
export default ChooseItem;