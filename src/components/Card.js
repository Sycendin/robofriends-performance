import React, {Fragment} from "react";

// enter properties
// destructure from props in the parameters
const Card = ({name, email, id}) => {
    // destructure from props
    // const {name, email, id} = props;
    return (
        // use Fragment so we don't need to wrap everything in <div>
        <Fragment>
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </Fragment>
    )
}
export default Card