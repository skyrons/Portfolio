import { Cards } from "./components/Cards";
import { Home } from "./components/Home"; 

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

export default function App() {

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
        <Cards />
      </ThemeProvider>
    </div>
  );
}
