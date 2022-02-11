import react, { Fragment } from "react";

const Scroll = (props) =>{
    return(
    <Fragment>
    
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
    {props.children};
    </div>
     
     </Fragment>
    )
}
export default Scroll