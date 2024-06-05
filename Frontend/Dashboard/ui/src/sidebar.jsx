import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='m-2'>
        <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
        <span className='brand-name fs-4'>User</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
        <Link className='list-group-item py-2' to="/">
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className="fs-5">Dashboard</span>
        </Link>
        <Link className='list-group-item py-2' to="/home">
          <i className='bi bi-house fs-5 me-3'></i>
          <span className="fs-5">Home</span>
        </Link>
        <Link className='list-group-item py-2' to="/category">
          <i className='bi bi-people fs-5 me-3'></i>
          <span className="fs-5">Category</span>
        </Link>
        <Link className='list-group-item py-2' to="/asset">
          <i className='bi bi-power fs-5 me-3'></i>
          <span className="fs-5">Asset</span>
        </Link>
        <Link className='list-group-item py-2' to="/allocation">
          <i className='bi bi-power fs-5 me-3'></i>
          <span className="fs-5">Allocation</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
