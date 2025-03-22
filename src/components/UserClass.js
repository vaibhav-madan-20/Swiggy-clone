import { Component } from "react";

class UserClass extends Component {
    state = {
        userInfo: {
            name: this.props.name,
            location: this.props.location,
            github: this.props.github,
        },
    };

    render() {
        const { name, location, github } = this.state.userInfo;

        return (
            <div className="flex flex-col items-center space-y-6 p-6 bg-blue-100 shadow-2xl text-gray-800 max-w-md mx-auto">
                <img
                    src="https://avatars.githubusercontent.com/u/144939273?v=4"
                    alt="Profile"
                    className="w-48 h-48 border-4 border-white rounded-full shadow-lg hover:shadow-2xl"
                />
                <h2 className="font-bold tracking-wide">Name: {name}</h2>
                <h3 className="">
                    GitHub:{" "}
                    <a
                        className=" text-yellow-800 font-medium hover:underline"
                        href={`https://github.com/${github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {github}
                    </a>
                </h3>
                <h3>Location: {location}</h3>
            </div>
        );
    }
}

export default UserClass;