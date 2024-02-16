import React , {useState}from 'react'

function UseStateIntro() {
    let [name, setName] = useState("r");
    let [text, setText] = useState("");
    
    const onChange = () => {
        setName("Ravi")
    }
    const handleText = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    const onChangeText = () => {
        setName(text);
        console.log(text);
        
    }
  return (
    <div>
      <h1>Heading</h1>
      <h2>mu name is : {name}</h2>
      <button onClick = {onChange}>click me rename</button>
      <br />
      <br />
      <label htmlFor="nameChange">Enter name</label>
      <input type="text" name="name" id="nameChange" onChange={handleText} />
      <button onClick = {onChangeText} >Submit</button>
    </div>
  )
}

export default UseStateIntro
