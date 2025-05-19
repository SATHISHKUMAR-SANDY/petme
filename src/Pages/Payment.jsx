import React from "react";
import { useState } from "react";
import dog from "../assets/images/paw.png";
import p1 from "../assets/images/payment1.png";
import p2 from "../assets/images/payment2.png";
import Swal from 'sweetalert2';



function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [name, setName] = useState("");

  const success = ()=> {
    Swal.fire({
        title: "Paymeny Success",
        text: "Yeh!",
        icon: "success"
      });
  };
  return (
    <>
      <div className="container dogs-parent3">
        <div className="dog-head3">
          <h2>Book Payment</h2>
        </div>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div
                className="card-header d-flex justify-content-between"
                style={{ backgroundColor: "#FFF8F7" }}
              >
                <div>
                  <h2 className="h4 mb-0">Credit Card</h2>
                  <p className="text-muted small mb-0">
                    Save money transfer using bank account Visa, Mastercard
                  </p>
                </div>
                <div>
                  <img
                    src={p1}
                    style={{ width: "46px", height: "46px" }}
                    alt="Dog Paw"
                  />
                  <img
                    src={p2}
                    style={{ width: "50px", height: "50px" }}
                    alt="Dog Paw"
                  />
                </div>
              </div>

              <div className="card-body" style={{ backgroundColor: "#FFF8F7" }}>
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="form-label fw-bold">
                    CREDIT CARD NUMBER
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="cardNumber"
                    placeholder="Enter your card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="row mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="cvv" className="form-label fw-bold">
                      CVV CODE
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      id="cvv"
                      placeholder="•••"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="expiry" className="form-label fw-bold">
                      EXPIRY DATE
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      id="expiry"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-bold">
                    NAME ON CARD
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="name"
                    placeholder="Enter your name on the card"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <hr className="my-4" />
              </div>
            </div>
          </div>
          <div className="col-3 border">
            <div className="mb-4">
              <h5 className="mb-3">Booking Charge</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>1 500 GST</span>
                <span className="fw-bold">₹1,500.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2 text-success">
                <span>120 Discount</span>
                <span className="fw-bold">-₹120.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>220 TOTAL</span>
                <span className="fw-bold">₹220.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>1 400</span>
                <span className="fw-bold">₹1,400.00</span>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-3 fw-bold " onClick={success} style={{backgroundColor:"black"}}
             >
              PROCEED TO PAY
            </button>

            <div className="text-center mt-3">
              <small className="text-muted">100% Secure Payments</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
