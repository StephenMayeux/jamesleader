import React from 'react';

const CamperListItem = (props) => {
  // this.props.keyName in classes
  // props.keyName in functional components
  // passed down from CamperList line 26
  const { userName, points } = props;
  return (
    <div>
      <h1>{userName}</h1>
      <p>{points}</p>
    </div>
  );
};

export default CamperListItem;
