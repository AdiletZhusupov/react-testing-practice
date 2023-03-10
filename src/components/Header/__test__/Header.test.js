import { render, screen } from '@testing-library/react'
import Header from '../Header'

// GET BY
it("should render text passed into title prop 1", ()=>{
    render(<Header title="My Header"/>)
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument()
})


// it("should render text passed into title prop 2", ()=>{
//     render(<Header title="My Header"/>)
//     const headingElement = screen.getByRole("heading", {name: "My Header"})
//     expect(headingElement).toBeInTheDocument()
// })


// it("should render text passed into title prop 3", ()=>{
//     render(<Header title="My Header"/>)
//     const headingElement = screen.getByTitle("Header")
//     expect(headingElement).toBeInTheDocument()
// })

// it("should render text passed into title prop 4", ()=>{
//     render(<Header title="My Header"/>)
//     const headingElement = screen.getByTestId("header-1")
//     expect(headingElement).toBeInTheDocument()
// })


// // FIND BY

// it("should render text passed into title prop 5", async() => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // QUERY BY

// it("should render text passed into title prop 6", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// // GETALL BY
// it("should render text passed into title prop 7", () => {
//   render(<Header title="My Header" />);
//   const headingElements = screen.getAllByRole
//   ("heading");
//   expect(headingElements.length).toBe(2);
// });

