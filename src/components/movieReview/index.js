import React from "react";

export default ({ review }) => {
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </>
  );
};