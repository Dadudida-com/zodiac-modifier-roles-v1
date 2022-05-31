import { Box, makeStyles, Typography } from "@material-ui/core"
import RolesModuleLogo from "../../../assets/images/roles-module-logo.png"
import { ChainPicker } from "./ChainPicker"
import { HeaderBox } from "./HeaderBox"
import { HeaderAddressBox } from "./HeaderAddressBox"
import { useRootSelector } from "../../../store"
import { getRolesModifierAddress } from "../../../store/main/selectors"
import { ConnectWalletBox } from "./ConnectWalletBox"
import { useNavigate } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    marginBottom: theme.spacing(2),
  },
  img: {
    display: "block",
    width: 36,
    height: 36,
  },
  title: {
    marginLeft: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
}))

export const Header = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const module = useRootSelector(getRolesModifierAddress)

  return (
    <Box className={classes.root}>
      <HeaderBox
        icon={<img src={RolesModuleLogo} alt="Roles App Logo" className={classes.img} />}
        onClick={() => navigate(`/${module}`)}
      >
        <Typography variant="h5" className={classes.title}>
          Roles
        </Typography>
      </HeaderBox>
      <HeaderBox className={classes.grow} />
      <ChainPicker />
      <HeaderAddressBox address={module} emptyText="No Safe Attached" />
      <ConnectWalletBox />
    </Box>
  )
}
