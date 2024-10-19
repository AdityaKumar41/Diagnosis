import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { IconHomeBitcoin } from "@tabler/icons-react";
import { ethers } from "ethers";
import { Cross } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { VerifyCheckup } from "../hooks/Client";
import { Context } from "../context/Provider";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function NavbarCom() {
  const { connectWallet, account } = useContext(Context);
  const displayAccount = account
    ? account.substring(0, 6) + "..." + account.substring(account.length - 4)
    : "Connect";
  return (
    <Navbar>
      <NavbarBrand className="gap-3">
        <Cross className="text-danger-300" />
        <p className="font-bold text-inherit">Health Connect</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            variant="flat"
            onClick={() => connectWallet()}
          >
            {displayAccount}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
