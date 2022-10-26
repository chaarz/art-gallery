const Picture = (props) => {
    return(
        <li>
            <h3>{props.artInfo.title}</h3>
            <img src={props.artInfo.webImage.url} alt={props.artInfo.longTitle} />
        </li>
    )
}

export default Picture;