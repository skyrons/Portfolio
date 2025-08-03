import { ArrowCircleLeft, ArrowCircleRight, GithubLogo, LinkedinLogo } from "phosphor-react";
import { Aside, Button, ButtonsGroup, CardCarousel, Main, SectionContainer } from "./styles";
import { Cards, type CardType } from "../Cards";
import { useRef, useEffect } from "react";

import sr from '../../utils/scrollreveal'

const cards: CardType[] = [
  {
    id: 1,
    imgUrl: '/images/01-doctorcare.jpg',
    title: 'DoctorCare',
    staks: 'Landinpage dinâmica utilizando JS, HTML e CSS',
    link: 'https://skyrons.github.io/doctorcare/'
    
  },
  {
    id: 2,
    imgUrl: '/images/02-feed.jpg',
    title: 'Ignite Feed',
    staks: 'Feed de publcações estáticas e campo de comentário: React + Typescript',
    link: 'https://postfeedts.netlify.app/'
  },
  {
    id: 3,
    imgUrl: '/images/03-dtmoney.png',
    title: 'DT Money',
    staks: 'Gerente de transações financeiras: API Restful, React + Typescript + Styled-Components',
    link: 'https://dtmoneyts.netlify.app/'
  },
  {
    id: 4,
    imgUrl: '/images/04-mariojump.jpg',
    title: 'Mario Jumper',
    staks: 'Os movimentos desse jogo são realizados através do DOM, alterando basicamente o CSS',
    link: 'https://skyrons.github.io/Mario-jump/'
  },
  {
    id: 5,
    imgUrl: '/images/05-timer.jpg',
    title: 'Ignite Timer',
    staks: 'Uma SPA que gerencia o tempo que o usuário determina para trabalhar em uma determinada tarefa: React + Typescript',
    link: 'https://timerignitets.netlify.app/'
  },
]
export function Home(){
  const asideRef = useRef<HTMLDivElement | null>(null)
  const mainRef = useRef<HTMLDivElement | null>(null)
  const scrollrevealCarouselRef = useRef<HTMLDivElement | null>(null)

  const carouselRef = useRef<HTMLDivElement>(null);

  const setCombinedRef = (node: HTMLDivElement | null) => {
    scrollrevealCarouselRef.current = node
    carouselRef.current = node
  }

  useEffect(() => {
    if (asideRef.current) {
      sr.reveal(asideRef.current, {
        origin: 'left',
        distance: '20px',
        duration: 1500,
        delay: 200,
        easing: 'ease-in-out',
        reset: true,
      })
    } if (mainRef.current) {
      sr.reveal(mainRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 2000,
        delay: 200,
        easing: 'ease-in-out',
        reset: true,
      })
    } if (scrollrevealCarouselRef.current) {
      sr.reveal(scrollrevealCarouselRef.current, {
        origin: 'bottom',
        distance: '50px',
        duration: 2500,
        delay: 200,
        easing: 'ease-in-out',
        reset: true,
      })
    }
  }, [])

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  }
  
  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  }

  return(
    <SectionContainer >
      <Aside 
        ref={asideRef}>
        <h1>Hugo Souza</h1>
        <h1>Web Developer</h1>
        <div>
          <p>
            Desenvolvedor Full Stack com maior aptdão para FrontEnd. 
          </p>
          <p>
          Ofereço soluções resoponsivas para páginas web, entregando ao usuário 
          uma navegação dinâmica e agradável.
          </p>
          <p>Visite os projetos logo abaixo e conheça um pouco do meu trabalhado.</p>
        </div> 
      </Aside>

      <Main
        ref={mainRef}>
        <div>
          <h1>ABOUT ME</h1>
          <ul>
            <li>Brasileiro, 27 anos</li>
            <li>Graduando em Analise e Desenvolvimmento de Sistemas</li>
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
      <CardCarousel ref={setCombinedRef}>
        {cards.map(card => {
          return(
            <Cards 
              key={card.id}
              card={card}
            />
          )
        })}
      </CardCarousel>

      <ButtonsGroup>
        <Button onClick={handleLeftClick}>
          <ArrowCircleLeft size={32} />
        </Button>
        <Button onClick={handleRightClick}>
          <ArrowCircleRight size={32} />
        </Button>
      </ButtonsGroup>
    </SectionContainer>
  );
}