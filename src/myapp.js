import React from "react";
import axios from "axios";

class myapp extends React.Component{
    constructor(props){
        super(props)
        this.state = {st_id : ""}
    }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})

  }  

  componentDidMount(){
    var s =JSON.parse(localStorage.getItem("st_id"))
    this.setState({st_id})
    console.log(s)
  }

  handleSubmit = (event) => {
    event.prevent.default()

    let = myformdata = new FormData();
    myformdata.append("st_id",this.state.st_id)
    console.log(this.state.st_id)

    axios.post("",myformdata)
    .then((Response)  => {
        console.log(Response);
        if(Response.data.flag == "1"){

         localStorage.clear   
        alert("Account Deleted")
        }

    }) 
  }

render(){
    return(
        <>
        
        
        </>
    )
}


}