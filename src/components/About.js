import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <>
            <div>
                <UserClass name={"Vaibhav Madan"} location={"India"} github={"vaibhav1565"} />
            </div>
        </>
    }
}


export default About;