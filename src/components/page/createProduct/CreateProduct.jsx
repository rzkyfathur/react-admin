import React from 'react'
import "./CreateProduct.css"

export default function CreateProduct() {
    return (
         <div className="create-product">
            <h1 className="create-product-title">New product</h1>
            <from className="create-product-form">
                <div className="input-file">
                    <label>Image</label>
                    <input type="file" />
                </div>
                <div className="create-product-item">
                    <label>productname</label>
                    <input type="text" placeholder="Galaxy Buds"/>
                </div>
                <div className="create-product-item">
                    <label>Stock</label>
                    <input type="text" placeholder="120"/>
                </div>
                
                <div className="create-product-item">
                    <label>Active</label>
                    <select name="active" id="active" className="create-product-select">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="create-product-button">Create product</button>
            </from>
        </div>
    )
}
