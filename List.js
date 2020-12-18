import React from 'react';
function List(props) {
  let item= props.title.map((i,index)=> {
    console.log(i)
       return <div key={index}>
          <span>{i.firstname}</span> <span>{i.lastname}</span> <span>{i.mobilenumber}</span>
          <button>Delete</button>
           </div>
      })  
 
    return (
        <div>
            {
            item            
            }
        </div>
    )
}

export default List
