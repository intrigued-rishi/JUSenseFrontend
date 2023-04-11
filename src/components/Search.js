import React,{useState, useEffect} from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';


function Search() {

  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [date1,setDate1] = useState("");
  const [date2,setDate2] = useState("");
  const [appointmentdata,setAppointmentdata] =useState([]);

  const handleStateInput = (e) => {
    setState(e.target.value);
    // console.log(e.target.files[0]);
  }
  const handleCityInput = (e) => {
    setCity(e.target.value);
    // console.log(e.target.files[0]);
  }
  const handleDate1Input = (e) => {
    setDate1(e.target.value);
    // console.log(e.target.files[0]);
  }
  const handleDate2Input = (e) => {
    setDate2(e.target.value);
    // console.log(e.target.files[0]);
  }


  useEffect(() =>{  
    
  },[]);


  const handleFileInput=(e)=>{
    setSelectedFile(e.target.files[0]);
    
  }
  const uploadImage = () => {
      console.log(date1,date2);
      const data = new FormData()
      console.log(date1,date2,city,state);
      data.append("file", selectedFile);
      data.append("date1",date1);
      data.append("date2",date2);
      data.append("city",city.toLowerCase());
      data.append("state",state.toLowerCase());

      axios({
        method:'post',
        url:"/getFilteredData",
        data:data
      }).then((res)=>{
        setAppointmentdata(JSON.parse(res.data.result));
        console.log(res.data.result);
      });
  }
  

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  return (
    <>
        <Form class="text-center" style={{width:"70%",margin:"auto"}}>

            <Form.Label htmlFor="location">State</Form.Label>
            <Form.Control
                type="text"
                id="state"
                aria-describedby="passwordHelpBlock"
                onChange={handleStateInput}
            />
            <Form.Label htmlFor="location">City</Form.Label>
            <Form.Control
                type="text"
                id="city"
                aria-describedby="passwordHelpBlock"
                onChange={handleCityInput}
            />
            <Form.Label htmlFor="date1">From Date</Form.Label>
            <Form.Control
                type="date"
                id="date1"
                aria-describedby="passwordHelpBlock"
                onChange={handleDate1Input}
            />
            <Form.Label htmlFor="date2">To Date</Form.Label>
            <Form.Control
                type="date"
                id="date2"
                aria-describedby="passwordHelpBlock"
                onChange={handleDate2Input}
            />
            <label className="form-label" for="customFile">Accident Image:</label>
            <input type="file" onChange={handleFileInput} fclass="form-control" id="customFile"/>  
            <button type="button" class="btn btn-secondary btn-rounded my-2" onClick={uploadImage}>Submit</button>
        </Form>
        <Table striped bordered hover>
          <thead style={{position: "sticky", top: "0",backgroundColor:"darkgray"}}>
            {
              appointmentdata!=null &&
              <tr style={{position: "sticky", top: "0"}}>
                <th class="text-center"><h3>Date</h3></th>
                <th class="text-center"><h3>Title</h3></th>
                <th class="text-center"><h3>Link</h3></th>
              </tr>
            }
          </thead>
          <tbody>
          {
              appointmentdata && appointmentdata.map((appointment,index)=>{
                // console.log(curtime+" "+appointment.book_time)
              return(
                <>
                  <tr key={appointment._id}>
                    <td className="text-center" style={{width:"10%"}}><strong>{convert(new Date(appointment.date))}</strong></td>
                    <td className="text-center"><strong>{appointment.title}</strong></td>
                    {/* <td className="text-center"></td> */}
                    <td className="text-center"><strong><a href={appointment.url} target="_blank">More Info</a></strong></td>
                    {/*<td className="text-center">More</td>*/}
                  </tr>   
                </>
            )})
          
          }               
          </tbody>
        </Table>
    </>
  );
}

export default Search;
