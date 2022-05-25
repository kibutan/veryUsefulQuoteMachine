import { Avatar, Box, HStack, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {};

export default function QuoteBox({}: Props) {
  return (
    <HStack
      h="50%"
      w="50%"
      as={motion.div}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
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
      <Avatar marginLeft="16" />
      <Stack>
        <Box fontSize="sm">Author</Box>
        <Box>Quote</Box>
      </Stack>
    </HStack>
  );
}
