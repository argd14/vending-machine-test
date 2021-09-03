import React from 'react'

 const OrderedItems = (props) => {
    return (
        <div className="col col-md-4">
                    <div className="card text-center shadow-sm h-100">
                        <div className="card-body d-flex flex-column">
                            <h3>{props.name}</h3>
                            <hr className="my-12"/>
                                    <div className="row" >
                                        <div className="col col-md-12">
                                        <h5>Product name</h5>
                                        </div>
                                        <hr className="my-12"/>
                                    </div>
                        </div>
                    </div>
                </div>
    )
}

export default OrderedItems