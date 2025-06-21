import React from "react";

// navitem type
export interface NavItemType {
  name?: string;
  link?: string | any;
}

export interface ButtonTypes {
  type?: "submit" | "button " | "reset" | any;
  name?: string;
  onClick?: () => void;
  icon?: React.ReactSVGElement | React.ReactNode;
}
