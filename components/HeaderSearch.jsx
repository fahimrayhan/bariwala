const HeaderSearch = () => {
    return ( 
        <div className="bg-white p-3 rounded" style={{opacity:'0.8'}} >
            <div className="row mb-2">
                <div className="col-md-3">
                    <input type="search" name="search" id="search" className="form-control" />
                </div>
                {/* Select 1 */}
                <div className="col-md-3">
                    <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
                {/* Select 2 */}
                <div className="col-md-3">
                    <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
                {/* Search Button */}
                <div className="col-md-3">
                    <button className="btn btn-success">Search</button>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-4">
                    <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
                {/* Range */}
                <div className="col-md-4">
                    <label htmlFor="customRange3" >Example range</label>
                    <input type="range" className="form-range" min="0" max="5" step="0.5" default="3" id="customRange3"/>
                </div>
                <div className="col-md-4">
                    
                </div>
                
            </div>
        </div>
     );
}
 
export default HeaderSearch;