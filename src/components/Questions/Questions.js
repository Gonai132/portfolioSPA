import React, {useState, useEffect} from 'react';
import "./questions.css"

const Questions = () => {

    const url = "https://jsonplaceholder.typicode.com/posts";

    const [data, setData] = useState([]);

    const loadPostData = ()=>{

        fetch(url, {
            method: "GET"
        }).then(res=>res.json())
        .then((result)=>{

            if(result){
                setData(result);
            }

        }).catch((err)=>{
        console.log(err);
    });
    }

    useEffect(()=>{
        loadPostData();
    },[]);

  return (
    <div className='container questions-section'>
        <div className='section-title'>
            <h2>Pytania - FAQ</h2>
            <span className='line'></span>
        </div>
        <div className='row'>
            {data && data.map((item, index)=>(
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                    <h5>{item.title}</h5>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Questions