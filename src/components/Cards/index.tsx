import { CardContainer, CardInfo } from "./styles";

export interface CardType {
  id: number,
  imgUrl: string,
  title: string, 
  staks: string
}

interface CardProps{
  card: CardType
}

export function Cards({card}: CardProps){
  return (
    <section>
      <CardContainer>
        <a href="">
          <div>
            <img src={card.imgUrl} alt="" />
          </div>
          <CardInfo>
            <h1>{card.title}</h1>
            <p>{card.staks}</p>
          </CardInfo>
        </a>
      </CardContainer>
    </section>
  );
}