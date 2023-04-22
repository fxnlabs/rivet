import { Wallet } from '../components/icons/Wallet'
import { Box } from '../design-system/components/Box'
import { Button } from '../design-system/components/Button'
import { Stack } from '../design-system/components/Stack'
import { Text } from '../design-system/components/Text'

export function OnboardingStart() {
  return (
    <Box className={['flex', 'flex-col', 'items-center']}>
      <Box className={['flex', 'items-center', 'flex-1']}>
        <Stack alignHorizontal="center" gap="20px">
          <Wallet size="136px" />
          <Text as="h1" size="40px" weight="medium">
            Dev Wallet
          </Text>
          <Text align="center" size="20px">
            Start using the most powerful, open-source, and developer-focused
            wallet to build your decentralized apps.
          </Text>
        </Stack>
      </Box>
      <Stack gap="8px">
        <Button as="a" href="#/create-wallet">
          Create a new wallet
        </Button>
        <Button variant="stroked">Import existing</Button>
      </Stack>
    </Box>
  )
}
