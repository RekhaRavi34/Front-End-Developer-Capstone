import React from 'react'
import Card from '../components/Card';
import Review from '../components/Review';
import littlelemon from '../assets/littlelemon.jpg'
import Button from '../components/Button';
import image1 from '../assets/prod1.jpg'
import image2 from '../assets/prod2.jpg'
import image3 from '../assets/prod3.jpg'
import image4 from '../assets/mario.jpg'
import image5 from '../assets/adrian.jpg'


function Homepage() {
  return (
    <>
    <main>
        <section className="section1">
          <div className="grid1">
            <div className='sec1grid1'>
              <h1>Little Lemon</h1>
              <h4>Chicago</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Button>Reserve a table</Button>
            </div>
            <div className='sec2grid2'>
              <img src={littlelemon} />
            </div>
          </div>
        </section>
        <section className='specials'>
      <div className='special1'>
        <h1>Specials</h1>
        <div style={{display:'inline-flex',justifyContent:"flex-end", paddingRight:"1.2rem"}}>
        <Button>Order  Online</Button>
        </div>
      </div>
      <div className='cardcontainer'>
      <Card className="card1" image={image1} name="Bruchetta" price="$14"/>
      <Card  className="card2" image={image3} name="Pasta" price="$12"/>
      <Card className="card3" image={image2} name="Noodles" price="$11"/>
      </div>
    </section>
    <section style={{backgroundColor:"#fbdabb"}}>
     <div className='reviewsection'>
     <div>
        <p style={{textAlign:"center", fontFamily:"Karla", fontWeight:"bold", fontSize:"1.5rem",}}>Testimonials</p>
      </div>
      <div className='reviewcontainer'>
      <Review feedback="The food was superb" star="⭐⭐⭐⭐⭐⭐" name="Patrick"/>
      <Review feedback="I really enjoyed the ambience" star="⭐⭐⭐⭐" name="William"/>
      <Review feedback="The dishes I ordered were excellant" star="⭐⭐⭐⭐" name="Kate"/>
      <Review feedback="The dishes I ordered were amazing" star="⭐⭐⭐⭐" name="Harry"/>
      </div>
     </div>
    </section>
    <section className='lastsection'>
      <div className='lastsectionbox'>
        <div style={{paddingRight:"6rem"}}>
          <p>Little Lemon</p>
          <h4>Chicago</h4>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br/>Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div className='imagecontainer'>
        <img src={image4}  className='overlapimage1'/>
        <img src={image5}  className='overlapimage2'/>
        </div>
      </div>
    </section>
  </main>
  </>
  )
}

export default Homepage;