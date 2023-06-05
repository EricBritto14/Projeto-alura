import Menu from "../../Menu";
import Cabecalho from "../../componentes/Cabecalho";
import banner from './banner.png';
import estilo from './PaginaInicial.module.scss';


export default function PaginaInicial(){
    return (
        <>
        <Cabecalho/>
        <main>
            <section className={estilo.principal}>
              <Menu/>
              <div className={estilo.principal__imagem}>
                <h1>A galeria mais completa do espaço</h1>
                <img src={banner} alt="A imagem da terra vista do espaço" />
              </div>
            </section>
        </main>
        
        </>
        
        
    );
}