import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <UserClass name={"Vaibhav Madan"} location={"India"} github={"vaibhav-madan-20"} />
    }
}


export default About;