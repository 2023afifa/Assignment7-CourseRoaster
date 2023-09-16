import PropTypes from 'prop-types';

const Credit = ({ credit }) => {
    const { title } = credit;

    return (
        <div>
            <li className='text-neutral-500 list-decimal'> {title}</li>
        </div>
    );
};

Credit.propTypes = {
    credit: PropTypes.object
}

export default Credit;