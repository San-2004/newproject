import React, { Component } from 'react'



class App extends Component{
  render(){
    const data = [
      {name:"san",age:23,gender:"male"}
    ]

    return(
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {data.map((val,key)=>{
            return(
              <tr key = {key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}

                  
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}


export default App
