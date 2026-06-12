export default function TeamCardMembers(
    { name, role }
) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}