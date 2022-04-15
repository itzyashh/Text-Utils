import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpperCaseClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
    }

    
    let textLength = text.trim().split(/\s+/).length
    return (
        
        <div className={`${props.mode === ''?'dark':''} `}>
        <div className=" flex justify-center dark:bg-gray-900 h-full">
            <div className="mb-52 xl:w-4/6">
                <h1 className="mt-5 mb-3 text-3xl font-semibold dark:text-cyan-100">{props.heading}</h1>

                <textarea
                    className=" form-control block w-full px-3   py-1.5    text-base font-normal  text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-800 dark:text-green-300 dark:focus:border-green-400
        "
                    id="exampleFormControlTextarea1"
                    rows="8"
                    placeholder="Enter text here"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
                
                <button type="button" className="btn -ml-0 " onClick={handleUpperCaseClick} >Convert to Uppercase</button>
                <button className="btn" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn" onClick={handleCopy}>Copy Text</button>
                
                <button className="btn" onClick={handleExtraSpaces}>Remove space</button>

                    <h1 className=" mb-3 text-2xl font-semibold dark:text-green-200">Your text summary</h1>
                <div className="dark:text-green-400">
                    <p>{(text.length === 0 ? textLength = 0 : textLength)} words and {text.length} characters</p>
                </div>
                    <h2 className="text-2xl font-semibold dark:text-green-200">Preview</h2>
                    <p>{text}</p>
            </div>
        </div>
        </div>
        
    )
}
