import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}:ProfileProps) {
  return (
    <Flex align="center" >
      { showProfileData && (
          <Box mr="4" textAlign="right" >
            <Text>Honzcha</Text>
            <Text color="gray.300" fontSize="small" >
              honzcha@email.com
            </Text>
          </Box>
      )}

    <Avatar 
      size="md" 
      name="Honzcha" 
      src="https://github.com/honzcha.png"
    />

  </Flex>
  );
}