import React from 'react'
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card';

export const CommentContainer = ({comment, handleLike, createComment}) => {
    
    return (
        <Card className='d-flex flex-row mt-2 align-items-center'>
            <TimerComponent datetime={comment.created_at} />
            <p style={{width: "50%"}}>{comment.content}</p>
            <LikeButton 
                id={comment.id}
                handleLike={handleLike}
            />
            <p style={{justifySelf: "flex-end"}}>{comment.likes}</p>
        </Card>
    )
}

const TimerComponent = ({datetime}) => {
    return (
        <div style={{
            width: "100px",
            fontSize: "10px"
        }}>
            <Moment date={datetime} />
        </div>
    )
}

const LikeButton = ({handleLike, id}) => {
    return <Button 
        style={{justifySelf: "flex-end"}}
        onClick={() => handleLike(id)
        }>
            Like
        </Button>
}
