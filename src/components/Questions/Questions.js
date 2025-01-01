import React, {useState, useEffect} from 'react';
import "./questions.css";
import DataInfo from './DataInfo';
import Pagination from '../Pagination/Pagination';
import Fade from "react-reveal/Fade";

const Questions = () => {

    const url = "https://jsonplaceholder.typicode.com/posts";

    const [data, setData] = useState([]);

    const PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageClick = ({selected: selectedPage})=>{
        setCurrentPage(selectedPage)
    }
    
    const offset = currentPage * PER_PAGE;
    const currentPageData = data.slice(offset,offset+PER_PAGE);
    const pageCount = Math.ceil(data.length/PER_PAGE);

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
    <div className='container questions-section' id='questions'>
        <Fade top>
        <div className='section-title'>
            <h2>Pytania - FAQ</h2>
            <span className='line'></span>
        </div>
        </Fade>
        <Fade right>
        <div className='center-slider-text'>
            <div className='about-text col-xl-9 col-lg-10 col-md-10 col-sm-12 col-12 slider-text'>
                <h6>Poniżej znajduje się FAQ - czyli lista najczęściej zadawanych przez klientów pytań wraz z odpowiedziami. Pytania są importowane z zewnętrznego API na potrzeby tego projektu.
                </h6>
            </div>
        </div>
        <div className='row center-questions'>
            {data && currentPageData.map((item, index)=>(
                <div className='col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12'>
                    <DataInfo title={item.title} body={item.body}/>
                </div>
            ))}
        </div>
        </Fade>
        <Fade bottom>
        <div className='pagination-details'>
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick}/>
        </div>
        </Fade>
    </div>
  )
}

export default Questions