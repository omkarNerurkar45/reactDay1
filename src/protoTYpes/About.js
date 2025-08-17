import React, { useState } from 'react'

export default function About() {
    const [mystyle, setmyStyle] = useState(
        {
            color: 'black',
        backgroundColor: 'white'
        }
    )

    const handleUpClick =()=>{
        if( mystyle.color === 'white' ) {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setmyBtn("Enable Dark Mode");
        } else {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setmyBtn("Enable Light Mode");
        }
    }

    const [myBtn, setmyBtn] = useState("Enable Dark Mode");

  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" style={mystyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" style={mystyle} aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" style={mystyle} aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" style={mystyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" style={mystyle} aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>{myBtn}</button>
    </div>
  )
}
