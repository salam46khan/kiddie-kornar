import PropTypes from 'prop-types'; 
const MyBtn = ({action}) => {
    return (
        <div className="cursor-pointer mt-1 bg-gradient-to-l to-Second hover:to-slate-400 hover:from-slate-400 rounded-md shadow-md duration-200 hover:shadow-xl hover:-translate-y-1 shadow-black from-slate-400 inline-block py-2 px-6 ">
            {action?`${action}`: 'Click Me'}
        </div>
    );
};

MyBtn.propTypes = {
    action: PropTypes.string
}
export default MyBtn;