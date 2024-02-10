import React from 'react';

const Pagination = () => {
    return (
        <div>
            <ul className="paginator">
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">
                    <i className="far fa-angle-right"></i>
                  </button>
                </li>
              </ul>
        </div>
    );
}

export default Pagination;
