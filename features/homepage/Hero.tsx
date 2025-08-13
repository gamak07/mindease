import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBrain, FaHeart, FaMicrophone } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="mb-8 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
            Your personal AI companion for a healthier mind
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
            MindEase helps university students manage stress, track moods, and
            receive supportive AI-generated tips. Take control of your mental
            wellness journey with personalized insights and gentle guidance.
            Remember, we complement but never replace professional medical care.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link href="">
              <Button className="cursor-pointer rounded-md bg-indigo-600 px-8 py-3 text-lg font-semibold whitespace-nowrap text-white shadow transition-colors duration-200 hover:bg-indigo-700">
                Start Chatting
              </Button>
            </Link>
            <Link href="">
              <Button className="cursor-pointer rounded-md border-2 border-indigo-600 px-8 py-3 font-semibold whitespace-nowrap text-indigo-700 transition-colors duration-200 hover:bg-indigo-600 hover:text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Illustration Card */}
        <div className="relative">
          <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-white p-6 shadow-2xl lg:h-[500px]">
            {/* Illustration */}
            <Image
              src="/hero-image.jpg"
              fill
              alt="Student reading with plants"
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Heart Icon */}
          <div className="absolute -top-4 -right-4 rounded-full bg-white p-4 shadow-lg">
            <FaHeart className="text-2xl text-pink-500" />
          </div>

          {/* brain Icon */}
          <div className="absolute -bottom-4 -left-4 rounded-full bg-white p-4 shadow-lg">
            <FaBrain className="text-2xl text-indigo-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
