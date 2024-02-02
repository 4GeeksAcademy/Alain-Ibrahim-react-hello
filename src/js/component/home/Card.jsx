import React from 'react'
import {Link} from "react-router-dom";

export const Card = ({
  id,
  title,
  img_url,
  context
}) => {
    return <>

          <div className="col">
            <div className="card shadow-sm">
            <img src={img_url}
                  className="img-fluid rounded-start p-4"
                  alt="..."
            />
            <div className="card-body r">
                <h3 className="card-title d-flex justify-content-center">{title}</h3>
                <p className="card-text">{context}</p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    {/* <Link to={`cardservices/${id}`} className="btn btn-sm btn-outline-secondary">
                            Edit
      
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
}
