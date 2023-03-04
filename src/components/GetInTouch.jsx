import React from 'react'
import {
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 10,
                mx: 6,
            }}
        >
            <Title
                text={
                    'Contact Us '
                }
                textAlign={'center'}
            />
            <Paragraph
                text={
                    "At Mukaar Technologies, we are committed to providing our customers with the highest level of service and support. Our team is dedicated to understanding your unique needs and goals, and working with you to develop tailored solutions that meet your requirements. We believe that communication is key to building strong, long-lasting relationships with our customers, and we're always available to answer your questions, address your concerns, and provide ongoing support. Whether you're a small startup or a large enterprise, we're here to help you achieve your objectives and succeed in a competitive market. Choose Mukaar Technologies for software solutions that are designed to deliver results."
                }
                maxWidth={'sm'}
                mx={0}
                textAlign={'center'}
            />
            <Button component={Link}
                to={'/contact'}
                variant="contained"
                type="submit"
                size="medium"
                sx={{
                    fontSize: '0.9rem',
                    textTransform: 'capitalize',
                    py: 2,
                    px: 4,
                    mt: 3,
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
            >
                get in touch
            </Button>

        </Stack>
    )
}

export default GetInTouch;