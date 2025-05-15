import React from "react";
import { Modal } from "react-bootstrap";

function AllModal(props) {
  return (
    <Modal
      {...props}
      size={props.size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="p-3 pb-5">{props.children}</div>
    </Modal>
  );
}

export default AllModal;
