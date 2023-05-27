import { Box, Button, Flex } from "@chakra-ui/react";
import HeaderComponent from "../../components/HeaderComponent";
import TranslateInputBoxComponent from "./TranslateInputBoxComponent";
import { useState } from "react";
import { SiOpenai } from "react-icons/si"
import { FaBrain } from "react-icons/fa"

export default function ClearTextPage() {
  const [selectedAi, setSelectedAi] = useState('gpt')

  return (
    <Box
      h={'100vh'}
    >
      <HeaderComponent />
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minH={'90%'}
        w={'100%'}
        px={'10%'}
        bg={'#f0f0f0'}
        gap={'40px'}
      >
        <Flex
          h={'100%'}
          w={'100%'}
        >
          <Button
            color={'#3F72AF'}
            leftIcon={<SiOpenai />}
            variant={"solid"}
            isDisabled={selectedAi === 'gpt'}
            onClick={() => setSelectedAi('gpt')}
          >
            {'Chat GPT'}
          </Button>
          <Box w={'1px'} bg={'#CCC'} />
          <Button
            color={'#3F72AF'}
            leftIcon={<FaBrain />}
            variant={"solid"}
            isDisabled={selectedAi === 'soffos'}
            onClick={() => setSelectedAi('soffos')}
          >
            {'Soffos'}
          </Button>
        </Flex>
        <TranslateInputBoxComponent />
      </Flex>
    </Box>
  )
}