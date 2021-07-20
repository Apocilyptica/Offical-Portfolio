import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateAppActiveSettings } from "../../redux/Active/active.actions";

const mapState = ({ active }) => ({
  active: active.activeAppSettings,
});

const FooterLinks = (props) => {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState("hidden");
  const { active } = useSelector(mapState);
  const app = active[props.item.appName];

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

  const handleMinimize = () => {
    dispatch(updateAppActiveSettings({ appName: props.item.appName, appSettings: app, action: "minimize" }));
  };

  return (
    <div className={"iconWrapper " + hidden} onClick={() => handleMinimize()}>
      {props.fontawesome ? (
        <a href={props.item.URL} target="_blank" rel="noreferrer" className="icon">
          <FontAwesomeIcon icon={props.item.icon} color="white" />
        </a>
      ) : (
        <img src={app.footer.icon} style={{ backgroundColor: `${props.item.isFocus ? "grey" : "none"}` }} alt="icon" />
      )}
    </div>
  );
};

export default FooterLinks;
