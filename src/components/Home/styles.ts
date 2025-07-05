import styled from "styled-components";
import {CardContainer} from "../Cards/styles.ts"


export const CardCarousel = styled.div`
  grid-area: C;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 0.5rem;

`;

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  padding-top: 5em;
  display: grid;
  grid-template-columns: 35.5rem 1fr;
  grid-template-areas:
    'A B'
    'C C'
    'D D';
  gap: 3rem;

  h1{
    font-family: "Bebas Neue", sans-serif;
  }
  

  p {
    font-size: 0.8rem;
    color: ${props => props.theme['paragraph']}
  };

  ::-webkit-scrollbar{
    display: none;
  }

  @media (max-width: 1120px){
    ${CardContainer}{
      height: 340px;
      width: calc(22.5rem * 1.5);

      display: flex;
      align-items: center;
      justify-content: center;
    }
    ${CardCarousel}{
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* apenas uma coluna */
    grid-template-areas:
      'A'
      'B'
      'C'
      'D'; /* empilha as áreas */
    gap: 2rem;
    padding: 2rem 1rem;

    ${CardContainer}{
      height: 340px;
      width: calc(22.5rem * 1.2);

      display: flex;
      align-items: center;
      justify-content: center;
    }
    ${CardCarousel}{
      gap: 1.5rem;
    }

  };
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

export const ButtonsGroup = styled.div`
  grid-area: D;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;