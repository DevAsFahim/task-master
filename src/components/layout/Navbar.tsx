import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  return (
    <div className="flex items-center gap-3 max-w-7xl mx-auto h-16 px-5">
      <div className="flex items-center">
        <h3 className="px-5 py-2.5 shadow-sm font-semibold text-white bg-green-600 rounded-tl-[50px] rounded-br-[50px]">
          NC
        </h3>
      </div>

      <div className="flex items-center w-full">
        <div className="flex items-center gap-5">
          <Link to="/">Tasks</Link>
          <Link to="/users">Users</Link>
          <Link to="/counter">Counter</Link>
        </div>

        <div className="ml-auto">
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
