import React from 'react'
import { useEffect,useRef,useState } from 'react'

const UseRef1 = () => {
    const [value,setValue] = useState(0);
    const refContainer = useRef(null);
    const isMounted = useRef(false)

    const handelSubmit =(e) =>{
        e.preventDefault();
        console.log(refContainer.current);
        const name =refContainer.current.value;
        console.log(name);
    };
     useEffect(() => {
        refContainer.current.focus();
     });
     useEffect(()=>{
        if(!isMounted.current){
            isMounted.current =true;
            return;
        }                                  
        console.log('re-render');
     },[value])
      return (
    <div>
        <form className='form' onSubmit={handelSubmit}>
        <div>
            <label htmlFor='name' className='form-lable'>Name</label>
            <input type='text' id='name' ref={refContainer} className='form-input'/>
        </div>
        <button type='submit' className='btn'>Submit</button>
        </form>
        <h1>value:{value}</h1>
        <button onClick={() => setValue(value+1)} className='btn'> increase</button>
    </div>
  )
}

export default UseRef1