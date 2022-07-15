import React from "react";


function About(props) {
  return (
<aside>
    <img src={props.image} alt={props.name} />
</aside>
  );
}

export default About;