import React, { useState } from "react";
import { Col, Row, Card } from "reactstrap";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function ItemCard(props) {
  function handleDelete() {
    axios.delete("/item/" + props.id).then((res) => {
      window.location.reload();
    });
  }

  return (
    <>
      <Card body className="item-card">
        <Row>
          <Col>
            <img className="item-img" src={`/photos/${props.filename}`} />
          </Col>
          <Col>
            <p>
              <span className="icon">${props.price}</span>{" "}
              <span>
                <FontAwesomeIcon
                  style={{ color: "black" }}
                  icon={faTrash}
                  onClick={() => handleDelete(props.email)}
                  size="2x"
                />
              </span>
            </p>
            <p>{props.name}</p>
            <p>Condition: {props.condition}</p>
            <p>Ph: {props.ph}</p>
            <p>Address: {props.address}</p>
            <p>Posted by: {props.email}</p>
          </Col>
        </Row>
      </Card>
    </>
  );
}
