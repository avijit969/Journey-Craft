import { Avatar } from "@material-tailwind/react";
import { useSelector,useDispatch } from "react-redux";

export function Avt() {
  const userData = useSelector(state => state.auth.userData?.user);
  return <Avatar src={`${userData?.avatar}`} alt="avatar" size="xl" />;
}