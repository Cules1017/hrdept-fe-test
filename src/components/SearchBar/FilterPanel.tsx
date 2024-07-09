import { useContext } from "react";
import { SearchBarContext } from "../../context/SearchBarContext";
import {
  SelectTrigger,
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../../ui/Select";

const roleOptions = [
  { value: "-1", label: "All" },
  { value: "1", label: "Admin" },
  { value: "2", label: "Editor" },
  { value: "3", label: "User" },
];

const FilterPannel = () => {
  const { role, setRole } = useContext(SearchBarContext);

  return (
    <div className="">
      <div className="w-[200px]">
        <div className="flex flex-col gap-y-4 ">
          <Select value={role} onValueChange={(value) => setRole?.(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent className="border-2 bg-blue-400 border-solid border-[#e4ebe4] text-[#001e00] font-bold text-md leading-[22px] transition-[border-color] no-underline">
              <SelectGroup>
                {roleOptions.map((opt, index) => (
                  <SelectItem
                    value={opt.value.toString()}
                    key={`select-role-${index}`}
                  >
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterPannel;
