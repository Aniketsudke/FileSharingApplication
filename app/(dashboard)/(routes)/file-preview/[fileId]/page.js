"use client";
import React, { useEffect } from "react";

const FilePreview = ({ params }) => {
  useEffect(() => {
    console.log(params?.fileId);
  }, []);

  return <div>{params?.fileId}</div>;
};

export default FilePreview;
