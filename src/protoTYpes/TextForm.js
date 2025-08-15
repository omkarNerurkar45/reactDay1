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

    const handleDwnClick = ()=>{
        console.log( "down handle is clicked" );
        const nextText = text.toLowerCase();
        setText( nextText );
    }

    const [text, setText] = useState("Enter your text");
  return (
    <>
     <div className="container">
        <div className="mb-3">
            <h1>{props.headings}</h1>
            <textarea className="form-control my-3" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
        <button type="button" className="btn btn-success mx-3" onClick={handleDwnClick}>LowerCase</button>
    </div>
    <div className="container my-4">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
    </div>
    </>
  )
}
