import React from "react";
import Footer from "../components/footer";

function Pricing() {
  return (
    <div className="pa4">
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr className="stripe-dark">
              <th className="fw6 tl pa3 bg-white">Membership Package</th>
              <th className="fw6 tl pa3 bg-white">Description</th>
              <th className="fw6 tl pa3 bg-white">Price</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            <tr className="stripe-dark">
              <td className="pa3">Basic</td>
              <td className="pa3">Able to Messege the Seller</td>
              <td className="pa3">$1.00</td>
            </tr>
            <tr className="stripe-dark">
              <td className="pa3">Premium</td>
              <td className="pa3">User can create an account</td>
              <td className="pa3">$2.00</td>
            </tr>
            <tr className="stripe-dark">
              <td className="pa3">Ultimate</td>
              <td className="pa3">User can Sell</td>
              <td className="pa3">$3.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
export default Pricing;
