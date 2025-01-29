import { render,screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

test("Contact component",()=>{
    render(<Contact/>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
});
test("Contact component",()=>{
    render(<Contact/>);
    const input_boxes = screen.getAllByRole('textbox');

    expect(input_boxes.length).toBe(2);
})