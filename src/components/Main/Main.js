import React from 'react';

function Main() {
    const fname = "Arsh";
    const lname = "deep";
    return(
        <div>
            <input type="checkbox"/>
            <p>Item1 {fname+" "+lname}</p>
            <input type="checkbox"/>
            <p>Item2</p>
            <input type="checkbox"/>
            <p>Item3</p>
        </div>
    );
}

export default Main;