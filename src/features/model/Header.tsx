'use client';

import Button from "@/src/components/Button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  return (
    <div className="fixed top-0 right-0 left-0 z-10 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center">
            <Button className="flex cursor-pointer items-center text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600" onClick={() => router.back()}>
              <FaArrowLeft className="mr-3 text-lg" /> Back
            </Button>
          </div>

          <div className="flex flex-1 justify-center">
            <h1 className="text-2xl font-bold text-indigo-600">MindEase</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
