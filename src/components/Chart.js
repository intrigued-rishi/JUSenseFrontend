import React,{useState, useEffect} from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";

Chart.register(CategoryScale);

export default function ChartDisplay() {
    const [chartData, setChartData] = useState({
        labels: [], 
        datasets: [
          {
            label: "Yearwise Accidents",
            data: [],
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#C9DE00",
              "#50AF95"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
    useEffect(() =>{  
        axios({
            url: '/year',
            method: 'GET',
        }).then((res)=>{
            console.log(res.data);
            let result=res.data;
            let updated_labels=[],updated_data=[]
            result.forEach(element => {
              updated_labels.push(element['_id']);
              updated_data.push(element['count']);
            });
            let updatedChartData={
              labels: updated_labels, 
              datasets: [
                {
                  label: "Yearwise Accidents",
                  data: updated_data,
                  backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#C9DE00",
                    "#50AF95"
                  ],
                  borderColor: "black",
                  borderWidth: 2
                }
              ]
            }
            setChartData((chartData)=>{
              return ({
                ...chartData,
                ...updatedChartData
              });
            });
            
        }).catch((err)=>{
            console.log(err);   
        });
    },[]);
    useEffect(()=>{

    });
 
  return (
    <div style={{}}>
      <PieChart chartData={chartData} />
    </div>
  );
}