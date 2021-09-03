import React from 'react';
// import Dispatcher from './Dispatcher';

export default function Card(props){

    

    return(
        <div className="col col-md-2">

        <div className="card text-center shadow-sm h-100">
            <img src={props.img} 
            alt={props.name} className="img-fluid rounded mx-auto d-block" style={{maxHeight: "150px"}} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text text-secondary ">Preparation time: {props.prepTime} seg</p>
                <button type="button" className="btn btn-primary mt-auto" onClick={()=>{props.selectProduct(props)}}>Add to Order</button>
            </div>
        </div>
            </div>
    )
}