import Item from "./Item";

const Transactions = (props) => {
  return (
    <>
      <h1 className=" mt-9 text-xl text-center">Balance: {}</h1>
      <div className="flex justify-center items-center pt-4 flex-col">
        <div className="bg-slate-200 shadow-md w-80% rounded-lg border p-5">
          <ul className="flex flex-row justify-between tracking-wide font-semibold size text-sm">
            <li className="flex-1 text-left">Date</li>
            <li className="flex-1 text-left">Amount</li>
            <li className="flex-1 text-left">Type</li>
            <li className="flex-1 text-left">Notes</li>
          </ul>
          <p className="bg-slate-200 text-center font-bold">
            Log In to show dashboard
          </p>
          <Item />
        </div>
      </div>
    </>
  );
};
export default Transactions;
