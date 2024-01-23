const Numbers = ()=>{
    const numbers = [2,13,12,145,15,16,2,7,4,8,2]
    return(
        <ul>
            {numbers.filter(nr=> nr%2 == 0).map((nr,idx) =>{
                return (
                    <li key={idx}> {nr} </li>
                )
            })}
        </ul>
    )
}
export default Numbers