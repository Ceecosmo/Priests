import React from 'react'
import MARY  from '../assets/images/Marys.jpg'
import JESUS from '../assets/images/Jesus1sss.jpg'
import About from '../assets/images/fada9.jpg'
import ICON1 from '../assets/images/fada15.jpeg'
import ICON2 from '../assets/images/fada15.jpeg'
import ICON3 from '../assets/images/fada15.jpeg'
import Card1 from './Card'
import FORM from './Form'


function HomePage() {
  return (
    <>

<div className="bg-image mt-0" >
<div className="container text-light ">
            <div className="pt-5 text-center" data-aos="fade-down-right">
            <h1 className='pt-5' style={{fontSize:'40px',fontWeight:'bold',marginTop:'60px'}}>
            Welcome to Catholic <span style={{color:'yellow'}}> <i className="fa-solid fa-plus"></i></span>Priests' Welfare Home Awka 
            </h1>
            <p style={{fontSize:'24px', fontWeight:'700px'}}>A Home of Peace. 
            Thanks for your Visit.</p>
            <div className="bg-red mx-auto"></div>
           </div>
        </div>
        <div className="container text-center">
        <a href="/tracking" className="btn btn-danger mt-4" data-aos="fade-up-left">Learn More</a>
        </div>  
       </div> 

  <div className="bg-gray"> 
<div className="container-fluid">
<div className="row ">

<div className="d-flex">
<div className="col-md-6"  >

  
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{margin:'0 -100px'}} >
    <div className="carousel-item active text-center"  >
    <img src={About} className="d-block w-100" style={{height:'288px'}} alt="..."/>
    <div className="carousel-caption d-none d-md-block text-center">
        <h5 >11Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={About} className="d-block w-100" style={{height:'288px'}} alt="..."/>
    <div className="carousel-caption d-none d-md-block text-center">
        <h5 >22Third slide label</h5>
        <p >Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={About} className="d-block w-100" style={{height:'288px'}} alt="..."/>
    <div className="carousel-caption d-none d-md-block text-center">
        <h5>33Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="col-md-1">
<div className="join" style={{marginLeft:'-92px'}}>
<div className="jesus">
<img src={JESUS} className="" alt="..."/>

</div>

<div className="mary pt-2">

<img src={MARY} className="" alt="..."/>
</div>
</div>
</div>

<div className="col-md-5">
  <div className="join2">
<h3 className='text-start text-danger'>The Catholic Priests' Welfare Home Awka</h3>
<h4 className='text-start'>The Catholic Priests' Welfare Home Awka is rooted by Most Rev. Dr Paulinus Ezeokafor, We strongly believe that this togetherness brings us Peace, Harmony and Progress..</h4>
<p>The Catholic Priests' Welfare Home Awka</p>
<p>The Catholic Priests' Welfare Home Awka</p>
<p>The Catholic Priests</p>
</div>
</div>

</div> 

</div>
</div>
</div>








<div className="container pt-5">
<div className="text-center " data-aos="fade-up">
  <h3 className='era bg-body-tertiary'>The Brief Era of Catholic <span style={{color:'yellow'}}> <i className="fa-solid fa-plus"></i></span>Priests' Welfare Home Awka</h3>
  {/* <div className="bg-red mx-auto"></div> */}

</div>



<div className="container-fluid pt-3">
   <div className="row">

      <div className="col mt-6">
      <img src={About} className="rounded img-fluid mb-5" alt="about" />
          
        
      </div>

      <div className="col-md-6" data-aos="fade-up">
        
        <h2>Priests' Welfare Home Awka, Nigeria</h2>
        <p className='rooted'>The Catholic Priests' Welfare Home Awka, is rooted by Most Rev. Dr Paulinus Ezeokafor, We strongly believe that this togetherness brings us Peace, Harmony and Progress.. All of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern, by engaging our employees and nurture investment on the stock holds market.</p>
        <a href="/Service" className="btn btn-danger">Learn More</a>
        
        </div>

   </div>
   </div></div>


<div className="container pt-5 ">
  <div className="text-center"><h4 className='text-danger'> FEATURES </h4>
    <h2>Covering All Our Activities</h2>
    </div>


<Card1/>
<div className="text-center "data-aos="fade-up">

  <a href="/Service" className="btn btn-danger">Load More</a>
  
</div>
</div>


<div className="bg-warning mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
     <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2>Masses @Catholic Priests' Welfare Home Awka, Nigeria</h2>

           <p> <b>Sunday Masses (In the Chapel):</b> 7:00am.  
            <b> Other Masses hold in every morning by 7:00am.</b> 
            <b> Night Prayer holds in the evening by 7:00pm everyday.</b>
            </p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
               <a href='/contact' className="btn btn-danger">More Schedule</a> 
            </div>
          </div>
          
        </div>
      </div>
      

  


<div className="container mt-5" >
<div className="row">
 <div className="col-md-6" data-aos="fade-up">
 <h2>Join Us in Sports</h2>

 <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON1} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Global supply Chain Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON2} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Mobile shipping Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>

            {/* <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON3} alt=""  className='img-fluid'/>
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Careful handling Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div> */}
 </div>
<div className="col-md-6" data-aos="fade-up">
<h2>Send Us Messages</h2>
<FORM/>
</div>

</div>
</div>
<br></br><br></br><br></br>
<div className="container">
<div class="col-xs-12 text-center mt-5">
                <h4 className='era font-weight-4 text-danger '>CULTURAL CELEBRATION AT PRIESTS' WELFARE HOME</h4>
              </div> 
              
<div className="row mb-0 mt-4">

<div className="col-md-3">

<div class="col-md-12 col-sm-12 col-xs-12 col-centered text-center">
               
            <iframe className='video' src=" https://youtube.com/embed/L03lP-YE-j4?playlist=L03lP-YE-j4&loop=1" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
</div>


<div className="col-md-3">

<div class="col-md-12 col-sm-12 col-xs-12 col-centered text-center">
               
            <iframe className='video'  src=" https://youtube.com/embed/L03lP-YE-j4?playlist=L03lP-YE-j4&loop=1" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
</div>




<div className="col-md-3">

<div class="col-md-12 col-sm-12 col-xs-12 col-centered text-center">
               
            <iframe className='video'  src=" https://youtube.com/embed/L03lP-YE-j4?playlist=L03lP-YE-j4&loop=1" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
</div>




<div className="col-md-3">

<div class="col-md-12 col-sm-12 col-xs-12 col-centered text-center">
               
            <iframe className='video'  src=" https://youtube.com/embed/L03lP-YE-j4?playlist=L03lP-YE-j4&loop=1" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
</div>


</div>
</div>
    </>
    
   
  )
}

export default HomePage