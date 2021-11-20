import React from 'react'
import styled from 'styled-components'
import Navbar from '../../containers/navigation/Navigation'
import Input from './Input'

import { useFormik } from 'formik';
import axios from 'axios';
import { UserContext } from './../../providers/UserContext';


const AddQuestion = styled.form`
    float: right;
    width: calc(100% - 300px);
    min-height: 100vh;
` 

const Topic = styled.div`
    margin: 2rem 2rem 0 2rem;
`

const TopicMessage = styled.a`
    font-weight: 550;
    display: inline-block;
    align-items: center;
    width: 10vw;
    height: 60px;
    font-size: 1.5rem;
`

const CategoryContainer = styled.div`
    width: 100%;
    margin: 2rem 2rem 0 2rem;
`

const Category = styled.button`
    font-family: inherit;
    font-size: 1.2rem;
    color: #fff;
    margin-right: 2.5rem;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 12px;
    background: transparent;
    box-shadow: 0 2px 4px 0 #3700B3;
    cursor: pointer;

    &:focus {
        background: #3700B3;
    }
`

const Textarea = styled.textarea`
    background: #222222;
    color: #fff;
    font-size: 1.2rem;
    border: none;
    outline: none;
    box-shadow: 0 2px 4px 0 #3700B3;
    width: 80vw;
    height: 60vh;
    resize: none;
    margin: 4rem 2rem;
    padding: 0.5rem;
`

const AddButton = styled.button`
    background: #3700B3;
    color: #fff;
    font-size: 1.5rem;
    border: none;
    border-radius: 12px;
    position: fixed;
    right: 35px;
    bottom: 35px;
    width: 42px;
    height: 42px;
    cursor: pointer;
`


function Add() {
    return (
        <>
            <Navbar />

            <AddQuestion>
                <Topic>
                    <TopicMessage>Tytuł:</TopicMessage>
                    <input />
                </Topic>
                <CategoryContainer>
                    <Category>Matematyka</Category>
                    <Category>Polski</Category>
                    <Category>Angielski</Category>
                    <Category>Informatyka</Category>
                    <Category>Programowanie</Category>
                    <Category>Mechatronika</Category>
                </CategoryContainer>
                <Textarea />
                <AddButton>+</AddButton>
            </AddQuestion>
            
        </>
    )
}

export default Add
