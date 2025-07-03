import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${props => props.theme['bg-dark']};
  width: 460px;
  height: 400px;

  padding: 2rem;
  border: 2px solid ${props => props.theme['background']};
  border-radius: 52px;

  &:hover{
    border: 2px solid ${props => props.theme['bg-golden']}
  }

  img{
    height:206px;
    width: 388px;

    border-radius: 32px;
  }

  a{
    text-decoration: none;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;

  h1{
    font-size: 1.5rem;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['paragraph']};
  }
  p{
    font-size: 0.8rem;
  }
`;