import { FaRegTrashCan } from "react-icons/fa6";

const Item = () => {
  return (
    <div>
      <ul className="flex flex-row justify-between tracking-wide font-semibold size text-sm ">
        <li className="flex-1 text-left">12/12/2023</li>
        <li className="flex-1 text-left">400</li>
        <li className="flex-1 text-left">Income</li>
        <li className="flex-1 text-left">Party</li>
        <FaRegTrashCan className="flex-1 text-left" />
      </ul>
    </div>
  );
};
export default Item;
