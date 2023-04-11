import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Table from 'react-bootstrap/Table';


function DarkExample() {

  const [appointmentdata,setAppointmentdata] =useState([]);

  useEffect(() =>{  
    if(appointmentdata.length===0){
      axios({
        url: '/fetchAll',
        method: 'GET',
        }).then((res)=>{
        setAppointmentdata(JSON.parse(res.data.result));
        console.log(res.data.result);
      }).catch((err)=>{
        console.log(err);
      })
    }
  },[]);

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


  return (
    <Table striped bordered hover>
      <thead style={{position: "sticky", top: "0",backgroundColor:"darkgray"}}>
        <tr style={{position: "sticky", top: "0"}}>
          <th class="text-center"><h3>Date</h3></th>
          <th class="text-center"><h3>Title</h3></th>
          <th class="text-center"><h3>Link</h3></th>
        </tr>
      </thead>
      <tbody>
      {
          appointmentdata && appointmentdata.map((appointment,index)=>{
            // console.log(curtime+" "+appointment.book_time)
          return(
            
              <tr key={appointment._id}>
                <td className="text-center" style={{width:"10%"}}><strong>{convert(new Date(appointment.date))}</strong></td>
                <td className="text-center"><strong>{appointment.title}</strong></td>
                {/* <td className="text-center"></td> */}
                <td className="text-center"><strong><a href={appointment.url} target="_blank">More Info</a></strong></td>
                {/* <td className="text-center">More</td> */}
              </tr>      
        )})
      
      }               
      </tbody>
    </Table>
  );
}

export default DarkExample;