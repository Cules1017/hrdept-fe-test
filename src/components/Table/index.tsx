import { GearIcon, TrashIcon } from "@radix-ui/react-icons";
import { TableData, User } from "../../@types/common";
import { Box, Button, DropdownMenu, Table } from "@radix-ui/themes";
import FormAddUser from "../FormAddUser";
import DialogCustom from "../../ui/Dialog";
import { useState } from "react";

interface ListUser {
  data: User[];
}

const index = ({ data }: ListUser) => {
  const tableData: TableData[] = data;
  const [openDialog, setOpenDialog] = useState(false);
  const openDialogOnClick = () => {
    console.log(1);
    setOpenDialog(true);
  };
  return (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell justify="center">#</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">
              Email
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone Number</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Firstname</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Lastname</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>{user.firstName}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>
                {user.role === 1
                  ? "Admin"
                  : user.role === 2
                  ? "Editor"
                  : "User"}
              </Table.Cell>
              <Table.Cell>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="soft">
                      Options
                      <DropdownMenu.TriggerIcon />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item onClick={openDialogOnClick}>
                        <Button className="cursor-pointer bg-transparent text-gray-900">
                          Edit
                          <GearIcon />
                        </Button>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item shortcut="" color="red">
                      Delete
                      <TrashIcon />
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    
  );
};
export default index;
