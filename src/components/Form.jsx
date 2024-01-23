import { useState } from "react"
import style from './Form.module.css'
const Form = (props)=>{
    const{Users,SetUsers} = props;
    const [UserName,setUserName] = useState()
    const [Email,setEmail]=useState()
    const btnStyle = {
        padding: '12px 15px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
        color: '#fff',
        border: 'none'
    };
    const Register =(e)=>{
        e.preventDefault();
        const user = {
            UserName,
            Email
        }
        SetUsers([...Users,user])
        setUserName("")
        setEmail("")
    }
    return(
        <>
        <form onSubmit={Register}>

            <div>
                <label htmlFor="">UserName:</label>
                <input type="text" value={UserName} onChange={(e)=> setUserName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Email:</label>
                <input type="text"  value={Email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <input type="submit" className={style.btn} value={ "register"} />
        </form>

        </>
    )
}

export default Form