import React from "react";
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name1: ' ', list:[] }

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    handleClick = (event) => {
    event.preventDefault()  
        var c =this.state.name1
    
       const list = [this.state.list]
       list.push(c)
       
       this.setState({list,name1:""})


       


    
    //  deletItem(){

    //     const list = [this.state.list]

    //    const upadateList = list.filter(item => item.id !== key)
       
    //    this.setState({
    //     list:upadateList
    //    })
    //  }





    }


    render() {
        
        return (
            <>
                name:<input type="text" name="name1" onChange={this.handleChange} />
                <input type="submit" value="submit" onClick={this.handleClick} /><br/>
             
                  {map1}
            


            
            
            
            </>



        )
    }
}


export default Todo;