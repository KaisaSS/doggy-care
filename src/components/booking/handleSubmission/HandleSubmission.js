import React, { useState, useEffect } from "react";
import { sendBooking } from "../../../services/sendBooking";
import SubmissionError from "../submissionError/SubmissionError";
import SubmissionSuccess from "../submissionSuccess/SubmissionSuccess";

const HandleSubmission = ({ submissionData, bookingEmail }) => {
  //state with response

  const [formResponse, setFormResponse] = useState(undefined);

  useEffect(() => {
    setFormResponse(sendBooking(submissionData));
  }, [submissionData]);

  return (
    <div>
      {formResponse === undefined ? (
        <div className="container">
          <div className="title">
            <h1>Loading...</h1>
          </div>
        </div>
      ) : formResponse.status === 200 ? (
        <SubmissionSuccess submissionData={submissionData} />
      ) : (
        <SubmissionError bookingEmail={bookingEmail} />
      )}
    </div>
  );
};

export default HandleSubmission;
