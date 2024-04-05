import logo from "../images/logo.png"
import "../css/Header.css"

function Header () {
    return( 
        <div>
            <header class="header">
                <img src={logo} alt="logo" id="logo"/>
                <div class="texts">
                    <h1 id="title">Serviços Públicos</h1>
                    <a href="https://pt.wikipedia.org/wiki/Florianópolis" target="_blank"  rel="noopener noreferrer" id="subtitle">Florianópolis</a>
                </div>
            </header>
            <div>
                <p id="description">Aqui você encontra algumas informações dos serviços da cidade de Florianópolis-SC</p>
                <p id="developed">Developed by Douglas and Jefferson</p>
            </div>
        </div>
    );
}

export default Header