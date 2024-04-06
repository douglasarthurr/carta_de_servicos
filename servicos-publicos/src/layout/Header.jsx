import logo from "../images/logo.png"
import "../css/Header.css"

function Header () {
    return( 
        <div>
            <header class="header">
                <a href="https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&acao=open&id=4620" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="logo" id="logo"/>
                </a>
                
                
                <div class="texts">
                    <h1 id="title">Serviços Públicos</h1>
                    <a href="https://pt.wikipedia.org/wiki/Florianópolis" target="_blank"  rel="noopener noreferrer" id="subtitle">Florianópolis</a>
                </div>
            </header>
            <div>
                <p id="description">Aqui você encontra algumas informações dos serviços da cidade de Florianópolis-SC</p>
            </div>
         
        </div>
    );
}

export default Header