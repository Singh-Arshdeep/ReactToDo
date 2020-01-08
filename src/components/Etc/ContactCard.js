import React from 'react';

function ContactCard(props) {
    let mainStyle = {
        backgroundColor:"grey", 
        height:"30vh",
        margin:"auto",
        paddingLeft:"40%",
    };
    let imgStyle = {
        height:80,
        width:100
    }
    return(
        <div style={mainStyle}> 
            <div>
                <img style={imgStyle} src="images/picDogs.png" alt="An img"/>
                <h2 style={{display: !props.name && "none"}}>Name : {props.name}</h2>
                <p>Extra info : {props.info}</p>
            </div>
        </div>
    );
}

export default ContactCard;