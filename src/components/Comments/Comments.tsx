import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Button/Button";
import { RootState } from "../../";
import { getAllArticleCommentsStart } from "../../store/actions/commentsAction";
import "./Comments.scss";

interface Props {
    articleId: string
}

const Comments: React.FC<Props> = ({articleId}) => {
    const dispatch = useDispatch();
    const comments = useSelector((state: RootState) => state.commentsReducer.comments)

    React.useEffect(() => {
        dispatch(getAllArticleCommentsStart(articleId))
    },[dispatch]);

    return (
        <section>
            <h3>Comments</h3>
            <div className="comments">
            <Button btnType="interact">Add New Comment</Button>
                {comments.map((comment) => (
                    <div key={comment.comment_id.toString()} className='comment-container'>
                        <p>{comment.body}</p>
                        <div>
                        <Button btnType="danger slim">Delete Comment</Button>
                        <Button btnType="warning slim">Edit Comment</Button>
                        </div>    
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Comments;