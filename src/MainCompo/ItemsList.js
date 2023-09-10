import React from 'react'


const ItemsList = ({ cards }) => {

    return <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>product Photo</th>
                    <th>Size</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {console.log("anmol",cards)}
                {
                    cards && cards.length > 0 && cards.map((product, index) => (
                        <tr key={index}>
                            <td>{product.title}</td>
                            <td><img style={{ width: "145px" }} src={product} /></td>
                            <td>{product.size}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>

}


export default ItemsList




