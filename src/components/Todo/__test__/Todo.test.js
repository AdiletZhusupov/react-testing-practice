import Todo from "../Todo";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should add todo text in the TodoList when 'add' button is clicked", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /add/i });
    fireEvent.change(inputElement, {
      target: { value: "practice integration tests" },
    });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/practice integration tests/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should add a number of todo texts in the TodoList when 'add' button is clicked several times", () => {
    render(<MockTodo />);
    addTask(["practice integration tests", "learn unit testing", "read docs"]);
    const divElements = screen.getAllByTestId(/task-container/i);
    expect(divElements.length).toBe(3);
  });

  it("should confirm that initially todo task doesn't have line-through styling, is not complete", () => {
    render(<MockTodo />);
    addTask(["practice integration tests"]);
    const divElement = screen.getByText(/practice integration tests/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should confirm that todo task has line-through styling, is complete when clicked", () => {
    render(<MockTodo />);
    addTask(["practice integration tests"]);
    const divElement = screen.getByText(/practice integration tests/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active");
  });
});
