import React from 'react'
import styled from 'styled-components'

import Discuss from '../../../icons/discuss.png'

const AnswerButton = styled.button`
    background: #3700B3;
    color: #fff;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    margin: 1rem 0 -1rem 0;
`

const DiscussIcon = styled.img`
    margin-left: 10px;
`

const AddCommentButton = (props) => {
    return <AnswerButton onClick={props.addComment}>
        Odpowiedz
        <DiscussIcon src={Discuss} alt="discuss" />
        </AnswerButton>
}

export default AddCommentButton
