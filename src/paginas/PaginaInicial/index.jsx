import banner from './banner.png';
import estilo from './PaginaInicial.module.scss';

import Menu from "Menu";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Cabecalho/Rodape";
import Galeria from "componentes/Cabecalho/Galeria";
import Populares from "componentes/Populares/Index";


export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={estilo.principal}>
          <Menu />
          <div className={estilo.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={estilo.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>

      <Rodape />
    </>
  );
}