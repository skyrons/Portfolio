import DTMoney from "../../assets/dt-money01.png"
import { CardContainer, CardInfo } from "./styles";

export function Cards(){
  return (
    <section>
      <CardContainer>
        <a href="">
          <div>
            <img src={DTMoney} alt="" />
          </div>
          <CardInfo>
            <h1>Title</h1>
            <p>Staks Que Foram Utilizadas</p>
          </CardInfo>
        </a>
      </CardContainer>
    </section>
  );
}