import { AddUserModal } from "@/components/modules/users/AddUserModal";
import UserCard from "@/components/modules/users/UserCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

const Users = () => {
  const users = useAppSelector(selectUser);

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <AddUserModal />
      </div>

      <div className="gap-5 grid grid-cols-4">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
