import React from 'react'
import {
  Box,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack)(() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (

    <BoxRow
      component='footer'
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn>
        <FooterTitle text={'address'} />
        <FooterLink
          text={'Candeur Landmark'}
        />
        <FooterLink
          text={'Bangalore 560087,India'}
        />
        <FooterLink
          text={'PH: 08068447692'}
        />
        <FooterLink
          text={'support@mukaar.com'}
        />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'our services'} />
        <FooterLink text={'Website Building'} />
        <FooterLink text={'Mobile Application'} />
        <FooterLink text={'Managing Servers'} />
        <FooterLink text={'Digital marketing'} />
      </StackColumn>
      {/* <StackColumn>
        <FooterTitle text={'our company'} />
        <FooterLink text={'reporting'} />
        <FooterLink text={'get in touch'} />
        <FooterLink text={'management'} />
      </StackColumn> */}

      <StackColumn>
        <FooterTitle text={'Mukaar'} />
        <Stack
          direction='row'
          width='70px'
          maxWidth='100%'
          justifyContent='space-between'
        >
          <Link href="#" variant="body2"
            sx={{
              color: '#414141',
              "&:hover": {
                color: '#1c2859',
              }
            }}
          >
            <InstagramIcon />
          </Link>
          <Link href="https://www.facebook.com/mukaarTech" variant="body2"
            sx={{
              color: '#414141',
              "&:hover": {
                color: '#1c2859',
              }
            }}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography
          variant='caption'
          component='p'
        >
          &copy; 2022 Mukaar Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer