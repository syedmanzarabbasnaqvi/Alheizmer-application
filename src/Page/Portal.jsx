import React from 'react'
import { useState } from 'react';
import axois from 'axios'
// import Image from '../../alheiz (1).jpg'

export default function Portal() {
  const auth = localStorage.getItem("auth-token")
    const [result, setResult] = useState("waiting for result or you haven't enter the picture");


    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const handleSubmit =async()=>{
        let form = new FormData()
        form.append('name','zaryab')
        form.append('image',file)
        console.log(form.get("name"))

        const req = await fetch("http://127.0.0.1:5000/uploads",{
            // mode: 'no-cors',
            method: "POST",
            body: form
          }).then(async function (res) {
            if (res.ok) {
              alert("Perfect! ");
              let data = await res.json()
              console.log(data)
              setResult(data.message)
            } else if (res.status == 401) {
              alert("Oops! ");
            }
          }, function (e) {
            alert("Error submitting form!");
          });
        //   const data = await req.json()
        //   console.log(data)
          
        

        
    }
    return (
        <>{auth &&( <div className='container-fluid mt-5'>
            <div className='container mt-5'>
            <div className='row main-frame'>
            
            <div className='col-sm-6 text-center p-3 part1 bg-light'>
                <h2 className=''>Add Image for Detection:</h2>

                <div className="input-group text-center d-flex justify-content-center">
                <div class="btn button btn-file">Choose Image <input onChange={handleChange} type="file"/></div>
                </div>
                
               {file &&( <div className='mt-2'>
                    Uploaded Image 
                <div className='text-center d-flex justify-content-center align-items-center' style={{ width: "100%" }}>
                    <img className='img-fluid w-25 image-border p-2 mt-3' src={URL.createObjectURL(file)} />
                </div>
                <button className='btn button mt-5' onClick={handleSubmit}>Upload for Detection</button>
                </div>)}

                {!file &&( <div>
                    If you want any further detection and reports First you have to Upload the Image
               
               
                </div>)}
            </div>
            <div className='col-sm-6 part2 text-left p-3'>
                <h1 className='text-left text-light'>Result :</h1>
                <div className='text-white'>{result}</div>
            </div>
        </div>
        </div>
        </div>)}
        {
          !auth && <h1 className='mt-5 pt-5'>access wont allowed</h1>
        }
        </>
    )
}
