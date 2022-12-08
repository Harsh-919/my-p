import React from "react";
import axios from "axios";
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: "",password:"" }
    }

    state = { email: "", password: "" }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
event.preventDefault()



        var myformdata = new FormData();
        myformdata.append("st_email", this.state.email)
        myformdata.append("st_password", this.state.password)


        axios.post("https://akashsir.in/myapi/crud/student-login-api.php", myformdata)
            .then(function (response) {
                console.log(response)
                if (response.data.flag === '1') {
                        alert("Suceessfully Login");
                    var a = response.data.st_id
                    var b = response.data.st_name
                    var c = response.data.st_gender
                    var d = response.data.st_email
                    var e = response.data.st_mobileno
                    var f = response.data.st_photo

                    localStorage.setItem("st_id",JSON.stringify(a))
                     localStorage.setItem("st_name",JSON.stringify(b))
                    // localStorage.setItem("st_gender",JSON.stringify(c))
                    //  localStorage.setItem("st_email",JSON.stringify(d))
                    // localStorage.setItem("st_mobileno",JSON.stringify(e))
                    // localStorage.setItem("st_photo",JSON.stringify(f))
                        
                }else{
                    alert("You Entered Wrong Email or Password")
                }


            })





    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              
                    <h1>Login Here</h1>
                    <br></br>
   
                        Email: 
                         <input type="email" name="email" onChange={this.handleChange} /> 

                        <br />
                         Password:
                          <input type="number" name="password" onChange={this.handleChange} /> 
                    
                            <br />
                  
                     <input type="submit" value="Submit"/>
                    
             
            </form>
        )
    }

}

export default Login