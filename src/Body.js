import React from 'react';
import Tab1 from './Tab1';
import Tab2 from  './Tab2';
import history from './history';
import Button from "@material-ui/core/Button";
import './App.css';
import {connect} from 'react-redux';
class Body extends React.Component {
  componentDidMount(){
    fetch(`https://reqres.in/api/users?page=2`).then(response=>response.json()).then((data)=> this.props.dispatch({
      type: "USER_DETAILS", 
      payload: data.data
  }));
  }
    render() {
        return (
            <div>
            <div className="title">Page Title</div>
            <Button color="inherit" onClick={this.myTab1}>
                User List
              </Button>
              <Button  color="inherit" onClick={this.myTab2}>
                User Profile
              </Button>
            </div>
        );
            
        }
        myTab1 = () => {
            history.push("/Tab1");
          };
          myTab2 = () => {
            history.push("/Tab2");
          };
    }

export default connect()(Body);
