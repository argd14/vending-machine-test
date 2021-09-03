import React from 'react'; 
import Card from './Card'

export default function Cards(props){
    return(
            <div className="col col-md-3">
                <Card name={props.name} prepTime={props.prepTime} img={props.img}/>
            </div>
    )
}