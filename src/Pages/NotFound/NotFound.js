import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <div className="flex_vhcenter">
                <div className="col">
                    <h1 className="orange_large">
                        404
                    </h1>
                </div>
            </div>
            <div className='flex-vhcenter'>
                <div className='col'>
                    <p>
                        The page that you are looking for does not exists.
                    </p>
                </div>
            </div>
            <div className='flex-vhcenter'>
                <div className='col'>
                    <p>
                        Use this link to return <Link to="/">Home</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound;