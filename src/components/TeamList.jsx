// Import the dataset
import members from "../data/teamMembers";
// Import the component
import TeamCardMembers from "./TeamCardMembers";

export default function TeamList() {
    return (
        <div>
            {
                members.map(member => (
                    <TeamCardMembers 
                        key={member.id}
                        name={member.name}
                        role={member.role}
                    />
                ))
            }
        </div>
    );
}