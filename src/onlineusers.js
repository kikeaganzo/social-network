import React from 'react';
import {connect} from 'react-redux';


export class OnlineUsers extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        const {onlineUsers} = this.props.state;
        console.log('this.props from Onlineusers file', this.props.state);

        if(!onlineUsers){
            return null;
        }
        return (
            <div className="wannabes-container" ><h1>Users online</h1>
                {this.props.state.onlineUsers && this.props.state.onlineUsers.map(person=>{
                    return(
                        <div className="wannabes-container2" key={person.id}><p />
                            <h2>{person.firstname} {person.lastname}</h2>
                            <img className="pic-friends-and-wannabes" src= {person.imgurl}/>

                        </div>
                    );
                })}
            </div>
        );



    }
}

const mapStateToProps = state=> {
    return {state};
};
export default connect (mapStateToProps)(OnlineUsers);
