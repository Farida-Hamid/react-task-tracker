export default function TaskInput({ onAdd }) {
    async function handleAction(formData) {
        const text = formData.get("taskText");
        if (!text) return;
        onAdd(text);
    }
    
    return(
        <form action={handleAction}>
            <input name="taskText" placeholder="What do you want to do?" required />
            <button type="submit">Add</button>
        </form>
    );
}
