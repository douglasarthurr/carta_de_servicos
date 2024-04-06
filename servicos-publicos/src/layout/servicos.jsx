import "../css/servicos.css"

export default function Servicos (props) {
    return(
        <div class="mainservicos">
            <img id="image" src={props.image} alt="images"/>
            <h1 id="title_servicos">{props.title}</h1>
            <p id="description_servicos">{props.description}</p>
            <a id="link" href={props.link} target="_blank" rel="noopener noreferrer">Saiba mais</a>
        </div>
    );
}
