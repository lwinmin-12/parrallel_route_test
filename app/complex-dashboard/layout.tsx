import React from "react";

const layout = ({
  children,
  users,
  notifications,
  testing,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  testing: React.ReactNode;
}) => {
  return (
    <>
      <div>{children}</div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{notifications}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{testing}</div>
      </div>
      
    </>
  );
};

export default layout;
