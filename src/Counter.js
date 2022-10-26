import { useState } from "react";

const Counter = () => {

    console.log('Counter has rendered');

    // initializes state to track the amount of likes
    const [likesCount, setLikesCount] = useState(0)

    // define an event handler which will update state (when called)> Note that we could also call an anonymous function directly in the onClick event listener
    const handleClick = () => {

        // when this funciton is called, we need to update state by +1
        setLikesCount(likesCount + 1);

        // setLikesCount(likesCount++) is equivalent to setLikesCount(likesCount = likesCount + 1) WILL NOT WORK
        // likesCount++  is the increment operator and is equivalent to likesCount = likesCount + 1. WE WILL NEVER USE THE INCREMENT OPERATOR IN REACT AS IT REASSIGNS THE VALUE AND WE CANT DO THAT HERE. 
    }

    return(
        <section> 
            <p>This page has been liked {likesCount} times 👍</p>
            <button onClick={handleClick}>Click for likes!</button>
            {/* <button onClick={() =>{ setLikesCount(likesCount + 1)}}>Click for likes!</button> 
            we could have used an anonymous function and use this suntax inside the onClick instead of declaring our handleClick function on line 11 -14*/}
        </section>
    )

}

export default Counter;