import React from 'react'

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
            <div class="card-body r">
                <h3 class="card-title d-flex justify-content-center">{title}</h3>
                <p class="card-text">{context}</p>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
}
