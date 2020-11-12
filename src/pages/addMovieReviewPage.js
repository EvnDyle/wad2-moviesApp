import React from "react";
import PageTemplate from "../components/templateMoviePage";

const ReviewFormPage = props => {

  return (
      <PageTemplate movie={props.location.state.movie}>
          <h3>Placeholder for web form</h3>
      </PageTemplate>
  );
};
export default ReviewFormPage;