import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import UserContext from "../utils/userContext";  // Import UserContext
import * as onlineStatus from "../utils/useOnlineStatus";  // Import useOnlineStatus hook

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

jest.spyOn(onlineStatus, 'default').mockReturnValue(true); // Mock online status as true

it("Header test", async () => {
    await act(
        async () => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <UserContext.Provider value={{
                            loggedInUser: "testUser",
                            setUserName: jest.fn(),  // Mock setUserName
                        }}>
                            <Body />
                        </UserContext.Provider>
                    </Provider>
                </BrowserRouter>
            )
        }
    );

    const filter = screen.getByRole('button', { name: "Top Rated Restaurants" });
    const search = screen.getByRole('button', { name: "Search" });
    fireEvent.click(filter);
    fireEvent.click(search);

    const userName = screen.getByTestId("username");
    fireEvent.change(userName, { target: { value: "username" } });

    expect(screen.queryByText("Looks like you are offline!! Please check your internet connection")).not.toBeInTheDocument();
});