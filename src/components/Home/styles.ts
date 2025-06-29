import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  padding-top: 5em;
  display: grid;
  grid-template-columns: 35.5rem 1fr;
  grid-template-areas:
    'A B'
    'C C';
  gap: 3rem;
  

  p {
    font-size: 0.8rem;
    color: ${props => props.theme['paragraph']}
  };

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* apenas uma coluna */
    grid-template-areas:
      'A'
      'B'
      'C'; /* empilha as áreas */
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

export const Aside = styled.div`
  grid-area: A;
`;

export const Main = styled.div`
  grid-area: B;
`;



  /* h1, h2, h3 {
    background-image: linear-gradient(
      to right, 
      ${props => props.theme['text-primary']},
      ${props => props.theme['text-secondary']} 
    );
    background-clip: text;
    color: transparent;
  } */