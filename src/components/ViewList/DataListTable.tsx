import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Spinner,
  Text,
} from "@radix-ui/themes";
import React, { useContext, useState } from "react";
import MyTable from "../Table";
import { BookmarkIcon, AvatarIcon } from "@radix-ui/react-icons";
import SearchBarContext from "../../context/SearchBarContext";
import Pagiantion from "../Pagination";
import DialogCustom from "../../ui/Dialog";
import FormAddUser from "../FormAddUser";
import SearchBar from "../SearchBar";
// import { Dialog } from "../../ui/Dialog";

const DataListTable = () => {
  const { users, isGettingPosts } = useContext(SearchBarContext);
  const [openDialog, setOpenDialog] = useState(false);

  if (isGettingPosts) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <Spinner size="3" /> {/* Show loading spinner */}
      </main>
    );
  }

  return (
    <>
      <Container className="w-[100%]">
        {users?.length > 0 ? (
          <Card>
            <Box className="flex justify-between items-center">
              <Heading>Users</Heading>
              
              <Box flexShrink="1" className="flex gap-4 flex-shrink">
                <Button className="cursor-pointer">
                  Export to Excel <BookmarkIcon />
                </Button>
                <Box>
                  <DialogCustom
                    open={openDialog}
                    setOpen={() => setOpenDialog(!openDialog)}
                    minWidth="70%"
                    title="Add new user"
                    desc="Make changes only if you are sure."
                    buttonTrigger={
                      <Button className="cursor-pointer">
                        Add new user <AvatarIcon />
                      </Button>
                    }
                    content={
                      <FormAddUser afterSave={() => setOpenDialog(false)} />
                    }
                  />
                </Box>
              </Box>
            </Box>
            <SearchBar />
            <Box className="w-[100%]">
              <MyTable data={users} />
              <Pagiantion />
            </Box>
          </Card>
        ) : (
          <Text color="red">No data</Text>
        )}
      </Container>
    </>
  );
};

export default DataListTable;
