"use client";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const TopHeader = () => {
  const [sidebarToggle, setsidebarToggle] = useState(false);
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <AlignJustify
        className="md:hidden"
        onClick={() => {
          setsidebarToggle(true);
        }}
      />
      <Image
        className="md:hidden"
        src="/logo.svg"
        alt="logo"
        width={50}
        height={100}
      />
      <UserButton />
    </div>
  );
};

export default TopHeader;
