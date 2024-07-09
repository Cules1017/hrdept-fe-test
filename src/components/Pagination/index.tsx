import { useContext } from "react";
import { SearchBarContext } from "../../context/SearchBarContext";
import { Button } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import constants from "../../util/constants";

const Pagiantion = () => {
  const { total, totalPage, page, handleGoPage } = useContext(SearchBarContext);

  const start = (page - 1) * constants.PAGE_SIZE + 1; // Start index for the current page
  const end = Math.min(start + constants.PAGE_SIZE - 1, total); // End index for the current page
  return (
    <div className="py-6 flex items-center justify-between">
      <div>
        <span>
          {start} - {end}
        </span>
        <span>{` of ${total} `}</span>
        {/* <span>{` Job posts `}</span> */}
      </div>
      <div>
        <ul className="flex items-center gap-x-1 text-sm">
          <li>
            <Button
             
              className={`bg-transparent hover:bg-transparent flex items-center ${
                page === 1
                  ? "cursor-not-allowed text-[#9aaa97]"
                  : "text-[#9aaa97] cursor-pointer"
              }`}
              onClick={() => handleGoPage?.(page - 1)}
            >
              <ChevronLeftIcon className="-mt-[2px]" /> Previous
            </Button>
          </li>
          {[...Array(totalPage)].map((_, index) => {
            const isActive = page === index + 1;
            return (
              <li key={`pagination-${index}`}>
                <Button
                  disabled={isActive}
                  onClick={() => {
                    handleGoPage?.(index + 1);
                  }}
                  className={`p-0 text w-6 h-6 flex items-center justify-center rounded-full text-[12px] leading-[12px] ${
                    isActive
                      ? "!bg-[#108a00] text-white hover:opacity-85"
                      : "bg-[#dddddd]  text-black hover:bg-[#cccccc]"
                  }`}
                >
                  <span className="mt-[1px]">{index + 1}</span>
                </Button>
              </li>
            );
          })}

          <li>
            <Button
              className={`bg-transparent hover:bg-transparent ${
                page === totalPage
                  ? "cursor-not-allowed text-[#9aaa97]"
                  : "text-[#9aaa97] cursor-pointer"
              }`}
              onClick={() => handleGoPage?.(page + 1)}
            >
              Next <ChevronRightIcon className="-mt-[2px]" />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagiantion;
