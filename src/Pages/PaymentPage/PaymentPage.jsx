import React from "react";
import "./Payment.css";
import { userContext } from "../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";

const PaymentPage = () => {
  const data = useContext(userContext);
  const { getFeedbacks, addFeedback, feedbacks, user } = data;

  const [newFeedback, setNewFeedback] = useState(
    user
      ? {
          feedback: "",
          name: user.email,
        }
      : {}
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in newFeedback) {
      let val = newFeedback[key];
      if (typeof val === "string") {
        if (!val.trim()) {
          alert("Fill out the fields");
          return;
        }
      }
    }
    newFeedback.name = user.email;

    addFeedback(newFeedback);

    setNewFeedback({
      feedback: "",
      name: user.email,
    });
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="payment__block">
      <div className="container">
        <div className="payment__block-content">
          <img
            src="https://cybersport.pl/wp-content/uploads/2020/03/valorant.jpg"
            alt=""
          />
          <div className="buy">
            <span className="price">
              BUY NOW FOR <strong>23$</strong>{" "}
            </span>
            <button className="btn">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content">BUY NOW</span>
              </span>
            </button>
          </div>
          <div className="feedback-block">
            <h1>Feedbacks</h1>
            <div className="feedbacks">
              {user && (
                <>
                  <form onSubmit={handleSubmit} className="feedback-form">
                    <textarea
                      onChange={(e) =>
                        setNewFeedback({
                          ...newFeedback,
                          feedback: e.target.value,
                        })
                      }
                      value={newFeedback.feedback}
                      cols="30"
                      rows="10"
                    ></textarea>
                    <button>
                      <IoMdSend />
                    </button>
                  </form>
                  <div className="feedbacks-com">
                    {feedbacks.map((item) => (
                      <div key={item.id} className="comment">
                        <h1>{item.name}</h1>
                        <p>{item.feedback}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
