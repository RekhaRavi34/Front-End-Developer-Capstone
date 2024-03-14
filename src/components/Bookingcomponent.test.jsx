import { render, screen } from "@testing-library/react";
import Bookingcomponent from "./Bookingcomponent";
import Footer from "./Footer";
test('Renders the BookingForm heading', () => {
    render(<Footer/>);
    const headingElement = screen.getByText("Social");
    expect(headingElement).toBeInTheDocument();
})