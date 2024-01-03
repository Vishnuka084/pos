import React from "react";

function  Product(){
    const styleObj:React.CSSProperties={
        marginBottom:'540px'
    }

    return (
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input value={name} type="text" onChange={(e)=>setName(e.target.value)} className='form-control' id='productName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="price">Unit Price</label>
                            <input  value={unitPrice} onChange={(e)=>setUnitPrice(parseFloat(e.target.value))} type="number" className='form-control' id='price'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qty">QTY On Hand</label>
                            <input value={qtyOnHand} onChange={(e)=>setQtyOnHand(parseFloat(e.target.value))} type="number" className='form-control' id='qty'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="image">Product Image</label>
                            <input onChange={handleImageChange}
                                   type="file" className='form-control' id='image'/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea value={description} onChange={(e)=>setDescription(e.target.value)}  rows={5} className='form-control' id='description'/>
                        </div>
                    </div>

                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12' onClick={saveProduct}>Save Product</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <form className='col-12'>
                            <input type="search" className='form-control' placeholder='Search Products here'/>
                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">

                        <table className='table table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Product Name</th>
                                <th>QTY On Hand</th>
                                <th>Unit Price</th>
                                <th>Delete Option</th>
                                <th>Update Option</th>
                                <th>See more</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#1010</td>
                                <td>Wimal Bandara</td>
                                <td>Colombo city</td>
                                <td>25000.00</td>
                                <td>
                                    <button className='btn btn-outline-danger btn-sm'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-sm'>Update</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#1010</td>
                                <td>Wimal Bandara</td>
                                <td>Colombo city</td>
                                <td>25000.00</td>
                                <td>
                                    <button className='btn btn-outline-danger btn-sm'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-sm'>Update</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;