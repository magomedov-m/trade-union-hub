import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useState } from "react";
import Link from "next/link";

export default function MenuPopupState() {
  const [role, setRole] = useState("Войти");
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            {role}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <Link href="/admin">
              <MenuItem onClick={popupState.close}>Админ</MenuItem>
            </Link>
            <Link href='/create-account'>
              <MenuItem onClick={popupState.close}>Аккаунт</MenuItem>
            </Link>
            <Link href='/chat'>
              <MenuItem onClick={popupState.close}>Чат</MenuItem>
            </Link>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
