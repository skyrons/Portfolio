import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Aside, Main, SectionContainer } from "./styles";

export function Home(){
  return(
    <SectionContainer>
      <Aside>
        <h1>Hi, my name is Hugo</h1>
        <h1>Web Developer</h1>
        <div>
          <p>
            Full stack developer com maior aptdão para FrontEnd
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
    </SectionContainer>
  );
}