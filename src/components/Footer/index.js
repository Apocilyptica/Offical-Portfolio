import { Grid, Icon } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import FooterLinks from "../Animations/FooterLinks";

import Typing from "../Animations/Typing";
import { ExternalLinks } from "../Helpers";
import "./styles.scss";

const Footer = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  useEffect(() => {
    const timer = count < typicalConfig.text.length + 1 && prevCount <= count && setInterval(() => setCount(count + 1), typicalConfig.time);
    if (count === typicalConfig.text.length + 1) {
      setIsFinished(true);
    }
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const typicalConfig = {
    text: "James Jager Launch...",
    time: 250,
    backspace: 10,
  };

  const gridConfig = {
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
  };

  const footerLinksConfig = {
    start: isFinished,
  };

  return (
    <div className="footer">
      <div className="wrap">
        <div className="items">
          <Grid container {...gridConfig}>
            <Typing {...typicalConfig} />
            {ExternalLinks.map((item, index) => (
              <Grid key={index} item className="icons">
                <FooterLinks {...footerLinksConfig} item={item} index={index} delay={index * 250} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Footer;
