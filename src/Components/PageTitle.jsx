import PropTypes from 'prop-types'
const PageTitle = ({ title }) => {
    return (
        <div className="pageTitle py-16 px-2">
            <div>
                <h3 className='text-5xl font-bold text-center text-white'>{title}</h3>
            </div>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string
}
export default PageTitle;