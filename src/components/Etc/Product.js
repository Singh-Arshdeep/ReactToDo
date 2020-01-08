import React from 'react';

class Product extends React.Component {
    
    hello=(obj)=>alert(obj);

    render() {
        return(
            <div>
                <h2>Name : {this.props.name}</h2>
                <h2>Price : {this.props.price}</h2>
                <h2>Desc : {this.props.desc}</h2>
                <button onClick={()=>this.hello("Hello")}>Click me</button>
            </div>
        );
    }
}
export default Product