const Details = (props)=>{
    const {Users} = props
    const ShowUser = (e,UserName) =>{
        alert(UserName)
    }
    return(
        <ul>
            {
                Users.map((item,index) =>{
                    return(<li key={index}>
                        <h2>{item.UserName}</h2>
                        <p>{item.Email}</p>
                        <button onClick={(e) => ShowUser(e,item.UserName)}>Delete User</button>
                    </li>)
                })
            }
        </ul>
    )
}
export default Details