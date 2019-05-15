import React from "react";
import ProfilePic from "./profilepic";

import BioEditor from "./bioeditor";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log("{this.state.firstname PROFILE}", this.props, this.props.imgurl);
        return (
            <div className="profile">
                <h1>    Welcome,  {this.props.firstname}  {this.props.lastname} </h1>
                <div  className="profile-pic-container">
                    <ProfilePic
                        imgurl={this.props.imgurl}
                        showUploader={this.props.showUploader}
                        firstname={this.state.firstname}
                        lastname={this.state.lastname}

                    />
                </div>
                <BioEditor bio={this.props.bio} setBio={this.props.setBio} />


            </div>
        );
    }
}
