import React from 'react'
import "./Product.css"
import { Link } from "react-router-dom"
import Chart from '../../chart/Chart'
import { productData} from "../../../data.js"
import Img from "../../../img.jpg"
import { Publish } from '@material-ui/icons'

export default function Product() {
    return (
        <div className="product">
            <div className="product-title-container">
                <h1 className="product-title">Edit Product</h1>
                <Link to="/createProduct">
                    <button className="button-add-product">Create</button>
                </Link>
            </div>
            <div className="product-top">
                <div className="product-top-left">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" className="chart"/>
                </div>
                <div className="product-top-right">
                    <div className="product-info-top">
                        <img src={Img} alt="" className="product-info-img" />
                        <span className="product-name">Galaxy Buds</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-key">id</span>
                            <span className="product-value">124</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-key">sales</span>
                            <span className="product-value">7712</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-key">active:</span>
                            <span className="product-value">yes</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-key">in stock:</span>
                            <span className="product-value">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form action="" className="product-form">
                    <div className="product-form-left">
                        <div>
                            <label>Product Name</label>
                            <input type="text" placeholder="Galaxy Buds"/>
                        </div>
                        <div>
                            <label>In Stock</label>
                            <select name="inStock" id="idStock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div>
                            <label>Status</label>
                            <select name="inStatus" id="idStatus">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-form-right">
                        <div className="product-upload">
                            <img src={Img} alt="" className="product-upload-img"/>
                            <label for="file">
                                <Publish className="publish-icon"/>
                            </label>
                            <input type="file" id="file"  style={{display: "none"}}/>
                        </div>
                        <button className="product-update-button">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
