import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Proptypes from 'prop-types';

const Message = styled.p`
 
 margin-top: 2rem;
 padding: 1rem;
 text-align: center;
 `;

const ResultStimation = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #215bb0;
    margin-top: 1rem;
    position: relative;
`;

const TotalText = styled.p`
    color: #215bb0;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    font-size: 1.5rem;
`;

const Result = ({stimation}) => {
   
    return (
        (stimation === 0) ? 
        <Message>Choose brand, year and type of coverage</Message>  
        : (
            <ResultStimation>
              <TransitionGroup
              component="div"
              className="result2"
              >
                  <CSSTransition
                  classNames="result2"
                  key={stimation}
                  timeout={{enter: 500, exit: 500}} >
                  <TotalText>Total: ${stimation}</TotalText>
                  </CSSTransition>
              </TransitionGroup>
            </ResultStimation>
        )
    );
};

Result.propTypes = {
    stimation: Proptypes.number.isRequired
}

export default Result; 