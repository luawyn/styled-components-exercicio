import React from "react";
import CardVideo from "./components/CardVideo";
import { Header, Main, Nav } from "./styles";

export default function App() {
  const objetoDoVideo = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "título do vídeo",
  };
  const infoDeUsuario = {
    imagem:
      "https://img.olhardigital.com.br/wp-content/uploads/2021/03/Bob-Esponja.jpg",
    autor: "Luana Franco Trevizani",
  };
  return (
    <div>
      <div className="tela-inteira">
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <Nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </Nav>

          <section className="painel-de-videos">
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
          </section>
        </Main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
