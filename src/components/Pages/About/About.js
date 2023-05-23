import React from 'react'

const About = (props) => {
  return (
        <>
        <div className='container'>
            <div class="grid">
                <h1>{props.heading}</h1>
                <div class="g-col-3">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                        />
                    </div>
                    <label for="inputPassword5" class="form-label">Password</label>
                    <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"/>

                </div>
            </div>
        </div>
  </>
  )
}

export default About