import React from 'react'
import styled from 'styled-components'

const CloseAnswerButton = styled.button`
    background: #3700B3;
    color: #fff;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    margin: 1rem 0 -1rem 0;
`

const AddCloseCommentButton = (props) => {
    return <CloseAnswerButton onClick={props.removeComment}>Zamknij</CloseAnswerButton>
}

export default AddCloseCommentButton
