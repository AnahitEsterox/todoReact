import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, handleDelete }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        handleDelete={handleDelete}
                    />
                )
            })}
        </ul>
    )
}