import React, { useEffect, useRef, useState } from "react";

// Material-UI
import { Grid } from "@material-ui/core";

// Redux
import { useSelector } from "react-redux";

// Components
import Typing from "../Animations/Typing";
import FooterLinks from "../Animations/FooterLinks";
import Toolbar from "../Toolbar";

// Styles
import "./styles.scss";

// Data
import { ExternalLinks } from "../Data";

const mapState = ({ apps }) => ({
  apps: apps.items,
});

const Footer = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [count, setCount] = useState(0);
  const { apps } = useSelector(mapState);
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
    <div id="footer" className="footer">
      <div className="wrap">
        <div className="items">
          <Grid container {...gridConfig}>
            <Typing {...typicalConfig} />
            {ExternalLinks.map((item, index) => (
              <Grid key={index} item className="icons">
                <FooterLinks {...footerLinksConfig} item={item} index={index} delay={index * 250} fontawesome={true} active={item.isFocus} />
              </Grid>
            ))}
            {apps.map(
              (app, index) =>
                app.isActive && (
                  <Grid key={index} item className="icons">
                    <FooterLinks {...footerLinksConfig} item={app} index={index} delay={0} fontawesome={false} />
                  </Grid>
                )
            )}
            {/* <Toolbar /> */}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Footer;
