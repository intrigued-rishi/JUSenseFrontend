import React,{useState, useEffect} from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';


// const bucketName= 'ju-sense';
// const region= 'us-east-1';
// const accessKeyId= '';
// const secretAccessKey= '';

// aws.config.update({
//   accessKeyId:'',
//   secretAccessKey:''
// });

// const myBucket = new aws.S3({
//   params: { Bucket: bucketName},
//   region: region,
// })

function Verifier() {

  const [description,setDescription] =useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [name,setName] = useState("");
  const [metadata,setMetadata] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    setName(e.target.files[0].name);
    // console.log(e.target.files[0]);
  }

  useEffect(() =>{  
    
  },[]);


  const handleInputChange=(e)=>{
    console.log(e.target.value);
    setDescription(e.target.value);
    
  }
  const uploadImage = () => {
      const data = new FormData()
      data.append("text", description);
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
        url:"/extraction",
        data:data
      }).then((data)=>{
        console.log(data);
        setMetadata(data.data.result);
      });
  }
  
  // const submit=async (e)=>{

  //   const params = {
  //     ACL: 'public-read',
  //     Body: selectedFile,
  //     Bucket: bucketName,
  //     Key: name
  //   };

  //   myBucket.putObject(params).promise()
  //   .then((res)=>{
  //     var config = { headers: {  
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*'}
  //     }
  //     const img_url='https://ju-sense.s3.amazonaws.com/'+name;
  //     axios.post('/image',{'img':img_url},config)
  //     .then((res)=>{
  //       console.log(res);
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     });
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   });
  // }

  return (
    <>
        <Form class="text-center" style={{width:"70%",margin:"auto"}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Accident Description:</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleInputChange}/>
            </Form.Group>
            <label className="form-label" for="customFile">Accident Image:</label>
            <input type="file" onChange={handleFileInput} fclass="form-control" id="customFile"/>  
            <button type="button" class="btn btn-secondary btn-rounded my-2" onClick={uploadImage}>Submit</button>
        </Form>
        <div style={{width:"50%",margin:"auto"}}>
        {
          metadata && 
          <Accordion>
            {
              Object.keys(metadata).map((key,index) => (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{key}</Accordion.Header>
                  <Accordion.Body>
                    {metadata[key]}
                  </Accordion.Body>
                </Accordion.Item>
              ))
            }
          </Accordion> 
        }
        </div>  
    </>
  );
}

export default Verifier;
