import React, { Fragment } from 'react';
import strIcon from '../assets/img/str.png';
import agiIcon from '../assets/img/agi.png';
import intIcon from '../assets/img/int.png';

const icons = {
    str: strIcon,
    agi: agiIcon,
    int: intIcon
};

export const Heroes = ({ heroes }) => {
    if (heroes.length) {
        return (
            <Fragment>
                {
                    heroes.map(hero => {
                        return (
                            <div key={hero.id} className="card" style={{width: 18 + 'rem'}}>
                                <div className="card-body">
                                    <img src={icons[hero.primary_attr]} className="card-icon" alt="attribute" />
                                    <h5 className="card-title">{hero.localized_name}</h5>
                                    <h6>Roles:</h6>
                                    <ul>
                                        {hero.roles.map(role => <li key={role} className="card-text">{role}</li>)}
                                    </ul>
                                </div>
                            </div>


                        )
                    })
                }
            </Fragment>
        )

    }
    return (
        null
    )
};
