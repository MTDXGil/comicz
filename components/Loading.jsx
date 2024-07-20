"use client";
import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
      <h1 className="fallback-h1">
        Loading.... <PulseLoader />
      </h1>
    </>
  );
}
