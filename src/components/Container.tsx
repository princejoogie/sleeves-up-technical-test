import React from "react";

interface ContainerProps {
  maxWidth?: number;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  maxWidth = 1280,
}) => {
  return (
    <div className={`w-full mx-auto px-4 ${className}`} style={{ maxWidth }}>
      {children}
    </div>
  );
};

export default Container;
