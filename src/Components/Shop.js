import React, { useState, useEffect } from 'react'

function Shop(props) {

    console.log("sasa", props);

    return (
        <>
            <tr>
                <th scope="row">@</th>
                <td>{props.props.shopName}</td>
                <td>{props.props.stars}</td>
                <td>{props.props.phoneNumber}</td>
                <td>{props.props.type}</td>
          </tr>
        </>
    )
}

export default Shop;