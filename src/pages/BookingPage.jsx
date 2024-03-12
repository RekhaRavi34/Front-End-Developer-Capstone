import React from 'react'
import Button from '../components/Button'
function BookingPage() {
  return (
    <>
        <div className='bookcontainer'>
            <div className='reserve'>
                <p>Reservation Form</p>
            </div>
            <div className='formcontainer'>
                  <form style={{display: "grid", gap: "20px",}}>
                      <div >
                      <label className="labelclass" for="res-date">Choose date</label>
                      <div className='inputdiv'>
                      <input className='inputsel' type="date" id="res-date"/>
                      </div>
                      </div>
                      <div>
                      <label className="labelclass" for="res-time">Choose time</label>
                      <div className='inputdiv'>
                      <select className='inputsel' id="res-time ">
                          <option>17:00</option>
                          <option>18:00</option>
                          <option>19:00</option>
                          <option>20:00</option>
                          <option>21:00</option>
                          <option>22:00</option>
                      </select>
                      </div>
                      </div>
                      <div >
                      <label className="labelclass" for="guests">Number of guests</label>
                     <div className='inputdiv'>
                     <input className='inputsel' type="number" placeholder="1" min="1" max="10" id="guests"/>
                     </div>
                      </div>
                      <div>
                      <label className="labelclass" for="occasion">Occasion</label>
                          <div className='inputdiv'>
                          <select className='inputsel'  id="occasion">
                              <option>Birthday</option>
                              <option>Anniversary</option>
                          </select>
                          </div>
                      </div>
                      <div className='booknow'>
                      <Button>Book Now</Button>
                      </div>
                    </form>
            </div>
        </div>
    </>
  )
}

export default BookingPage