import classNames from "classnames";
import React from "react";
import CheckboxIcon from "../checkbox-icon/checkbox-icon";

const TableRow = (props: any) => {
  const { row, ...rest } = props;

  return (
    <div
      className={classNames(
        "border-white/[0.1] mt-tbl-row pt-tbl-row flex items-center",
        { "border-t": !row.noBorder }
      )}
      {...rest}
    >
      {Object.values(row.cells).map((cell: any, index: number) => (
        <div
          key={`table-row-cell-${index}`}
          className={classNames(
            { "ml-6 md:ml-14": index > 0 },
            "text-left",
            cell.className
          )}
        >
          {cell.type === "text" && (
            <div className="text-tbl-row">{cell.text}</div>
          )}
          <div className={classNames({ "opacity-0": !cell.checked })}>
            {cell.type === "checkbox" && <CheckboxIcon />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableRow;
