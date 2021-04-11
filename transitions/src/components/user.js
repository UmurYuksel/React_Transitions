import React, { Component } from 'react';
import UserTemplate from './user_template';

import PropTypes from 'prop-types';

class User extends Component {
    
    state={
        name:'Francis',
        lastname:'Jones',
        age:25,
        mother:'Jane',
        Car:{Brand:'Opel', Model:'Astra'},
        color:'red'
    }
    
    //They advice us to use state instead of this.
    changeColor() {
    //   this.setState({
    //       color:'white'
    //   })

    this.refs.myColor.style.color='white'
    }    

    ///Passing whole states to the child component -->
    
    render() {
        const style = {
            background: 'green',
            color:this.state.color
        }
    
    
        return (
            <div>
                <h4 style={style} ref='myColor'>{this.state.mother}</h4>
                <div onClick={()=> this.changeColor()}>Change color</div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default User;