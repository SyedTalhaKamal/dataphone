import React, { useState } from "react";
import "./style.css";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  return (
    <>
      <ReactPaginate
        pageCount={props.pageCount}
        breakLabel="..."
        nextLabel="Next"
        onPageChange={props.onPageChange}
        pageRangeDisplayed={5}
        previousLabel="Previous"
        marginPagesDisplayed={2}
        containerClassName={"pagination justify-content-end"}
        activeClassName={"active"}
        forcePage= {props.forcePage && props.forcePage}
      />
    </>
  );
}

export default Pagination;
