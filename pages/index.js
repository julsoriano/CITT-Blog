import React from "react";
import Router from "next/router";

export default function Index() {
  console.log("Index 1");
  React.useEffect(() => {
    console.log("Index 2");
    Router.push("/admin/dashboard");
  });

  return <div />;
}
