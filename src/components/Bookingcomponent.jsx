import React, { useState } from 'react';
import Button from './Button';

function Bookingcomponent({ formData, handleUserInput, availableTimes, handleSubmit }) {
    const [errors, setErrors] = useState({general:""});

    const validateForm = () => {
        const newerrors = {};

        // Check if date is present or upcoming
        const currentDate = new Date().toISOString().split('T')[0];
        if (!formData.reservedate || formData.reservedate < currentDate) {
          newerrors.reservedate = "Please select a valid date.";
        }

        // Check if number of guests is between 1 and 10
        if (!formData.guestnum || formData.guestnum < 1 || formData.guestnum > 10) {
          newerrors.guestnum = "Number of guests must be between 1 and 10.";
        }

        // Check if all fields are filled
        if (!formData.reservedate || !formData.reservetime || !formData.guestnum || !formData.occasion) {
          newerrors.general = "Please fill out all fields.";
        }

        setErrors(newerrors);

        // If there are no errors, submit the form
        if (Object.keys(errors).length === 0) {
            handleSubmit();
        }
    };

    return (
        <>
            <main className='formcontainer'>
                <form style={{ display: "grid", gap: "20px" }}>
                    <div>
                        <label className="labelclass" htmlFor="res-date">Choose date</label>
                        <div className='inputdiv'>
                            <input
                                name='reservedate'
                                className='inputsel dateinput'
                                type="date"
                                id="res-date"
                                value={formData.reservedate}
                                onChange={handleUserInput}
                                required
                            />
                            {errors.reservedate && <p className="error">{errors.reservedate}</p>}
                        </div>
                    </div>
                    <div>
                        <label className="labelclass" htmlFor="res-time">Choose time</label>
                        <div className='inputdiv inputsel'>
                            <select
                                className='inputsel'
                                id="res-time"
                                name="reservetime"
                                required
                                onChange={handleUserInput}
                            >
                                <option value="">Choose your preferred time</option>
                                {availableTimes.map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="labelclass" htmlFor="guests">Number of guests</label>
                        <div className='inputdiv'>
                            <input
                                className='inputsel'
                                value={formData.guestnum}
                                name="guestnum"
                                type="number"
                                placeholder='count'
                                min="1"
                                max="10"
                                id="guests"
                                onChange={handleUserInput}
                                required
                            />
                            {errors.guestnum && <p className="error">{errors.guestnum}</p>}
                        </div>
                    </div>
                    <div>
                        <label className="labelclass" htmlFor="occasion">Occasion</label>
                        <div className='inputdiv inputsel'>
                            <select
                                className='inputsel'
                                id="occasion"
                                onChange={handleUserInput}
                                required
                                name="occasion"
                            >
                                <option value="">Select an occasion</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                            </select>
                        </div>
                    </div>
                    {errors.general && <p className="error">{errors.general}</p>}
                    <div className='booknow'>
                        <Button onclick={validateForm}>Book Now</Button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default Bookingcomponent;