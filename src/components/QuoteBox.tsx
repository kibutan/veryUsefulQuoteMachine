import { Avatar, Box, HStack, Stack } from "@chakra-ui/react";

type Props = {};

export default function QuoteBox({}: Props) {
  return (
    <HStack
      h="50%"
      w="50%"
      bg="whiteAlpha.300"
      border="1px solid"
      borderColor="whiteAlpha.200"
      color="blackAlpha.800"
      fontSize="2xl"
      fontWeight="bold"
      _dark={{
        bg: "blackAlpha.500",
        borderColor: "blackAlpha.300",
        color: "whiteAlpha.800",
      }}
      rounded="lg"
      justifyContent="start"
      alignItems="center"
      display="flex"
    >
      <Avatar mx="5" />
      <Stack>
        <Box fontSize="sm">Author</Box>
        <Box>Quote</Box>
      </Stack>
    </HStack>
  );
}
