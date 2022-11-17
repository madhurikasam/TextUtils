import React,{useState} from 'react'


export default function TextForm(props) {
     
    const [text,setText]=useState('');
    const HandleUpcase=()=>{
       let newtext=text.toUpperCase();
       setText(newtext);
       props.setalert("Converted to uppercase","success"); 
    }
    const HandleLowcase=()=>{
        let newtext1=text.toLowerCase();
        setText(newtext1);
        props.setalert("Converted to Lowercase","success");
     }
     const Handleclear=()=>{
        
        setText("");
        props.setalert("Text is cleared","success");
     }
     const HandleExtraspaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.setalert("Removed Extra Spaces","success");
     }
    const Handleonchange=(event)=>{
        setText(event.target.value);
        
    }
    const HandleCopy=()=>{
        // var text=document.getElementById("mybox");
        // text.select();
        // document.getSelection().removeAllRanges(); 
        navigator.clipboard.writeText(text);
        props.setalert("Text has been copied","success");
    }
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
         <h2>{props.heading}</h2>
        <div className="mb-3">
            {/* <label htmlFor="mytext" class="form-label">{props.heading} </label> */}
            <textarea className="form-control" value={text} onChange={Handleonchange} id="mybox" rows="6 "></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleUpcase}>Convert to UpperCase</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleLowcase}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Handleclear}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleExtraspaces}>Remove Extra Spaces</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`} >
        <h2>your text summary</h2>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
        <p>read in {0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
