import React , {Fragment, useState} from "react";


const Test = () => {

    let  [val,setVal] = useState("hello");
    
    return (
        <Fragment>
            {val}
        </Fragment>
    )   
}
export default Test