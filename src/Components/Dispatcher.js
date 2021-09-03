import React, { useEffect } from 'react'

export default function Dispatcher(props) {
let dispatcherArray = [{
    id: props.id,
    name: props.prodName,
    prepTime: props.prepTime
}]
let dispatcherArrayNew = Object.values(dispatcherArray)[0]
// console.log(dispatcherArrayNew);

// Dispatched sucessfully asyncronously any products 
const distpachAction = async ()=>{
    try {
        const interval = await setInterval(()=>{
            clearInterval(interval);
            console.log('producto despachado',dispatcherArrayNew.name);
        },dispatcherArrayNew.prepTime*1000)
    } catch (error) {
        console.error(error);
    }
}

    return(
                <div className="col col-md-4">
                    <div className="card text-center shadow-sm h-100">
                        <div className="card-body d-flex flex-column">
                            <h3>{props.name}</h3>
                            <hr className="my-12"/>

                            {dispatcherArray.map((values,index)=>{
                                return(
                                    <div className="row" key={index}>
                                        <div className="col col-md-6">
                                        <h5>{values.name}</h5>
                                        </div>
                                        <div className="col col-md-6">
                                        <h5>time: {values.prepTime} sec</h5>
                                        </div>
                                        <button type="button" className="btn btn-primary mt-auto"
                                        onClick={()=>distpachAction()}>Distpach</button>
                                    </div>
                                    )
                            })}
                        </div>
                    </div>
                </div>
    )    
}