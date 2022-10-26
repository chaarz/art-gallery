// import the hooks we need to accomplish our logic!
import axios from "axios";
import { useState, useEffect } from "react"
import Gallery from "./Gallery";

const ArtWall = () => {

    console.log('ArtWall is rendering')

    // initialize a state to keep track of whether the Gallery is visible or not
    const [ isGalleryVisible, setIsGalleryVisible] = useState(false)

    // initialize a state for the API data from Rijksmuseum (i.e. the art we want to display)
    const [ art, setArt ] = useState([]);

    // call the Rijksmuseum API once the component has been mounted to the DOM
    //     i.e. run a SIDE EFFECT !
    useEffect(() => {

        // this is where we define whast the side effect is and how it will run
        console.log("side effect is running");

        // using axios, let's make a request to our API
        axios({
            url: 'https://www.rijksmuseum.nl/api/en/collection',
            // add our URL parameters through this object
            params: {
                imgonly: true,
                key: 'XPEKm77w',
                toppieces: true
            }
        }).then((artData) =>{
            // once the data is returned from the PI lets save it within state!
                // use dot notation to ONLY save the array of arts. We chose artData but it could be any other name 
            setArt(artData.data.artObjects)
        })
    // if you only wish to run a side effet ONCE upon the component's initial mount to the DOM, use an EMPTY dependency array - otherwise we enter a loop where the side effect continuously runs
    }, [])

    // define an event handler which updates the isGalleryVisible state to be the opposite booean value
    const handleClick = () => [
        setIsGalleryVisible(!isGalleryVisible)
    ]

    return(
        <section>
            <h2>{
                isGalleryVisible
                    ? 'Wow this is a beauteous gallery wall 🤩'
                    : 'Ok but would you like to actually see some art???'
            }</h2>
            {/* this button text is not accessible, it would be better to style it via CSS (i.e insert a span and add the emojis using using pseudo element before & after) */}
            <button onClick={handleClick}>
                {
                    isGalleryVisible
                        ? `I've seen enough of this art ! Please hide it`
                        : 'Click here for ✨ a r t ✨'
                }
            </button>
            {/* only show the Gallery component if the isGalleryVisible state is true */}
            {
                isGalleryVisible
                    // pass the array of arts that leves within the art state variable from this component down to the Gallery component
                    ? <Gallery arrayOfArt={art} />
                    : null
            }
        </section>

    )
}

export default ArtWall;