import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        const nextText = text.toUpperCase();
        console.log("UpperCase button was clicked");
        setText(nextText);
    }

    const handleOnChange = (event)=>{
        console.log("HandleOnChange was clicked");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter your text");
  return (
    <div>
      
        <div className="mb-3">
            <h1>{props.headings}</h1>
            <textarea className="form-control my-3" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
    </div>
  )
}
