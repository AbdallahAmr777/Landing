import React from 'react'
import "./Head.css"

const Head = () => {

   return (
    <>
		<nav className=" navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-md-3" >
			<div className='container'>
				<a className="navbar-brand" href="index.html">DORSIN</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navbar">
     				   <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse  " id="navbarNav">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 ">
						<li className="nav-item active">
							<a className="nav-link" href="index.html">Home</a>
						</li>
						<li><a className="nav-link" href="">Shop</a></li>
						<li><a className="nav-link" href="">Services</a></li>
						<li><a className="nav-link" href="">Features</a></li>
        					<li><a className="nav-link" href="">Blog</a></li>
						<li><a className="nav-link" href="">Team</a></li>
						<li><a className="nav-link" href="">Contact</a></li>
					</ul>
					<ul className="navbar-nav mb-2 mb-md-0 ms-5">
      					    <button type='submit'className="try"> try Subscribe  </button>
					</ul>
				</div>
     		          </div>	
		</nav>
    </>
  )
}

export default Head
