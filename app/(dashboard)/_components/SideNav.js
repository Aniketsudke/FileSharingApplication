"use client";
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SideNav = () => {
  // const menuList = [
  //   {
  //     id: 1,
  //     name: "Uplaod",
  //     icon: Upload,
  //     path: "/upload",
  //   },
  //   {
  //     id: 1,
  //     name: "Files",
  //     icon: File,
  //     path: "/files",
  //   },
  // ];

  const [activeIndex, setactiveIndex] = useState(0);
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <div>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
        </div>

        <div className="border-t border-gray-100">
          <div className="px-2">
            {/* <div className="py-4">
              <a
                href="/"
                className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                  General
                </span>
              </a>
            </div> */}
            <ul className="space-y-1 border-t border-gray-100 pt-4">
              {/* {menuList.map((item) => {
                <li>
                  <a
                    href={item.path}
                    className="group relative flex justify-center rounded px-2 py-3 text-gray-500 hover:bg-gray-50 hover:text-red-700"
                  >
                    <item.icon />

                    <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      {item.name}
                    </span>
                  </a>
                </li>;
              })} */}

              <li>
                <Link
                  href="/upload"
                  className={`group relative flex justify-center rounded px-2 py-3 text-gray-500 hover:bg-red-500 hover:text-white ${
                    activeIndex == 1 ? "text-white bg-red-500 " : null
                  }`}
                  onClick={() => {
                    setactiveIndex(1);
                  }}
                >
                  <Upload />

                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Upload
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/files"
                  className={`group relative flex justify-center rounded px-2 py-3 text-gray-500 hover:bg-red-500 hover:text-white ${
                    activeIndex == 2 ? "text-white bg-red-500 " : null
                  }`}
                  onClick={() => {
                    setactiveIndex(2);
                  }}
                >
                  <File />

                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    File
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/upgrade"
                  className={`group relative flex justify-center rounded px-2 py-3 text-gray-500 hover:bg-red-500 hover:text-white ${
                    activeIndex == 3 ? "text-white bg-red-500 " : null
                  }`}
                  onClick={() => {
                    setactiveIndex(3);
                  }}
                >
                  <Shield />

                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Upgrade
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
