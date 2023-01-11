import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should type in an input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "practice testing" } });
    expect(inputElement.value).toBe("practice testing");
  });

  it("should empty an input when 'add' button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /add/i });
    fireEvent.change(inputElement, { target: { value: "practice testing" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
