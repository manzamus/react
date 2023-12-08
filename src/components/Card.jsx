import React from "react";
const Card = (props) => {
    console.log(props);
    return (
<div className="Card">
<img src={props.image} alt="" />
<h1>{props.name}</h1>
<p className="big">{props.big}</p>
<p className="price">price:<span>{props.price + 5}</span></p>
</div>
           
    );
};
export default Card