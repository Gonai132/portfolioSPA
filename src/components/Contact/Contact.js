import React,{useState} from 'react'
import "./contact.css"
import Fade from "react-reveal/Fade";
import contact from "../../img/contact/contact.png";
import { TbMessageFilled } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import "../../../node_modules/react-toastify/dist/ReactToastify.css"


const Contact = () => {

    const[name,setName] =useState();
    const[email,setEmail] =useState();
    const[servicetype,setServiceType] =useState();
    const[message,setMessage] =useState();

    const sendEmailInfo = ()=> {
        fetch("http://localhost:8080/sendemail", {method: "POST", headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }, body:JSON.stringify({
            name,email,servicetype,message
        }) }).then(res=>res.json())
        .then((result)=>{

            if(result.error){
               toast.error(result.error, {
                position: toast.POSITION.TOP_RIGHT,
               });

            } else {

                toast.success(result.success, {
                    position: toast.POSITION.TOP_RIGHT,
                   });

                setName("");
                setEmail("");
                servicetype("");
                setMessage("");
            }

        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='container contact-section' id='contact'>
         <Fade top>
               <div className='section-title'>
                    <h2>Kontakt</h2>
                    <span className='line'></span>
                </div>
                </Fade>
        <div className='row center-contact'>
        <Fade left>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                <div className='image-class'>
                    <img src={contact}/>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
               <div className='contact-form-design'>
                <div className='text-center'>
                    <h5><TbMessageFilled size={25}/> Skontaktuj się ze mną</h5>
                </div>
                <form>
                    <div className='contact-form'>
                        <label className='form-label'>Imię: </label>
                        <input type='text' placeholder='Twoje imię' value={name} onChange={(e)=>setName(e.target.value)} required></input>
                    </div>
                    <div className='contact-form'>
                        <label className='form-label'>E-mail: </label>
                        <input type='text' placeholder='Twój e-mail' value={email} onChange={(e)=>setEmail(e.target.value)}  required></input>
                    </div>
                    <div className='contact-form'>
                        <label className='form-label'>Usługa: </label>
                        <select className='custom-select' value={servicetype} onChange={(e)=>setServiceType(e.target.value)} required>
                            <option>Zapytanie o projekt</option>
                            <option>Istniejące projekty</option>
                            <option>Współpraca</option>
                            <option>Inne</option>
                        </select>
                    </div>
                    <div className='contact-form'>
                        <label className='form-label'>Wiadomość: </label>
                        <textarea type='text' placeholder='Twoja wiadomość' rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
                    </div>
               </form>
               <div className='button-form' onClick={sendEmailInfo}><p>Wyślij</p></div>
               </div>
            </div>
            </Fade>

        </div>
        <ToastContainer autoClose={8000} />
    </div>
  );
}

export default Contact