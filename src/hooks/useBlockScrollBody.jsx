import * as React from "react";
import { useEffect, useState } from "react";

const UseBlockScrollBody = () => {
  const body = document.body.style;
  const [block, setBlock] = useState(body.overflowY === "hidden");

  useEffect(() => {
    body.overflowY = block ? "hidden" : "auto";
  }, [block]);
  const toogle = (done) => setBlock(done);
  return [toogle];
};

export default UseBlockScrollBody;
