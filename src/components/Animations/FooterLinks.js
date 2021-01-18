import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLinks = (props) => {
  const [hidden, setHidden] = useState("hidden");

  useEffect(() => {
    setTimeout(() => {
      showIcon();
    }, props.delay);
    return clearTimeout();
  }, [props.start]);

  const showIcon = () => {
    if (props.start) {
      setHidden("");
      clearTimeout();
    }
  };

  return (
    <div className={"iconWrapper " + hidden}>
      <a href={props.item.URL} target="_blank" rel="noreferrer" className="icon">
        <FontAwesomeIcon icon={props.item.icon} color="white" />
      </a>
    </div>
  );
};

export default FooterLinks;
