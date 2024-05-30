import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    let s = word.charAt(0).toUpperCase();
    let entire = s + word.slice(1);
    return entire;
  };

  return (
    props.alert && (
      <div
        className={`container d-flex justify-content-center alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    )
  );
}
