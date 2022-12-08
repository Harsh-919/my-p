import React from "react";
import axios from "axios";
class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]:event.target.value });
  };

  signSubmit = (event) => {
    event.preventDefault();

    let myformdata = new FormData();
    myformdata.append("st_id", this.state.id);
    console.log(this.state.id)
    axios
      .post("https://akashsir.in/myapi/crud/student-delete-api.php", myformdata)
      .then( (response) => {
        console.log(response);
        if(response.data.flag == "1")
        {
            localStorage.clear()
            alert("account deleted")
        }

      })
      .catch( (response) =>  {
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <h1>Delete</h1>
      
        <br />
        <form onSubmit={this.signSubmit}>
          <label>
            Enter  ID : &nbsp;
            <input
              type="number"
              name="id"
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <br />
          <br />
          <button type="submit"> Delete account </button>
        </form>
      </>
    );
  }
}

export default Delete;
