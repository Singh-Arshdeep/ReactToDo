import React from 'react';
// import ContactCard from '../Etc/ContactCard';
import productData from '../../productData';
import Product from '../Etc/Product'

const productComponenets =productData.map(
    (data)=> <Product key={data.key} name={data.name} price={data.price} desc={data.desc}/>
);

function Main() {
    return(
        <div>
          {productComponenets}
        </div>
    );
}

export default Main;