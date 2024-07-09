import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { User } from "../@types/common";
import constants from "../util/constants";
import { fetchUsers } from "../services/userService";
import { set } from "lodash";

interface ISearchBarContext {
  searchText: string;
  role: string;
  users: User[];
  isGettingPosts: boolean;
  total: number;
  page: number;
  totalPage: number;
  setSearchText?: Dispatch<SetStateAction<string>>;
  handleGoPage?: (page: number) => void;
  setRole?: Dispatch<SetStateAction<string>>;
}

export const SearchBarContext = createContext<ISearchBarContext>({
  searchText: "",
  page: 1,
  role: "-1",
  users: [],
  total: 0,
  totalPage: 0,
  isGettingPosts: false,
});

export const SearchBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchText, setSearchText] = useState("");
  const [role, setRole] = useState<string>("-1");
  const [users, setUsers] = useState<User[]>([]);
  const [isGettingPosts, setIsGettingUsers] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const handleGoPage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const fetchPosts = async (data: {
      page: number;
      searchText: string;
      role: string;
    }) => {
      try {
        setIsGettingUsers(true);
        const res = await fetchUsers();
        if (res.length > 0) {
          setUsers(
            res.slice(
              (data.page - 1) * constants.PAGE_SIZE,
              data.page * constants.PAGE_SIZE
            )
          );
          setTotal(res.length);
          setTotalPage(Math.ceil(res.length / constants.PAGE_SIZE));
          if (data.searchText) {
            // seachtText can be email, phone, firstname, lastname
            // after filter have to set total and totalPage
            const filteredUsers = res.filter(
              (user) =>
                user.email.includes(data.searchText) ||
                user.phone.includes(data.searchText) ||
                user.firstName.includes(data.searchText) ||
                user.lastName.includes(data.searchText)
            );
            setUsers(filteredUsers);
            setTotal(filteredUsers.length);
            setTotalPage(Math.ceil(filteredUsers.length / constants.PAGE_SIZE));
            // setTotal(res.length);
          } else if (data.role !== "-1") {
            const filteredUsers = res.filter(
              (user) => user.role === parseInt(data.role)
            );
            setUsers(filteredUsers);
            setTotal(filteredUsers.length);
            setTotalPage(Math.ceil(filteredUsers.length / constants.PAGE_SIZE));
            // setTotal(res.length);
          }
        } else {
          setUsers([]);
          setTotal(0);
          setTotalPage(0);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsGettingUsers(false);
      }
    };

    fetchPosts({
      page,
      searchText,
      role,
    });
  }, [searchText, page, role]);

  return (
    <SearchBarContext.Provider
      value={{
        page,
        role,
        searchText,
        users,
        isGettingPosts,
        total,
        totalPage,
        setRole,
        setSearchText,
        handleGoPage,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};

export default SearchBarContext;
