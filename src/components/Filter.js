import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeValue, fetchData } from "../redux/actions";
import { Heroes } from "./Heroes";

export const Filter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const heroes = useSelector(state => state.filter.heroes);
    const selectedHeroes = useSelector(state => state.filter.selectedHeroes);

    return (
        <div className="container">
            <h1>Dota 2 Heroes</h1>
            <select defaultValue={'Select attribute'} onChange={(e) => { dispatch(changeValue(e.target.value)) }} className="select" name="heroes" id="heroes">
                <option disabled value="Select attribute">Select attribute</option>
                <option value="all">All</option>
                <option value="int">Intelligence</option>
                <option value="agi">Agility</option>
                <option value="str">Strength</option>
            </select>


            <div className="heroes">
                <Heroes heroes={selectedHeroes}/>
            </div>
        </div>
    )
};
