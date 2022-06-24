import React, { useState } from 'react'

export default function TextForm(props) {
    const handleClrText = () => {
        // console.log("Uppercase was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        props.showAlert("Converted to UPPERCASE","success");
        setText(newText);
    }
    
    const handleLowClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        props.showAlert("Converted to lowercase","success");
        setText(newText);
    }
    
    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All the extraspaces removed","success");
    }


    const handleOnChange = (event) => {
        // console.log("onChanged was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className='container' style={{color: (props.mode==='dark'?'white':'#060718')}}>
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: (props.mode==='dark'?'#090d1c':'white'),color: (props.mode==='dark'?'white':'#060718')}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
            </div>
            <div className="container my-3" style={{color: (props.mode==='dark'?'white':'#060718')}}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview."}</p>
            </div>
        </>
    )
}