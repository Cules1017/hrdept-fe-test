import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { CalendarIcon, GearIcon } from "@radix-ui/react-icons";
import { HamburgerMenuIcon, BellIcon } from "@radix-ui/react-icons";
import { Box, ContextMenu, Text, Theme } from "@radix-ui/themes";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <Theme appearance="light" accentColor="blue">
      <Box className="flex items-center flex-shrink h-16 bg-gray-200">
        {/* <Flex className="flex items-center">
          <Box className="h-16 w-16 bg-slate-500 flex items-center justify-center">
            <HamburgerMenuIcon className="h-8 w-8 cursor-pointer hover:opacity-3" />
          </Box>
          <Box>
            <Text as="p" size="2" className="text-gray-600">
              Dashboard Employees
            </Text>
          </Box>
        </Flex> */}
        {/* <DecorativeBox /> */}
        <Box className="h-16 w-16 bg-slate-500 flex items-center justify-center">
          <HamburgerMenuIcon className="h-8 w-8 cursor-pointer hover:opacity-3" />
        </Box>

        <Box className="flex flex-1 flex-row justify-between px-4 items-center">
          <Box>
            <Text as="p" size="2" className="text-gray-600">
              Dashboard Employees
            </Text>
          </Box>
          <Box className="flex justify-around items-center gap-4">
            <BellIcon className="h-8 w-8 cursor-pointer hover:opacity-3" />
            <Box className="text-right">
              <Text as="p" className="text-gray-600 font-bold">
                Minh Huyen
              </Text>
              <Text as="p" size="2" className="text-gray-600">
                Product Manager
              </Text>
            </Box>
            <Box>
              <img
                src="https://json-server.dev/ai-profiles/33.png"
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
            </Box>
          </Box>

          {/* <Image src="https://www.notion.so/images/favicon.ico" alt="Notion Logo" /> */}
        </Box>
        {/* <button className="p-2 bg-blue-500 text-white rounded">Sign In</button> */}
      </Box>
      <div className="flex">
        <aside className="flex flex-col  bg-gray-400 w-16 py-10">
          <Box className="my-4 flex items-center justify-center" >
            <CalendarIcon className="h-8 w-8 cursor-pointer hover:opacity-3" />
          </Box>
          <Box className="my-4 flex items-center justify-center" >
            <CalendarIcon className="h-8 w-8 cursor-pointer hover:opacity-3" />
          </Box>
           <Box className="my-4 flex items-center justify-center" >
            <CalendarIcon className="h-8 w-8 cursor-pointer hover:opacity-3" />
          </Box>
           <Box className="my-4 flex items-center justify-center" >
            <CalendarIcon className="h-8 w-8 cursor-pointer hover:opacity-3" />
          </Box>
        </aside>
        <main className="flex-1 p-4">
          <Slot>{children}</Slot>
        </main>
      </div>
    </Theme>
  );
}

export default BaseLayout;
