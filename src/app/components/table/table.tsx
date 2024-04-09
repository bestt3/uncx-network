import React from "react";
import TableHead, { HeadCellProps } from "./thead";
import TableRow from "./trow";
import Container from "../container/container";
import Image from "next/image";
import { DATA_AOS } from "@/app/util/aos";

interface TableProps {
  headCells?: HeadCellProps[];
  rows: any[];
}

const Table = ({ headCells, rows = [] }: TableProps) => {
  return (
    <div className="p-ct relative">
      <Container>
        <div className="text-center z-[5]">
          <div className="inline-block" data-aos={DATA_AOS.FADE_UP}>
            {headCells && <TableHead headCells={headCells} />}
            {rows.map((row, index) => (
              <TableRow key={`table-row-${index}`} row={row} />
            ))}
          </div>
        </div>
      </Container>
      <picture className="left-0 absolute top-[100%] translate-y-[-50%] w-full z-[-1]">
        <Image
          src={"/bg-unicorn-middle.png"}
          alt=""
          width={0}
          height={0}
          className="w-full h-auto"
        />
      </picture>
    </div>
  );
};

export default Table;
