import React from 'react';
import GCard from './GCard';
import { cat } from './data';
import { selectOg } from './helper';

const Catalog = ({ filter }) => {

    var ogToDispaly = filter ? selectOg(cat, filter) : cat;
    if (filter) {
        ogToDispaly = selectOg(cat, filter);
    }
    else {
        ogToDispaly = cat;
    }

    return (
    <div className="catalog">
        {ogToDispaly.map(grad => (
            <GCard grad={grad} key={cat.id}/>
        ))}
    </div>
    );
}

export default Catalog;