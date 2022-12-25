import React, { Component, /*creatRef*/ } from 'react';

class Forms extends Component {

    //constructor(props){
        //super(props);

        state = {
            firstName: " ",
            secondName: " "
        //};

        //this.inputOne = createRef();
        //this.inputTwo = createRef();
    }
    submit =()=>{
        console.log(this.state);
        //console.log(this.inputTwo.value);
    }

    value =(event)=>{
        //console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <h2>Forms Component</h2>
                <input type="text"
                 name = "firstName"
                 value={this.state.firstName}
                 onChange={this.value}
                 />
  
                <button type='button'
                onClick={this.submit}
>
                    Submit
                </button>
                
                <br></br>

                <input type="text" 
                name="secondName"
                value={this.state.secondName}
                onChange={this.value}
                //ref={input => this.inputTwo = input}
                />
                <button type='button'
                onClick={this.submit}>
                    Submit
                </button>
            
            </form>
        );
    }
}

export default Forms;