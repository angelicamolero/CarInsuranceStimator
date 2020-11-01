import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';

import styled from '@emotion/styled';
import Spinner from './components/Spinner';

const Container = styled.div`
    max-width: 600px;
    margin: 10rem auto;
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.20);
`;

const FormContainer = styled.div `
    background-color: #fff;
    padding: 3rem;
`;

const TopNav = styled.div`
   position: fixed;
    z-index: 50;
    width: 100%;
    top: 0;
    left: 0;
    min-width: 30rem;
    height: 6rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background-image: linear-gradient(to right, #194b93 0%, #215bb0 100%);
    color: #fff;
    -webkit-backface-visibility: hidden;
    overflow: hidden; 
`;

function App() {

  const [ resume, saveResume ] = useState({
    stimation: 0,
    inputvalue: {
      brand: '',
      year: '',
      coverage: ''
    }
  });

  const [ loading, saveLoading ] = useState(false);

  const { stimation, inputvalue } = resume;
  return (
    
    <Container>
    <TopNav/>
    <Header 
      titulo= "Car Insurance Stimator"
    />

    <FormContainer>
      <Form
        saveResume={saveResume}
        saveLoading={saveLoading}
      />
      { loading ? <Spinner/> : null}
      { loading ? null : 
        <Resume
       inputvalue= {inputvalue}
     />
      }
     
     { !loading ? 
     <Result
       stimation={stimation}
     />
     : null
     }
    </FormContainer>
    </Container>
  );
}

export default App;
