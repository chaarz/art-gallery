import Picture from "./Picture";

// if you wish to use information from the props object, don't forget to pass it into your function component!!

const Gallery = (props) => {
    console.log("Gallery has rendered", props)
    return (
        <section className="gallery">
            <h2>A gallery of pictures</h2>
            <ul>
            {
                // we are going to map through the array of art within the props object
                props.arrayOfArt.map((artObject) => {
                    // for each object within the array, we will return a Picture component
                    // and pass dwon the image and title for that specific object with the Picure component will then render to the page
                    return <Picture artInfo={artObject} key={artObject.id}/>
                })
            }
            </ul>
        </section>
    )

}

export default Gallery;