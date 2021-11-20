import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    margin-top: 5rem;
    width: 90%;
`

const Textarea = styled.textarea`
    color: #fff;
    background: #121212;
    box-shadow: 0 2px 4px 0 #3700B3;
    padding: 0.7rem;
    width: 50vw;
    height: 15vh;
    resize: none;
    border: none;
    outline: none;

    &:focus {
        background: #0b0b0b;
    }
`

const AddButton = styled.button`
    background: #3700B3;
    color: #fff;
    padding-bottom: 30px;
    font-size: 1.7rem;
    width: 38px;
    height: 38px;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 6.8rem 0 0 2rem;
    position: absolute;
`

function Comment() {
    return (
        <>
            <CommentContainer>
                <Textarea />
                <AddButton>+</AddButton>
            </CommentContainer>
        </>
    )
}

export default Comment;
