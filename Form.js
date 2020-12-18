import React from 'react';
import List from './List';

export default class Form extends React.Component {
   state={
       list:[]
   } 
   
     Submit = () => {
         let firstname=document.getElementsByTagName('input')[0].value
         let lastname=document.getElementsByTagName('input')[1].value
         let mobilenumber=document.getElementsByTagName('input')[2].value
         let emp={firstname,lastname,mobilenumber}
        this.setState({
            list: [...this.state.list,emp]
            
        });
      };
      
      render () {
            return ( 
                
        <div> First Name : <input type='text'/>
             <div> Last Name : <input type='text'/>
             <div> Mobile Number:<input/>
             <button onClick={this.Submit}>Submit</button><br/>
            
             <table>firstname    lastname    mobilenumber</table>
            
             </div>
             <List title={this.state.list} />
        
             </div>
        </div>
        )
    }
}