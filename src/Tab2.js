import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Styles from './App.css';
import { connect } from "react-redux";
import { userDetails } from "./action/index";
import { addUser } from "./action/index";
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';

class Tab2 extends Component {
  constructor(props) {
    super(props);
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const id = this.getTitle.value;
      const email =  this.getEmail.value;
      const first_name = this.getFirstName.value;
      const last_name = this.getLastName.value;
      const data = {
        id,
        email,
        first_name,
        last_name
      }
      this.props.dispatch(addUser(data));
      this.props.history.push('/Tab1');
      
    }

  render() {
    console.log(this.props.user);
    console.log(this.props.userDetails);

    return (
      <div>
      <React.Fragment>
        
        <form onSubmit={this.handleSubmit}>
        <FormControl>
        <label>
          Id:
          <input required type="text" ref={(input)=>this.getTitle = input} 
              placeholder="Enter the ID" defaultValue={this.props.user.id} />
        </label>
        </FormControl>
        <FormControl>
        <label>
          Email:
          <input type="text" defaultValue={this.props.user.email} ref={(input)=>this.getEmail = input} placeholder="Enter the Email" />
        </label>
        </FormControl>
        <FormControl>
        <label>
          First Name:
          <input type="text" defaultValue={this.props.user.first_name} ref={(input)=>this.getFirstName = input} placeholder="Enter the First Name" />
        </label>
        </FormControl>
        <FormControl>
        <label>
          Last Name:
          <input type="text" defaultValue={this.props.user.last_name} ref={(input)=>this.getLastName = input} placeholder="Enter the Last Name" />
        </label>
        </FormControl>
        <FormControl>
          <input type="submit" />
        </FormControl>
       
      </form>
        
        
      </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    userDetails: state.UserDetails,
    addUser: state.addUser
  };
};

export default connect(mapStateToProps)(Tab2);
