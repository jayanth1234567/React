import { useState } from "react"
import data from "./assets/data"
function App(){

  const [selected, setselected]=useState(null)

  function handlesingleselection(getcurrentid){
    setselected(getcurrentid === selected ? (null) :getcurrentid)
  }

  return(
    <>
    <div className="wrapper">

    <div className="accordian">
        {
          data && data.length > 0 ? 
          data.map(dataItem=> <div className="item">
            <div onClick={()=>handlesingleselection(dataItem.id)}  className="title ">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              selected === dataItem.id ?(
              <div className="answer">{dataItem.answer}</div>)
              : null
            }
          </div>)
          : <div>no data is found</div>
        }
    </div>

    </div>
    </> 
  )
}

export default App
