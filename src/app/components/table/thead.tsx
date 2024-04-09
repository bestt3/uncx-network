import classNames from "classnames";
import React from "react";
import GradientText from "../gradient-text/gradient-text";

export interface HeadCellProps {
  name: string;
  className?: string;
}

interface TableHeadProps {
  headCells: HeadCellProps[];
}

const TableHead = ({ headCells }: TableHeadProps) => {
  return (
    <div className="flex items-center">
      {headCells.map((cell, index) => (
        <div
          key={`tbl-head-cell-${index}`}
          className={classNames({ "ml-6 md:ml-14": index > 0 }, cell.className)}
        >
          <GradientText text={cell.name} className="text-tbl-head text-bold" />
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default TableHead;
