import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    margin-top: 5rem;
    width: 90%;
`

const Username = styled.p`
    color: #BB86FC;
`

const TextContainer = styled.div`
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

const Section = styled.p`
    font-size: 2rem;
    padding: 1rem;
`

function Comment() {
    return (
        <>
            <CommentContainer>
                <Username>Kniaź Jarema</Username>
                <TextContainer>
                    <Section />
                </TextContainer>
            </CommentContainer>
        </>
    )
}

export default Comment
