import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import M from "materialize-css";


const ViewAppointment = () => {

  const navigate = useNavigate();
  const [appointmentdata,setAppointmentdata] =useState([]);

  useEffect(() =>{  
    if(appointmentdata.length===0){
      axios({
        url: '/fetchAll',
        method: 'GET',
        }).then((res)=>{
        setAppointmentdata(res.data);
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }
  },[]);

  return (
    <>
      <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 ">Upcoming Appointments</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="table-responsive">
                  <table /*className="table table-bordered table-hover table-hover text-center table-success table-striped"*/>
                    <thead /*className="thead-dark text-secondary"*/>
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        {/* <th>Expert Name</th> */}
                        <th>Mode</th>
                      
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      appointmentdata && appointmentdata.map((appointment,index)=>{
                        // console.log(curtime+" "+appointment.book_time)
                      return(
                        
                         <tr key={appointment._id}>
                            <td className="text-center"><strong>{appointment.date}</strong></td>
                            <td className="text-center"><strong>{appointment.title}</strong></td>
                            {/* <td className="text-center"></td> */}
                             <td className="text-center"><strong>{appointment.url}</strong></td>
                           
                            {/* <td className="text-center">
                              { 
                                appointment.mode==="audio" && 
                                <button className="btn btn-primary btn-sm" onClick={()=>(convert(new Date(appointment.book_date))==curdate && curtime>=appointment.book_time)?navigate(`/meet/audio/${appointment.link}`):M.toast({html: "Cannot join before time",classes: "#f44336 red",})}>
                                  Join
                                </button>
                              }
                              { 
                                appointment.mode==="video" && 
                                <button className="btn btn-primary btn-sm" onClick={()=>(convert(new Date(appointment.book_date))==curdate && curtime>=appointment.book_time)?navigate(`${appointment.link}`):M.toast({html: "Cannot join before time",classes: "#f44336 red",})}>
                                  Join
                                </button>
                              }
                              {
                                appointment.mode==="physical" &&
                                <a href={appointment.link} classtarget="_blank"><button
                                  className="btn btn-primary btn-sm"
                                >
                                  Address
                                </button></a>
                              }
                            </td> */}
                          </tr>
                          
                    )})}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        {/* )} */}
      </section>

       
    </>
  );
};

export default ViewAppointment;
