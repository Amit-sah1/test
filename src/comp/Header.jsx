import React from 'react'

function Header() {
  return (
    <>
    <div className="container py-3 ">
        <div className="row justify-content-between">
            <div className="col-lg-2">
             <img className='w-100' src="https://www.socheko.com/9073c22fb5c6c910fb5bf16d76fc29a1.png"      alt="" />
            </div>
            <div  className='col-lg-3 '>
       <form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>

        </div>
        <div className="col-lg-5 text-end">
        <button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
        </div>
        </div>
        
    </div>
        
    </>
  )
}

export default Header