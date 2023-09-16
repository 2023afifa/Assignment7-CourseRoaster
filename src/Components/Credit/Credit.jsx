import PropTypes from 'prop-types';
// import { useState } from 'react';

const Credit = ({credit}) => {
    const {title} = credit;
    // const [count, setCount] = useState(0);

    return (
        <div>
            <h4 className='text-neutral-500'>{title}</h4>
        </div>
    );
};

Credit.propTypes = {
    credit: PropTypes.object
}

export default Credit;