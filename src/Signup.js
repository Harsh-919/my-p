import React from "react";
import axios from "axios";
class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = { Signup: "" }
  }

  state = { name: "", gender: "", email: "", mobileno: "", password: "" }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()


    var myformData = new FormData()
    myformData.append("st_name", this.state.name);
    myformData.append("st_gender", this.state.gender);
    myformData.append("st_email", this.state.email);
    myformData.append("st_mobileno", this.state.mobileno)
    myformData.append("st_password", this.state.password)



    axios.post('https://akashsir.in/myapi/crud/student-add-api.php', myformData)
      .then(function (response) {
        console.log(response)
        if (response.data.flag == "1") {
          alert("Your Student Added Succesfully")
        }
      })

  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
       
            <h1>Sign in Here</h1><br />

         
             Person Name: 
               <input type='text' name="name" onChange={this.handleChange} /> 
            <br></br>


            
                 Gender:  
               <input type='radio' name="gender" value="Male" onChange={this.handleChange} />

                <label>Male</label>
                <input type="radio" name="gender" value="Female" onChange={this.handleChange} />
                <label>Female</label>
            <br></br>
           
                   E-mail: 

             <input type="e-mail" name="email" onChange={this.handleChange} />  

              <br></br>

             Mobile No: 

             <input type="number" name="mobileno" onChange={this.handleChange} /> 

                <br></br>
           
                     Password: 

              <input type="number" name="password" onChange={this.handleChange} /> 

           <br></br>
  
          <input type="file" name="file1" onChange={this.handleSubmit}/>
          <br/><br/>
          <input type="submit" value="submit" onChange={this.handleSubmit} />
         
        </form>
      </>
    )
  }


}
export default Signup