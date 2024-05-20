'use client'

import { Avatar, Button, NavbarItem, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
   const session = useSession();

   let authContent: React.ReactNode;
   if (session.status === "loading") {
      authContent = null;
   } else if (session.data?.user) {
      authContent = (
         <Popover placement="left">
            <PopoverTrigger className="cursor-pointer">
               <Avatar src={session.data.user.image || ""} />
            </PopoverTrigger>
            <PopoverContent>
               <div className="p-4">
                  <form action={actions.signOut}>
                     <Button color="danger" type="submit">Sign Out</Button>
                  </form>
               </div>
            </PopoverContent>
         </Popover>
      );
   } else {
      authContent = (
         <>
            <NavbarItem>
               <form action={actions.signIn}>
                  <Button type="submit" variant="bordered" color="secondary">
                     Sign In
                  </Button>
               </form>
            </NavbarItem>
            <NavbarItem>
               <form action={actions.signIn}>
                  <Button type="submit" variant="flat" color="primary">
                     Sign Up
                  </Button>
               </form>
            </NavbarItem>
         </>
      );
   }

   return authContent;
}