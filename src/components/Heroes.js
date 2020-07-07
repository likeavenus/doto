import React, { Fragment } from 'react';

export const Heroes = ({ heroes }) => {
    if (heroes.length) {
        return (
            <Fragment>
                {
                    heroes.map(hero => {
                        return (
                            <div key={hero.id} className="card">
                                <div className="card-body">
                                    <img src={`./src/assets/img/${hero.primary_attr}.png`} className="card-icon" alt="attribute" />
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
