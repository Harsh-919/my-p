import React from "react";
import axios from "axios";

class Changepassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = { st_id: "", opass: "", npass: "", cpass: "" }

    }
 

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        var c = JSON.parse(localStorage.getItem("st_id"))
        this.setState({ st_id: c })
        console.log(c)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let myformdata = new FormData();
        myformdata.append("st_id", this.state.st_id)
        myformdata.append("opass", this.state.opass);
        myformdata.append("npass", this.state.npass);
        myformdata.append("cpass", this.state.cpass);


        axios.post("https://akashsir.in/myapi/crud/student-change-password-api.php", myformdata)
            .then(function (response) {
                console.log(response)
                if (response.data.flag == '1') {
                    alert("Your Password Change Succesfully")
                    var a = response.data.opass
                    var b = response.data.npass
                    var c = response.data.cpass

                    JSON.parse(localStorage.getItem("st_id"))
                    localStorage.setItem("opass", JSON.stringify(a))
                    localStorage.setItem("npass", JSON.stringify(b))
                    localStorage.setItem("cpass", JSON.stringify(c))

                } else {
                    alert("Your Old Password Or New Password Wrong")

                }
            })

    }

    render() {
        return (
            < form onSubmit={this.handleSubmit}>

                    <h1>Change Password Here</h1>
                
                        Opass:
                        <input type="number" name="opass" onChange={this.handleChange.bind(this)} />
                 <br></br>
                        Npass:
                        <input type="number" name="npass" onChange={this.handleChange.bind(this)} />
                    <br></br>
                    
                        Cpass:
                        <input type="number" name="cpass" onChange={this.handleChange.bind(this)} />
                    <br/>
                    <input type="submit" value="submit" />
                
            </form>

        )
    }

}
export default Changepassword;






