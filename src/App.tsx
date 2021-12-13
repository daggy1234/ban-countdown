import React, { useState } from 'react';
import {Avatar, chakra, Flex, Image, Heading, VisuallyHidden, HStack, Button, IconButton, Box, VStack, useColorModeValue, useDisclosure, CloseButton, useColorMode} from '@chakra-ui/react';
import './App.css';
import {encode} from 'bottomify';
import { FaMoon, FaSun } from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import Countdown from 'react-countdown';
import {Helmet} from "react-helmet";

const TITLE = "CORNELL ED DECISION TIMER"
const DONE_STRING = "CORNELL ED DECISIONS ARE OUT!"
const UNTLL_STRING = "Until Cornell ED decisions are out!"
const DATE = new Date(Date.UTC(2021, 11, 14, 0, 0, 0, 0))
const DESCRIPTION = "Bottom friendly countdown for Cornell Decision";
const IMAGE = "https://theccwh.org/wp-content/uploads/2016/11/cornell-logo-3-500x486.gif"

const Completionist = () => <Heading size="4xl">{DONE_STRING}</Heading>;

const renderer = ({ days, hours, minutes, seconds, props, completed }: any) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {

    if (seconds.toString().length <= 1) {
      seconds = "0" + seconds.toString();
    };
    if (minutes.toString().length <= 1) {
      minutes = "0" + minutes.toString();
    };
    
    if (days <= 1) {
      let newh = hours;
      if (days === 1) {
        newh = hours + 24;
      }

      if (newh.toString().length <= 1) {
        newh = "0" + newh.toString();
      };

      if (props.bottom) {
        return <Heading size="4xl">{`${encode(newh)}:${encode(minutes)}:${encode(seconds)}`}</Heading>;
      }
        return <Heading size="4xl">{newh}:{minutes}:{seconds}</Heading>;
      } else {
        if (hours.toString().length <= 1) {
          hours = "0" + hours.toString();
        };
        if (props.bottom) {
          return <Heading size="4xl">{`${encode(days)} ${encode('days')} ${encode(hours)}:${encode(minutes)}:${encode(seconds)}`}</Heading>;
        }
          return <Heading size="4xl">{days} days {hours}:{minutes}:{seconds}</Heading>;
        }
}
};



function App() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [bottom, setBottom] = useState(false);
  const time = DATE;
  return (
    <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="apple-touch-icon" href={IMAGE} />
      <link rel="icon" href={IMAGE} />
    </Helmet>
    <div className="App">
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex alignItems="center">
            <chakra.a
              href="/"
              title={TITLE}
              alignItems="center"
            >
              <Avatar src={IMAGE} alt="Logo IDK" />
              <VisuallyHidden>{TITLE}</VisuallyHidden>
            </chakra.a>
            <chakra.h1 display={{base: 'none', md: "flex"}} fontSize="2xl" fontWeight="bold">
              {TITLE}
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button as="a" href="https://twitter.com/daggy1234" variant="ghost">Twitter</Button>
              <Button as="a" href="https://github.com/daggy1234" variant="ghost">Author</Button>
              <Button as="a" href="https://github.com/Daggy1234/ban-countdown" variant="ghost">Source</Button>
              <Button as="a" href="https://understand.bottom.gg" variant="ghost">Bottom-Software</Button>
            </HStack>
            <Button color={useColorModeValue('white', 'yellow.400')}
                bg={useColorModeValue('gray.600', 'blue.400')} onClick={toggleMode}
                leftIcon={<SwitchIcon />} size="md">
              {useColorModeValue('Dark', 'Light')}
            </Button>
            <Button colorScheme={bottom ? "green" : "yellow"} onClick={
                  () => {
                    setBottom(!bottom)
                  }
                } size="md">
              {bottom ? "🤢 Human" : "🥺 Bottom"}
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button as="a" href="https://twitter.com/daggy1234" variant="ghost">Twitter</Button>
                <Button as="a" href="https://github.com/daggy1234" variant="ghost">Author</Button>
                <Button as="a" href="https://understand.bottom.gg" variant="ghost">Bottom-Software</Button>
                <Button as="a" href="https://github.com/Daggy1234/ban-countdown" variant="ghost">Source</Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
      <Flex>
      <Box  overflowX="scroll" p={3} mx="auto" alignSelf="center" textAlign="center">
        <chakra.h1 mx="auto" textAlign="center" display={{base: 'flex', md: "none"}} fontSize="4xl" fontWeight="bold">
              {TITLE}
        </chakra.h1>
        <Box mx="auto" boxSize="xs">
          <Image mx="auto" src={IMAGE} alt={TITLE} />
        </Box>
        {/* @ts-ignore: Unreachable code erro */}
        <Countdown bottom={bottom} renderer={renderer} date={time}/>
        <Heading>{bottom ? encode(UNTLL_STRING) : UNTLL_STRING}</Heading>
      </Box>
      </Flex>
    </div>
    </>
  );
}

export default App;
