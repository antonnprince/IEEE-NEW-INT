import React, { Component } from 'react';
import "./Ieee.css";
import axios, { Axios } from 'axios';

class Eeee extends Component {
    state = {
        username:" ",
        email: " ",
        phone:" ",
        opinions:" ",
        results:[]
    }

    submit =(event)=>{
        //console.log(this.state);
        const {username,email,phone,opinions} = this.state;
        const getresults = this.state.results;

        getresults.push(username,email,phone,opinions);

        this.setState({
            results: getresults,
        });

        console.log(this.state.results);

        axios.post("http://mint-forms.ieee-mint.org/api/form/addresponse?formld=task ",{getresults})
        .then(res=>{
            console.log(res.data)
        })
    }

   erase=()=>{
        this.setState({
            results:""
        });
        console.log(this.state.results);

    }

    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        }); 
    }


    render() {

        const {username,email,phone,opinions} = this.state;

        //console.log(results);

        return (
            <div className="main">
             
                    <form className="input-section">
                        <h1>Fill out the form to be a part of IEEE Kerala Section</h1>
                        <ul>
                            <li>
                                <h3>Name</h3>
                                <input type="text" 
                                value={username}
                                name = "username"
                                onChange={this.handleChange}
                                placeholder='Enter Name' />
                            </li>
                            <li>
                                <h3>Email</h3>
                                <input type="text" 
                                value={email}
                                name = "email"
                                onChange={this.handleChange}
                                placeholder='you@company.com' />
                            </li>
                            <li>
                                <h3>Phone Number</h3>
                                <input type="text" 
                                value={phone}
                                name = "phone"
                                onChange={this.handleChange}
                                placeholder='+(91)-xxx-xxxxxxx' />
                            </li>
                            <li>
                                <h3>How Can We Help?</h3>
                                <input type="text"
                                value={opinions} 
                                name = "opinions"
                                onChange={this.handleChange}
                                placeholder="We're always here to help..." />
                            </li>
                            <li>
                            
                            </li>
                        </ul>
                    </ form>
                     
                <div className='table-stuff'>
                <table cellPadding='5px'>
                            <tbody>
                                <tr>
                                <td><input type="checkbox" /><label>Website design</label></td>
                                <td><input type="checkbox" /><label>Content Creation</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /><label>UI/UX Designing</label></td>
                                <td><input type="checkbox" /><label>Other features</label></td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                        <div className='submit-button'>
                        <button 
                            type="submit"
                            onClick={this.submit}
                            //onClick={this.erase}
                            > Send message</button>
                        </div>
                </div>
                
        );
    }
}

export default Eeee;