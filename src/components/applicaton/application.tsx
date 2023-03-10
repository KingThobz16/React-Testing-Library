import React from 'react'

const Application = () => {
  return (
    <>
    <h1>Job application form</h1>
    <h2>Section 1</h2>
    <p>All fields are mandatory</p>
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder={"Fullname"}/>
        </div>
        <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" placeholder='bio'/>
        </div>
        <div>
            <label htmlFor="job-location">Job location</label>
            <select id="job-location">
                <option value="">Select a country</option>
                <option value="US">United states</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
                <option value="AU">Australia</option>
            </select>
        </div>
        <div>
            <label>
                <input type="checkbox" id="terms"/>
                I agree with the terms and conditions
            </label>
        </div>
        <button>Submit</button>
    </form>
    </>
  )
}

export default Application