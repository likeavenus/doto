import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";

export const Header = () => {
    const dispatch = useDispatch();
    dispatch(fetchData())
    const comments = useSelector(state => state.data.comments);
    return (
        comments.length ? comments.map(comment => <div key={comment.key}>{comment.key}</div>) : <div>Комментариев пока нет</div>
    )
};
