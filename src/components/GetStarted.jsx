import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/website.jpeg';
import imgDetail2 from '../assets/Mobile-App.png';


const GetStarted = () => {

    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })

    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (

        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}
            sx={{
                py: 10,
                px: 2,

            }}
        >
            <CustomGridItem item xs={12} sm={8} md={6}
                component='section'

            >
                <Box component='article'
                    sx={{
                        px: 4,
                    }}
                >
                    <Title
                        text={
                            'Building your online presence, one site at a time.'
                        }
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        we specialize in creating custom, high-quality websites for businesses and individuals. Our team of experts has extensive experience in website design, development, and optimization, which allows us to create websites that are not only visually appealing but also effective in driving traffic and generating leads.

                        We understand that every business is unique, which is why we offer customized solutions tailored to meet the specific needs and goals of our clients. Our approach involves working closely with our clients to understand their requirements, goals, and target audience, and then creating a website that is designed to meet their needs.

                        Our website design process begins with a detailed analysis of our client's business and target audience. We work closely with our clients to identify their brand identity and unique selling points, which helps us to create a website that accurately represents their business and connects with their audience.       </CustomTypography>
                </Box>

            </CustomGridItem>

            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt=""
                    style={{
                        width: '100%',
                    }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
                sx={{
                    order: { xs: 4, sm: 4, md: 3 }
                }}
            >
                <img src={imgDetail2} alt=""
                    style={{
                        width: "100%",
                    }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
                sx={{
                    order: { xs: 3, sm: 3, md: 4 }
                }}
            >
                <Box component='article'
                    sx={{
                        px: 4,
                    }}
                >
                    <Title
                        text={
                            'Build Mobile Apps that talk to your customers'

                        }
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        It’s really high time for your business to adopt the latest and most modern technologies, like mobile applications etc. And if you are really passionate about the growth of your business and keep in pace with the latest technological advancements, it demands a perfectly crafted mobile application.

                        Mukaar Technologies will be your perfect companion in developing that efficient and user friendly mobile applications for your business. We have more than a decade experience in developing mobile applications in both Android and iOS platforms.Our dynamic and energetic mobile application development team will be always at your doorstep in creating the best-in-class mobile apps.   </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;