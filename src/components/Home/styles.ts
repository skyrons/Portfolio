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

  h1{
    font-family: "Bebas Neue", sans-serif;
  }
  

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
  h1 {
    font-size: 4rem
  }
  p{
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const Main = styled.div`
  grid-area: B;
  h1{
    font-size: 1.5rem;
    margin-bottom: 0.5rem
  }
  li{
    list-style: none;
    color: ${props => props.theme['paragraph']};
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    margin: 0.3rem 0rem;
  }
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