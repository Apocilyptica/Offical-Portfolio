import React from "react";
import { useSelector } from "react-redux";
import DragDrop from "../../components/DragDrop";

import "./styles.scss";

const mapState = ({ apps }) => ({
  apps: apps.items,
});

const HomePage = () => {
  const { apps } = useSelector(mapState);
  return (
    <div className="homePage">
      {apps.map((app, index) =>
        app.isActive ? (
          <div className="application" key={index}>
            {app.component}
          </div>
        ) : null
      )}
      <DragDrop />
    </div>
  );
};

export default HomePage;
