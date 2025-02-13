import React,{useState} from 'react'



export default function TextForm(props) {
    let handel = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }
    let handel2 = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    let handel3 = () => {
      if(text!=="") {
        let randomnumnber = Math.floor(Math.random() *100)+1;
        let newText = '@'+text+randomnumnber+'.gmail.com';
        setText(newText)
      }
    }
    let handel4 = () => {
      setText("");
  }
    let handelChange = (event) => {
        console.log("Uppercase was click");
        setText(event.target.value);
    }
    let handelspeak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text= text;
      window.speechSynthesis.speak(msg);
    }
    
    const [text, setText]= useState(" ");
  return (
    <>
<div className="mb-3">
  <label htmlFor="Mybox" className="form-label">{props.text}</label>
  <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handelChange}></textarea>
  <button id='Btn1' className="btn btn-primary"onClick={handel}>Convert to uppercase</button>
  <button id='Btn2' className="btn btn-primary"onClick={handel2}>Convert to Lowercase</button>
  <button id='Btn2' className="btn btn-primary"onClick={handel3}>Convert to Email user Name</button>
  <button id='Btn2' className="btn btn-primary"onClick={handel4}>Clear text area</button>
  <button id='Btn2' className="btn btn-primary"onClick={handelspeak}>Speak buttton</button>
</div>
<div className="container">
  <h1>Your text summery</h1>
  <p>Total words <b>{text===""?0:text.trim().split(" ").length}</b> Total Characters <b>{text.length}</b></p>
  <p><b>{text===""?0:0.008*text.split(" ").length}</b> Minutes to read</p>
</div>
</>
  )
}
  