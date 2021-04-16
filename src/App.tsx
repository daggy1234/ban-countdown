import React, { useState } from 'react';
import {Avatar, chakra, Flex, Heading, VisuallyHidden, HStack, Button, IconButton, Box, VStack, useColorModeValue, useDisclosure, CloseButton, useColorMode} from '@chakra-ui/react';
import './App.css';
import {encode} from 'bottomify';
import { FaMoon, FaSun } from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import Countdown from 'react-countdown';

const Completionist = () => <Heading size="4xl">Vex is being banned!</Heading>;

const renderer = ({ hours, minutes, seconds, props, completed }: any) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    if (props.bottom) {
      return <Heading size="4xl">{`${encode(hours)}:${encode(minutes)}:${encode(seconds)}`}</Heading>;
    }
    return <Heading size="4xl">{hours}:{minutes}:{seconds}</Heading>;
  }
};



function App() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [bottom, setBottom] = useState(false);
  const time = new Date(Date.UTC(2021, 4, 16, 0, 47, 40, 740));
  return (
    <div className="App">
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display={{base: 'none', md: "flex"}}
              alignItems="center"
            >
              <Avatar src="https://ih1.redbubble.net/image.2307826827.0863/flat,600x600,075,f.jpg" alt="Logo IDK" />
              <VisuallyHidden>Vex-Ban-Countdown</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="2xl" fontWeight="bold">
              Vex-Ban-Countdown
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button as="a" href="https://github.com/daggy1234" variant="ghost">Author</Button>
              <Button as="a" href="https://github.com/Daggy1234/ban-countdown" variant="ghost">Source</Button>
              <Button as="a" href="https://discord.gg/dpy" variant="ghost">Discord</Button>
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
                <Button as="a" w="full" href="https://github.com/daggy1234" variant="ghost">Author</Button>
                <Button as="a" w="full"  href="https://understand.bottom.gg" variant="ghost">Bottom-Software</Button>
              <Button as="a"   w="full" href="https://github.com/Daggy1234/ban-countdown" variant="ghost">Source</Button>
              <Button as="a"  w="full" href="https://discord.gg/dpy" variant="ghost">Discord</Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
      <Box p="20%" mx="auto" alignSelf="center" textAlign="center">
        {/* @ts-ignore: Unreachable code erro */}
        <Countdown bottom={bottom} renderer={renderer} date={time}/>
        <Heading>{bottom ? encode('Until Vex is banned') : 'Until Vex is banned'}</Heading>
      </Box>
    </div>
  );
}

export default App;
