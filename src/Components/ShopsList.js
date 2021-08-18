import React, { useState, useEffect } from 'react'
import Shop from './Shop'

function ShopList(props) {

    console.log("sasa", props);

    return (
        <>
            {props.props.length > 0 ? props.props.map((shop) => <Shop props={shop} />) : <h1 className="m-10 text-base "> No Shops Found....... </h1>}
        </>
    )
}

export default ShopList;