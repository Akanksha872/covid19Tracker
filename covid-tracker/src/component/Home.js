import React, { useEffect, useState } from 'react';
import SearchBar from './Search-bar';
import CovidTable from './Covid-table';
import Box from './Box';
import '../style/Home.css'

function Home(props) {
    let [apiData, setApiData]=useState([]);
    let [loading, setLoading]= useState(true);
    let [hasError, setError]= useState(false);
    let [totalCount, setTotalCount]=useState([]);
    let [isState, setIsState]=useState(false);

    const boxTextList=[
        'Total Confirmed',
        'Active',
        'Recovered',
        'Deceased'
    ];

    useEffect(()=>{
        fetch('https://api.covid19india.org/v4/min/data.min.json')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(props.state, 'props');
            if(props.state){
                setTotalCountInArray(data[props.state].total);
                setApiData(data[props.state].districts);
                setIsState(true);
            }else{
                
            setTotalCountInArray(data.TT.total);
            setApiData(data);
            setIsState(false);
            }
            setLoading(false);
        })
        .catch(err=>{
            setError(true);
            setLoading(false);
        });
    },[])


    function setTotalCountInArray(data){
        let count = [];
        count.push(data.confirmed);
        count.push(data.tested);
        count.push(data.recovered);
        count.push(data.deceased);
        setTotalCount(count);

    }

   return (
       !loading && <div>
             <SearchBar></SearchBar>
             <div className="box-list">
                 {boxTextList.map((text, index)=>{
                return  <Box key={index} text={text} number={totalCount[index]}></Box>
             })}
             </div>
             <CovidTable isStateData={isState} data={apiData}></CovidTable>
             
        </div>);
}

export default Home;