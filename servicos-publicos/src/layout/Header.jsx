import logo from "../images/logo.png"
import "../css/Header.css"

function Header () {
    return(
        <header class="header">
            <img src={logo} alt="logo" id="logo"/>
            <div class="texts">
                <h1 id="title">Serviços Públicos</h1>
                <a href="https://pt.wikipedia.org/wiki/Florianópolis" target="_blank" id="subtitle">Florianópolis</a>
            </div>
        </header>
    );
}

export default Header