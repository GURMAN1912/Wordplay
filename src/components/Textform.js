import React, {useState} from 'react'
import Style from  './Textform.css';
export default function Textform(props) {
  const[text,setText]=useState("");
  const handleUpclick =()=>{
    console.log("Uppercase was clicked");
    let newtext= text.toUpperCase();
    setText(newtext); 
    props.showAlert("success","Converted to uppercase !");
  }
  const handleLowerclick =()=>{
    console.log("Lowercase was clicked");
    let newtext= text.toLowerCase();
    setText(newtext); 
    props.showAlert("success","Converted to lowercase !");
  }
  const handleClearclick=()=>{
    console.log("Clear Text was clicked")
    setText("");
    props.showAlert("success","Text cleared !");
  }
  const handleCopyclick=()=>{
    console.log("Copy");
    var text=document.getElementsByClassName("copy");
    // text.sel;
    text.setSelectionRange(0,999999999);
    navigator.clipboard.writeText(text.value);
  }
  const handleonchange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const handleExtraspace=()=>{
    let newtext=text.split(/[ ]+/)
    setText(newtext.join(" "));
    props.showAlert("success","Extra spaces removed !")
  }
  return (
    <div className='container' style={{color:props.mode==='dark'?'#ecb365':'black'}}>
      <div  className='head'><h2>{props.heading}</h2></div>
      <div > <textarea name="enter here" className='box' onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#04293A':'rgb(179, 210, 239)',color:props.mode==='dark'?'white':'black'}} value={text} cols="70" rows="8"></textarea></div> 
      <div  > <button onClick={handleUpclick} className='upper' style={{backgroundColor: props.mode==='dark'?'#064663':'#0D43CB',color:props.mode==='light'?'white':'#ecb365'}} >Convert to upper case</button>
      <button onClick={handleLowerclick} className='upper' style={{backgroundColor: props.mode==='dark'?'#064663':'#0D43CB',color:props.mode==='light'?'white':'#ecb365'}} >Convert to lower case</button>
      <button onClick={handleClearclick} className='upper' style={{backgroundColor: props.mode==='dark'?'#064663':'#0D43CB',color:props.mode==='light'?'white':'#ecb365'}} >Clear text</button>
      <button onClick={handleExtraspace} className='upper' style={{backgroundColor: props.mode==='dark'?'#064663':'#0D43CB',color:props.mode==='light'?'white':'#ecb365'}} >Remove extra space</button>      
      </div> 
      <p className="time">TIME TO READ: {0.008* text.split(" ").length} min</p>
      <h3 className="summary">YOUR TEXT SUMMARY</h3>
      <p className="data">WORDS:{text.split(" ").length}  AND  CHARACTER: {text.length}</p>
      <h3 className="preview">PREVIEW</h3>
      <p className="text">{text}</p>
    </div>
  )
}
