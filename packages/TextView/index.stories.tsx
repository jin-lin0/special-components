import React from "react";
import TextView from "./index";

export default {
  title: "TextView",
};

export const WithPureText = () => (
  <TextView>This is my test component</TextView>
);

export const TTTextView = () => <TextView>aaa</TextView>;
