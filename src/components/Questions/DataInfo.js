import React, {useState} from 'react';
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const DataInfo = ({title,body}) => {

  const [show, setShow] = useState(false)

  return (
    <div className={show ? 'post-card open' : 'post-card'} onClick={()=>setShow(!show)}>
        <div className='collapse-post'>
            <h6>{title}</h6>
            <p>
            {show ? <MdExpandLess size={"20px"} /> : <MdExpandMore size={"20px"}/> }
              </p>
        </div>
        {show ? <p className='faq-text'>{body}</p> : null}
    </div>
  );
};

export default DataInfo