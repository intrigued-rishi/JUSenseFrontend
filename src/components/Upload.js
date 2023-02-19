import React,{useState, useEffect} from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';


function Uploader() {

  const [description,setDescription] =useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [name,setName] = useState("");

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    setName(e.target.files[0].name);
    // console.log(e.target.files[0]);
  }


  useEffect(() =>{  
    
  },[]);


  const handleInputChange=(e)=>{
    console.log(e.target.value);
    // setSelectedFile(e.target.files[0]);
    
  }
  const uploadImage = () => {
      const data = new FormData()
      data.append("file", selectedFile)
      // data.append("upload_preset", "kdanm5hs")
      // data.append("cloud_name","dsacngys7")
      // fetch("https://api.cloudinary.com/v1_1/dsacngys7/image/upload",{
      //   method:"post",
      //   body: data
      // })
      // .then(resp => resp.json())
      // .then(data => {
      //   console.log(data.url);
      // })
      // .catch(err => console.log(err))

      axios({
        method:'post',
        url:"/getRAPredictionFromImage",
        data:data
      });
  }
  


  return (
    <>
        <Form class="text-center" style={{width:"70%",margin:"auto"}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Accident Description:</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleInputChange}/>
            </Form.Group>
            <label class="form-label" for="customFile">Accident Image:</label>
            <input type="file" onChange={handleFileInput} fclass="form-control" id="customFile"/>  
            <button type="button" class="btn btn-secondary btn-rounded my-2" onClick={uploadImage}>Submit</button>
        </Form>
    </>
  );
}

export default Verifier;
