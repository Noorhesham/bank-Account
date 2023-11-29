import { useSelector } from "react-redux";

function Customer() {
  const customer=useSelector(store=>store.Customer.fullname);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
