import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleUpperCaseClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerCaseClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
    }
    let textLength = text.split(" ").length
    return (
        <><div className="container flex justify-center">
            <div className="mb-3 xl:w-4/6">
                <h1 className="mt-5 mb-3 text-3xl font-semibold">{props.heading}</h1>

                <textarea
                    className=" form-control block w-full px-3   py-1.5    text-base font-normal  text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                    id="exampleFormControlTextarea1"
                    rows="8"
                    placeholder="Enter text here"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
                <button type="button" className="m-4  -ml-0 text-white  bg-blue-700 hover:bg-blue-600 text-sm px-5 py-2.5 mr-2 rounded-md " onClick={handleUpperCaseClick} >Convert to Uppercase</button>
                <button className="m-4 mr-2 text-white bg-blue-700 hover:bg-blue-600 text-sm px-5 py-2.5 rounded-md " onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <div className="">
                    <h1 className=" mb-3 text-2xl font-semibold">Your text summary</h1>
                    <p>{textLength} words and {text.length} characters</p>
                    <h2 className="text-2xl font-semibold">Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
        </>
    )
}
