
export default function Header({ count }) {
    return(
        <header style={{ borderBottom: '1px solid #ccc', padding: '10px'}}>
         <h1>Task Tracker 📋</h1>
         <p>Items left: {count}</p>
        </header>
    );
}
