export const Greet=(props)=>{
  
    return (
        <div>
        <h1>
            Welcome {props.name} fullname {props.fullname}
        </h1>
        {props.profile}
        </div>
    )
    
}

//export default Greet;