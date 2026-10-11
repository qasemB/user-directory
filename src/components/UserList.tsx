import type { User } from "../types/user";
import UserCard from "./UserCard";

interface UserListProps {
    users: User[];
}

export default function UserList ( { users }: UserListProps ) {
    return (
        <div className="user-grid">
            { users.map( ( user ) => (
                <UserCard key={ user.id } user={ user } />
            ) ) }
        </div>
    );
}