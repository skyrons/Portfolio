import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  

  p {
    font-size: 0.8rem;
    color: ${props => props.theme['paragraph']}
  };

  /* h1, h2, h3 {
    background-image: linear-gradient(
      to right, 
      ${props => props.theme['text-primary']},
      ${props => props.theme['text-secondary']} 
    );
    background-clip: text;
    color: transparent;
  } */
`;