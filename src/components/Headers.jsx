import React from 'react'
import LOGO from '../assets/images/logo.png'

function Headers() {
  return (
    <>

{/* bg-body-tertiary */}
{/* style={{ height: '70px'}}  */}
<nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary">
  <div className="container" >
    <a className=" navbar-brand " href="/" ><img src={LOGO} /></a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent " aria-expanded="false" aria-label="Toggle navigation ">
      
      <span className="navbar-toggler-icon "></span>
    </button>


    {/* <div className="nav-links text-center"style={{ marginRight: '150px'}} > */}
      

    {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}




    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mx-auto" > 

        <li className="nav-item ">
          
          <a className="nav-link active text-danger" aria-current="page" href="/"><i className="fa-solid fa-house"></i>HOME</a>
        </li>


        <li className="nav-item ">
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"></i>PRIEST INFO</a>

          <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="/Service">Images Of Priests</a></li>
    <li><a className="dropdown-item" href="#">List Of Priests/Historical Life</a></li>
    
  </ul>

  </div>
        </li>
       
        <li className="nav-item">
        <div class="dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-calender-alt"></i>EVENTS</a>
          <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/Tracking">Our Conferences</a></li>
    <li><a className="dropdown-item" href="#">All Regions Visitation</a></li>
    <li><a className="dropdown-item" href="/Tracking">Some Other Priests' Activities</a></li>
    <li><a className="dropdown-item" href="#">Birthday Celebration of the Priests</a></li>
    
  </ul>
          </div>
        </li>

        <li className="nav-item">
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-file-media"></i>MEDIA</a>

          <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/Tracking">All News</a></li>
    <li><a  className="dropdown-item" href="#">Bible Verses</a></li>
    <li><a className="dropdown-item" href="/Tracking">About God The Father</a></li>
    <li><a className="dropdown-item" href="#">The Gospel Today</a></li>
    <li><a className="dropdown-item" href="#">Videos/Pictures</a></li>
    
  </ul>
          </div>
        </li>


        <li className="nav-item">
      
      <a className="nav-link " href="/Contact"><i className="fa-solid fa-phone"></i>CONTACT</a>

    </li>

        <li className="nav-item">
      
          <a className="nav-link" href="/Support_Us">SUPPORT US</a>

        
        </li>




      </ul>
      <div className="sach">
     <div className="search-container">
      <input className="mt-0" type="text1" placeholder="Search.." />
     
       <button  className="btn btn-danger" type="submit"><i className="fa fa-search"></i></button>
       </div>
    </div>
    </div>
    
  </div>
</nav>
      
    </>
  )
}

export default Headers