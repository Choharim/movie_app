import React from "react";
import PropTypes from "prop-types";

function Movie({id,year,title,summary,poster}){
  return <h1></h1>
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  year:PropTypes.number.isRequired,
  title:propTypes.string.isRequired,
  summary:propTypes.string.isRequired,
  poster:propTypes.string.isRequired
}