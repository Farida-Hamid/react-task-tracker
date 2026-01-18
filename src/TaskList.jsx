export default function TaskList({ items, onDelete }) {
    return (
        <ul>
            {items.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => onDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
