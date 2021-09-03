import React from 'react';

export default function Card(props){
    return(
        <div className="card text-center shadow-sm border-info h-100">
            <img src={props.img} 
            alt={props.name} className="img-fluid img-thumbnail rounded mx-auto d-block" style={{maxHeight: "200px"}} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text text-secondary">Preparation time: {props.prepTime} seg</p>
                <button type="button" className="btn btn-primary">Add to Order</button>
            </div>
        </div>
    )
}