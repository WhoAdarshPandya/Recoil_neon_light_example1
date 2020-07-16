import React from "react";
import "./styles.css";
import { Switch } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { SwichValue } from "./Atoms/atoms";

export default function App() {
  const [sswitch, setSwich] = useRecoilState(SwichValue);
  return (
    <div className="container">
      {sswitch ? (
        <h1 className="neon">Hi i'm Adarsh</h1>
      ) : (
        <h1>Hi i'm Adarsh</h1>
      )}
      <div className="innerContainer">
        <p>toggle the switch here</p>
        <Switch
          value={sswitch}
          className="btn"
          color="secondary"
          onChange={e => setSwich(e.target.checked)}
        />
      </div>
    </div>
  );
}
