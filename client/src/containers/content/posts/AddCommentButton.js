import React from 'react'
import styled from 'styled-components'

const AnswerButton = styled.button`
    background: #3700B3;
    color: #fff;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    margin-bottom: -1rem;
`

const AddCommentButton = (props) => {
    return <AnswerButton onClick={props.addComment}>Odpowiedz</AnswerButton>
}

export default AddCommentButton
