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

    const handleCpyClick = ()=>{
        navigator.clipboard.writeText(text)
        .then(() => {
            alert("Text is copied" + text)
        })
    }

    const handleRmvClick = () =>{
        const newText = text.replace(/\s+/g, ' ').trim()
        setText( newText )
    }
      
 
    const [text, setText] = useState(" ");
  return (
    <>
     <div className={"container my-5"} style={{color: props.mode === 'dark'?'white': 'black'}}>
        <div className="mb-3">
            <h1>{props.headings}</h1>
            <textarea className="form-control my-6" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#404449': 'white', color: props.mode === 'dark'?'white': 'black' }} value={text} id="exampleFormControlTextarea1" rows="15"></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleDwnClick}>LowerCase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleCpyClick}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleRmvClick}>Remove Extra Space</button>
    </div>
    <div className={`container`} style={{color: props.mode === 'dark'?'white': 'black'}} >
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
    </div>
    </>
  )
}
