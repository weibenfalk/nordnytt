"use client"

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
// Components
import PaginationButton from './PaginationButton';

type Props = {
  totalPages: number;
}

export default function Pagination({ totalPages }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-between my-4">
      <PaginationButton
        href={createPageURL(currentPage - 1)}
        direction='back'
        isDisabled={currentPage <= 1}
      />
      <span className="select-none">{currentPage} / {totalPages}</span>
      <PaginationButton
        href={createPageURL(currentPage + 1)}
        direction='forward'
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
};
