import React from "react";
import axios from "axios";

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { st_id:"",name1:"",photo:"",st_name:"",st_photo:""}

    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
      }  
 

    

    componentDidMount() {
        var c = JSON.parse(localStorage.getItem("st_id"))
        var p = JSON.parse(localStorage.getItem("st_name"))
        var t = (localStorage.getItem("st_photo"))
        this.setState({ st_id: c })
        this.setState({ st_name: p })
        this.setState({ st_photo: t })
        console.log(c)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let myformdata = new FormData();
        myformdata.append("st_id", this.state.st_id)
        myformdata.append("st_name", this.state.name1)
        myformdata.append("st_photo", this.state.photo)
        console.log(this.state.st_id)
       

        var uid = this.state.st_id

        axios.get(`https://akashsir.in/myapi/crud/student-detail-api.php?st_id=${uid}`)
            .then(function (response) {
                console.log(response.data)
                if (response.data.flag == '1') {
                    alert("Welcome")
                    

                } 
            })

    }

    render() {
        return (
            <>  
            name : <input type="text" name="name11" value={this.state.st_name} readOnly/> <br/><br/>
          
            <input type="image" src={JSON.stringify(this.state.st_photo)} /> 
            
            
            
            
            <h1>update here</h1>
            <form onSubmit={this.handleSubmit}>
            Name:    <input type="text" name="name1" onChange={this.handleChange}/> <br/><br/>
            Gender:    <input type="radio" name="gender" value="male"onChange={this.handleChange}/>Male
                <input type="radio" name="gender" value="female" onChange={this.handleChange}/>Female<br/><br/> 
            Email:    <input type="email" name="email" onChange={this.handleChange}/> <br/><br/>
            Mobileno:    <input type="number" name="mobieno" onChange={this.handleChange}/><br/><br/> 
                <input type="file" name="photo" onChange={this.handleChange}/> <br/><br/>
                <br/>
            <input type="submit" value="click me"/>
            </form>
            </>

        )
    }

}
export default Profile;


