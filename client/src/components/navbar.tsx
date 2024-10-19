import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Cross } from "lucide-react";
import { useContext } from "react";
import { Spinner } from "@nextui-org/react";
import { Context } from "../context/Provider";
import { VerifyCheckup } from "../hooks/Client";

declare global {
  interface Window {
    ethereum: any;
  }
  interface Data {
    isFetching: boolean;
    error: any;
    data: any;
  }
}

export default function NavbarCom() {
  const { connectWallet, account } = useContext(Context);

  const { data, isFetching } = VerifyCheckup();

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
