import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.module.css';
import styled from "styled-components";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//     margin: 0.5rem 0;
//
//
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : 'black'}
//   }
//
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
//   }
//
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
//
//   /* These two selectors, are for approach 1 of dynamic styling of a styled-comp which is to pass className to this styled-component. */
//   &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }
//
//   &.invalid label {
//     color: red;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* styled components approach: */}
      {/*<FormControl className={!isValid && 'invalid'}>*/}
      {/*<FormControl invalid={!isValid}>*/}

      {/* css modules approach: */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      {/*</FormControl>*/}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
