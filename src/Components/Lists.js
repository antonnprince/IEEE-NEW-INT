import React, { PureComponent } from 'react';

class lists extends PureComponent {

    state = {

        score: 5,

        data:[
            {
                id:1,
                name:"John",
                age:45
            },

            {
                id:2,
                name:"Ramu",
                age:30
            }
        ]
    }

    increament =()=>{
        this.setState({
            score: 10
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map((value,index)=>(
                        <li key = {value.id}>{value.name}</li>
                    ))}
                </ul>

                <button onClick={this.increament}>Increz</button>
            </div>
        );
    }
}

export default lists;