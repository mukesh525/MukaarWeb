import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/it.png'

const Header = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'orange',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


    return (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText
                component='section'
            >
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                    }}
                >
                    Empowering your business through technology.
                </Typography>

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                    }}
                >
                    Welcome to Mukaar Technologies, a leading provider of innovative software solutions that help businesses thrive in the digital age. Our cutting-edge software is designed to simplify complex processes, improve efficiency, and enhance productivity across a wide range of industries. From cloud-based solutions to mobile apps and enterprise software, our products are built to meet the unique needs of businesses of all sizes, helping them to stay ahead of the curve in an ever-changing market. Our team of expert developers, designers, and engineers work tirelessly to create software that is not only advanced but easy to use and accessible to all. Whether you're looking to streamline your operations, improve your customer experience, or expand your reach, we have the expertise and tools to help you achieve your goals. Contact us today to learn more about how our software solutions can transform your business.
                </Typography>

                <Box>
                    <Button
                        variant='contained'
                        sx={{
                            mr: 2,
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            borderColor: '#14192d',
                            color: '#fff',
                            backgroundColor: '#14192d',
                            "&&:hover": {
                                backgroundColor: "#343a55"
                            },
                            "&&:focus": {
                                backgroundColor: "#343a55"
                            }
                        }}
                    >
                        Contact Now
                    </Button>
                    <Button
                        component={Link}
                        to={'/about'}
                        variant='outlined'
                        sx={{
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            color: '#fff',
                            backgroundColor: 'transparent',
                            borderColor: '#fff',
                            "&&:hover": {
                                color: '#343a55',
                                borderColor: '#343a55',
                            },
                            "&&:focus": {
                                color: '#343a55',
                                borderColor: '#343a55',
                            }
                        }}
                    >
                        explore
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]: {
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]: {
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                    src={headerImg}
                    alt="headerImg"
                    style={{
                        width: "90%",
                        marginBottom: -15,
                    }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header