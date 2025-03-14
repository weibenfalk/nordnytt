"use client"

import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  direction: "back" | "forward";
  isDisabled: boolean;
}

export default function PaginationButton({ href, direction, isDisabled }: Props) {
  return (
    <Link
      href={href}
      role="button"
      className={`${isDisabled ? 'pointer-events-none text-gray-300' : ''} flex items-center justify-center rounded w-8 h-8 bg-gray-400 select-none`}
    >
      <span>
        {direction === "back" ? "<" : ">"}
      </span>
    </Link>
  );
};
