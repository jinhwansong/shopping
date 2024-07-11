"use client";
import React, { useState } from "react";
import { IuseCheck } from "@/type";

export default function useCheck(initialvalues: IuseCheck[]) {
  const [checkbox, setCheckbox] = useState(
    initialvalues.map((item) => ({ ...item, isChecked:false }))
  );
  const singlecheck = (id:string) => {
    setCheckbox(
      checkbox.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };
  const allcheck = () =>{
    const allchecks = checkbox.every((item) => !item.isChecked);
    setCheckbox(checkbox.map((item) => ({ ...item, isChecked: allchecks })));
  }
  const essentialCheck = () => {
    return checkbox.every((item) => {
      if(item.checks === "(필수)"){
        return item.isChecked
      }
      return true;
    })
  };

  return [checkbox, singlecheck, allcheck, essentialCheck] as const;
}
