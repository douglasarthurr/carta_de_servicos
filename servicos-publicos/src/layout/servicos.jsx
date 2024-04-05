import "../css/servicos.css"

export default function Servicos (props) {
    return(
        <div class="mainservicos">
            <h1 id="title">{props.title}</h1>
            <p id="descreption">{props.description}</p>
            <a id="link" href={props.link} target="_blank" rel="noopener noreferrer">Saiba mais</a>
        </div>
    );
}
