import React, {Component} from 'react'
import axios from './axios';
import { connect } from "react-redux";
import { userDetails } from "./action/index";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './App.css';
import { USER_DETAILS } from './action/types';


class Tab1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userDetails: []
        };
    }

    test=(u)=>{
      this.props.dispatch({type:'USER',payload:u});
      this.props.history.push('/Tab2')
    }
    

    render() {
        return (
      <Table>
          <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>FIRST NAME</TableCell>
          </TableRow>
        </TableHead>
        
              <TableBody>
                {this.props.userDetails.map(u=>(
                  
                  <TableRow className="table-click" key={u.id} onClick={()=>this.test(u)}>
              <TableCell component="th">
                {u.id}
              </TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.first_name}</TableCell>
            </TableRow>
                ))}
              </TableBody>
      </Table>
             );
}
}
const mapStateToProps = state => {
  return {
    userDetails: state.UserDetails
  };
};


export default connect(mapStateToProps)(Tab1);