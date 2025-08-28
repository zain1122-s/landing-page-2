import React from "react";
import "./pricing.css";
import { Send } from "lucide-react";
function Pricing() {
  return (
    <div className="main-pricing">
      <div className="pricing">
        <div className="pricing-content">
          <h1>Pricing Plan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
          </p>
          <p>labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>

        <div className="pricing-card">
          <div className="p-card-1" id="p-1">
            <div className="p-logo">
              <Send size={42} color="white" />
            </div>
            <div className="p-data">
              <h1>Basic Plan</h1>
              <p>
                Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            <div className="booking-btn">
              <h1>$100</h1>
              <button>Booking</button>
            </div>
          </div>
          <div className="p-card-2">
            <div className="p-logo">
              <Send size={42} color="white" />
            </div>

            <div className="p-data">
              <h1>Basic Plan</h1>
              <p>
                Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            <div className="booking-btn">
              <h1>$150</h1>
              <button>Booking</button>
            </div>
          </div>
          <div className="p-card-1">
            <div className="p-logo">
              <Send size={42} color="white" />
            </div>
            <div className="p-data">
              <h1>Basic Plan</h1>
              <p>
                Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            <div className="booking-btn">
              <h1>$250</h1>
              <button>Booking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
