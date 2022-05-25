import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { m, motion } from "framer-motion";
import QuoteBox from "../components/QuoteBox";

const Index = () => (
  <Container
    height="100vh"
    bgImage="/bg.jpg"
    bgSize="cover"
    _dark={{ bgImage: "/bg.jpg", bgSize: "cover" }}
  >
    <DarkModeSwitch />
    <QuoteBox />
  </Container>
);

export default Index;
