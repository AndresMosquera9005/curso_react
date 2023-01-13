function Juegos(props){
    return(
        <div>
            <img src={props.imagen} alt={props.titulo} />
            <h2>{props.titulo}</h2>
            <p>{props.subtitulo}</p>
        </div>
    )
}

export default Juegos