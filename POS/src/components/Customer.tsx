function  Customer(){
    return (
        <>
        <br/>
            <div className='container'>
                <div className="row">
                   <div className="col-12 col-sm-6 col-md-4">
                       <div className="form-group">
                           <label htmlFor="customerName">Customer Name</label>
                           <input type="text" className='form-control' id='customerName'/>
                       </div>
                   </div>
                   <div className="col-12 col-sm-6 col-md-4">
                       <div className="form-group">
                           <label htmlFor="customerAddress">Customer Address</label>
                           <input type="text" className='form-control' id='customerAddress'/>
                       </div>
                   </div>

                   <div className="col-12 col-sm-6 col-md-4">
                       <div className="form-group">
                           <label htmlFor="customerSalary">Salary</label>
                           <input type="text" className='form-control' id='customerSalary'/>
                       </div>
                   </div>

                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <button className='btn btn-primary col-12'>Save Customer</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Customer;