import _ from "lodash";
import React, { useContext, useRef } from "react";
import { SearchBarContext } from "../../context/SearchBarContext";
import { Input } from "../../ui/Input";
import { Button } from "@radix-ui/themes";
import { Label } from "../../ui/Label";

const FilterSearch = () => {
  const { searchText, setSearchText } = useContext(SearchBarContext);
  const inputRef = useRef<any>(null);
  const setSearchDebounce = _.debounce((value) => {
    setSearchText?.(value);
  }, 1500);

  return (
    <div className="flex items-center relative border-solid border-[#beccbe] ">
      <Input
        placeholder="tranminh..."
        autoFocus
        ref={inputRef}
        defaultValue={searchText}
        //   ref={passwordRef}
        className="w-full !border-1 focus-visible:!ring-transparent focus-visible:!ring-offset-0 pl-12 pr-4 !py-2 "
        
        size={24}
        onChange={(e) => {
          setSearchDebounce(e.target.value);
        }}
      />
      {/* </Label> */}
      <Button
        className="min-w-[100px]  h-10 mx-5 bg-blue-500 hover:bg-blue-400 cursor-pointer transition-all"
        type="button"
        onClick={() => setSearchDebounce(inputRef?.current?.value || "")}
      >
        Search
      </Button>
    </div>
  );
};

export default FilterSearch;
