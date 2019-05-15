
import React from 'react';
import axios from './axios';
import FriendButton from './friendbutton';

export default class OtherProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }



    componentDidMount(){
        console.log('componentDidMount OK');
        axios.get('/users/' + this.props.match.params.id).then(({data})=>{
            console.log("data from DidMount Other profile",data );
            if( data.sessionId == this.props.match.params.id){
                this.props.history.push('/');
            } else{
                this.setState(data);

            }
        }
        );

    }
    render (){
        return(

            <div className= "other-users-container">
                <FriendButton
                    otherUserId = {this.props.match.params.id}/>
                <h3>Others users: </h3>
                Name: {this.state.firstname} {this.state.lastname}
                <br/>
                Pic of the ohter user: <img src= {this.state.imgurl}/>
                <br/>
                Bio of the other user: {this.state.bio}

            </div>
        );

    }
}
