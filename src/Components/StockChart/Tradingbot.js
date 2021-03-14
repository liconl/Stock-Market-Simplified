import React, { useState, useRef } from "react";
import { Button, Tooltip, Overlay } from "react-bootstrap";

function Tradingbot() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div>
      <Button ref={target} onClick={() => setShow(!show)}>
        Tradingbot
      </Button>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Comming Early 2021
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}

export default Tradingbot;
