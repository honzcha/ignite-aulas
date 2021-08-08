import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

//extends the chakra link props so all original props can be used plus this ones below, not limited to the ones below
interface NavLinkProps extends LinkProps{
  // use element type when passing the name of a component as a prop
  icon: ElementType;
  children: string;
}
export function NavLink({icon, children, ...rest}: NavLinkProps) {
  return(
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
   </Link>
  )
}











