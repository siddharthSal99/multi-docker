import React from 'react';
import {Link} from 'react-router-dom';

var otherpagehtml = () => {
    return (
        <div>
            I'm another page 
            <Link to='/'>Go back home</Link>
        </div>
    );
};

export default otherpagehtml