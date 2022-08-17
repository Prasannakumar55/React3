import React,{useState} from "react";
import './Form.css'

export function Form() {
  const [store,setStore] = useState({name:'',department:'',rating:''});
  
  const [out,setOut] = useState([]);
  const [sub,setSub] = useState(false);
  let input = (e) =>{
    let name = e.target.name;
    let inputValue = e.target.value; 
    setStore({...store,[name]:[inputValue]});
  }
  const submitted = (e) => {
    e.preventDefault();
    setOut([...out,{...store,id:out.length}]);
    setSub(true);
  }
  return (
<>
<div>
{sub ? null : <div className="container">
        <h1>EMPLOYEE FEEDBACK FORM</h1> <br /> 
      <form onSubmit={submitted}>
        <label >Name :</label>
        <input className="box" type="text" onChange={input} name='name' placeholder="Enter Name.." />
        <br /> <br /> 
        <label  >Department :</label>
        <input className="box" type="text" onChange={input} name='department' placeholder="Field" />
        <br /> <br /> 
        <label className="box"  >Rating :</label>
        <input type="text" onChange={input} name='rating' placeholder="Out of 5" maxLength={1} minLength={1} />
        <br /> <br />
        
        <button className="Submit">Submit</button>
        
      </form>
      </div>}
      
        {(sub ? <><div className="information">
        {out.map((ele)=>(
          <h3 className="information1" key={ele.id}>
          Name : {ele.name} || Department : {ele.department } || Rating : {ele.rating}
          </h3>))}
        </div> <br/>
        <button className="Back" onClick={()=>{setSub(!sub)}}>Go Home</button></> : null)}
    </div>
    </>
  );
}