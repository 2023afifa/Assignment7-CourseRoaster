import PropTypes from 'prop-types';
// import { useState } from 'react';

const Credit = ({ credit}) => {
    const { title } = credit;
    // const [count, setCount] = useState(0);

    // const countNum = () => {
    //     setCount(count + 1);
    // }

    return (
        <div>
            <li className='text-neutral-500'>{title}</li>
        </div>
    );
};

Credit.propTypes = {
    credit: PropTypes.object
}

export default Credit;