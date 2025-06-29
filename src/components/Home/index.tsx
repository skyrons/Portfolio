import { Aside, Main, SectionContainer } from "./styles";

export function Home(){
  return(
    <SectionContainer>
      <Aside>
        <h1>Hi, my name is Hugo</h1>
        <h2>Web Developer</h2>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Delectus quaerat odit in quam fugiat earum! Neque consequuntur eligendi repudiandae quasi. 
            Vero, omnis.
          </p>
        </div> 
      </Aside>

      <Main>
        <div>
          <h3>ABOUT ME</h3>
          <p>Brasileiro, 27 anos</p>
          <p>Sou graduando em Analise e Desenvolvimmento de Sistemas</p>
          <p>Front-End Developer</p>
          <p>Inglês Intermediário : Leitura e Conversas Objetivas</p>
        </div>
        <div>
          <h3>MY STAKS</h3>
          <p>React</p>
          <p>Typescript</p>
          <p>JS</p>
          <p>HTML + CSS</p>
        </div>
        <div>
          <h3>LINKS</h3>
          <a href="">Linked In </a>
          <a href=""> Github </a>
        </div>
      </Main>
    </SectionContainer>
  );
}