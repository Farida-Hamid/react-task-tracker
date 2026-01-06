export default function TaskList({ items }) {
    return (
        <ul>
            {items.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
}
