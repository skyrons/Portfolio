import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Aside, Main, SectionContainer } from "./styles";
import { Cards } from "../Cards";

export function Home(){
  return(
    <SectionContainer>
      <Aside>
        <h1>Olá, meu nome é Hugo</h1>
        <h1>Web Developer</h1>
        <div>
          <p>
            Desenvolvedor Full Stack com maior aptdão para FrontEnd
          </p>
        </div> 
      </Aside>

      <Main>
        <div>
          <h1>ABOUT ME</h1>
          <ul>
            <li>Brasileiro, 27 anos</li>
            <li>Sou graduando em Analise e Desenvolvimmento de Sistemas</li>
            <li>Nível de Inglês: Intermediário - Leitura e Conversa</li>
          </ul>
        </div>
        <div>
          <h1>MY STAKS</h1>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>JS</li>
            <li>HTML + CSS</li>
          </ul>
        </div>
        <div>
          <h1>LINKS</h1>
          <a 
            href="https://www.linkedin.com/in/hugo-souza-42b446133/" 
            target="_blank"
            title="LinkedIn"
          >
            <LinkedinLogo size={32} color="#ffcd2c"/>
          </a>
          <a 
            href="https://github.com/skyrons" 
            target="_blank"
            title="Github"
          >
            <GithubLogo size={32} color="#ffcd2c"/>
          </a>
        </div>
      </Main>
      <Cards />
    </SectionContainer>
  );
}