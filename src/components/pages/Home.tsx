import { Box, Flex, Image, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { Details } from "../organisms/Contents/Details";
import '../../App.css';
import AnimationTrigger from "../../atoms/AnimationTrigger";
import { Footer } from "../organisms/layout/Footer";


export const Home: React.VFC= () => {

    return (
        <>
        
        <Box p={0} display={{ base: 'block', md: 'flex' }}
        justifyContent={{ sm: 'space-around' , md: 'space-around' }}
        bg="#ECECE7"
        pt={{ base: 100 , md: 200}}
        >
            <Box
            maxW={{ base: "80%", md: "xl" }}
            mx={{ base: "auto" , md: 100 }}
            >
                <Text fontSize='6xl' color="gray.700" fontWeight={"normal"} fontFamily={"mono"}>YUJI INOGUCHI</Text>
                <Text fontSize='2xl' color="gray.700" fontWeight={"normal"} fontFamily={"mono"}>_  PORTFOLIO SITE  ...</Text>
            </Box>
            <Box
            maxW={{ base: "100%" ,md: "sm" }}
            mt={{ base: 50 , sm: 0 , md: 0 }}
            mr={{ base: 0 , sm: 0 , md: 100 }}
            >
                <Image className="top-img" maxW={{ base: "80%" ,md: "sm" }} src={`${process.env.PUBLIC_URL}/img/illab-logo.png`} mx={{ base: "auto" }}></Image>
            </Box>

        
        </Box>

        <Image src={`${process.env.PUBLIC_URL}/img/wave.svg`}></Image>
        
        <Text
        maxW={{ base: "90%" , md: "100%" }}
        fontSize={{ base: "7xl" ,md: "9xl"}} 
        textAlign={"right"} 
        mt={{ base: 0 , md:"-7%" }} 
        mr={{ base: 0 , md:"10%" }} 
        mb={{ base: "10%" , md:"7%" }} 
        className={"work"}>
        _ Work _
        </Text>

        <AnimationTrigger animation="fadeIn">

            
            <Wrap p={{ base: 0, sm: 10 ,md: 10 }} justify='center'>
                
                
                <Details image={`${process.env.PUBLIC_URL}/img/Airbnb_home.jpg`} title="Airbnb模写サイト" detail="HTML/CSS" modal={`${process.env.PUBLIC_URL}/img/Airbnb.jpg`}/>

                <Details image={`${process.env.PUBLIC_URL}/img/React_Home.jpg`} title="ポートフォリオ" detail="React/TypeScript" modal={`${process.env.PUBLIC_URL}/img/Portfolio.jpg`}/> 
                
                <Details image={`${process.env.PUBLIC_URL}/img/SampleSite_Home.jpg`} title="サンプルサイト" detail="HTML/CSS"  modal={`${process.env.PUBLIC_URL}/img/SampleSite.jpg`}/>
                
                <Details image={`${process.env.PUBLIC_URL}/img/ShopifySite_Home.jpg`} title="制作会社様ご依頼" detail="HTML/CSS/JavaScript/Shopify/Liquid" modal={`${process.env.PUBLIC_URL}/img/ShopifySite.jpg`}/>
                
                <Details image={`${process.env.PUBLIC_URL}/img/BusinessSite_Home.jpg`} title="事業サイト" detail="HTML/CSS/JavaScript/WordPress" modal={`${process.env.PUBLIC_URL}/img/BusinessSite.jpg`}/> 
                
                <Details image={`${process.env.PUBLIC_URL}/img/Case_Home.jpg`} title="制作会社様ご依頼" detail="HTML/CSS/JavaScript" modal={`${process.env.PUBLIC_URL}/img/Case.jpg`}/>
                
                <Details image={`${process.env.PUBLIC_URL}/img/SampleSiteCompany_Home.jpg`} title="企業サンプルサイト" detail="HTML/CSS" modal={`${process.env.PUBLIC_URL}/img/SampleSiteCompany.jpg`}/>

                <Details image={`${process.env.PUBLIC_URL}/img/SalonSample_Home.jpg`} title="Salonサイト" detail="HTML/CSS/JavaScript/PHP"  modal={`${process.env.PUBLIC_URL}/img/SalonSample.jpg`}/>

                <Details image={`${process.env.PUBLIC_URL}/img/FrogSchool_Home.jpg`} title="FrogSchool模写サイト" detail="HTML/CSS"  modal={`${process.env.PUBLIC_URL}/img/FrogSchool.jpg`}/>

            </Wrap>

        </AnimationTrigger>


        
        <Image mt={{ base: 0 , md:-70 }} src={`${process.env.PUBLIC_URL}/img/wave-footer.svg`}></Image>

        
        <Box display={{ base: 'block', md: 'flex' }}
        justifyContent={{ md:"flex-end" }}
        bg="#ECECE7"
        pt={200}
        pb={{ base: "15%" , md: "5%" }}
        >
            <Box
            maxW={{ base: "90%", md: "xl" }}
            // mx={{ base: "auto" }}
            mr={{ base: "auto" , md: 100 }}
            ml={{ base: "auto" }}
            >
                <Text
                fontSize={{ base: "7xl" ,md: "9xl"}} 
                textAlign={"left"}
                mt={{ base: "-30%" , md: "-40%" }}
                ml={{ base: 0 , md: "-60%" }}
                mb={{ base: "20%" , md: "10%" }}
                className={"about"}>
                _ About _
                </Text>
                
                <Text fontSize='3xl' color="gray.700" fontWeight={"normal"} fontFamily={"mono"}>イノグチユウジ</Text>
                <Text fontSize='ms' color="gray.700" fontWeight={"normal"} fontFamily={"mono"}pt={5} lineHeight={7} textAlign={"justify"}>拝見いただきありがとうございます。
                お仕事をご一緒させていただいているかた、いつもありがとうございます。
                初めてお会いするかた、初めまして。井ノ口雄次と申します。<br />
                以前は自動車業界で整備や検査、工程管理をしておりましたが、プログラムでのものづくりに興味をもち、独学で勉強を始め、現在Webエンジニアをしております。<br />
                制作会社さまと一緒にお仕事をさせていただいたり、個人さまから制作のご依頼をいただいたり、時代に合わせた技術を追いかけつつ、制作したものを使用いただく方の悩みや課題を解決できるよう日々スキルを磨いております。
                <br />楽しみを忘れずに切磋琢磨しておりますので、これからご縁でご一緒させていただく皆さま、何卒よろしくお願いいたします。
                </Text>
                

                <Flex mt={7} justify={"space-between"}>
                    <Flex align={"end"}>
                        <Text>Contact_</Text>
                        <a href="https://line.me/ti/p/1kijWthKgG" rel='noreferrer noopener' target='_blank' className="about-icon"><Box px={2}><Image src={`${process.env.PUBLIC_URL}/img/line-icon.png`}></Image></Box></a>
                        <a href="mailto:y8m1.wa1017@gmail.com" rel='noreferrer noopener' target='_blank' className="about-icon"><Box px={1}><Image src={`${process.env.PUBLIC_URL}/img/mail-icon.png`}></Image></Box></a>
                    </Flex>

                    <Flex align={"center"}>
                        <a href="https://twitter.com/yuji_illab" rel='noreferrer noopener' target='_blank' className="about-icon"><Box px={3}><Image src={`${process.env.PUBLIC_URL}/img/twiiter-icon.png`}></Image></Box></a>

                        <a href="https://github.com/yuji-inoguchi" rel='noreferrer noopener' target='_blank' className="about-icon"><Box><Image src={`${process.env.PUBLIC_URL}/img/github-icon.png`}></Image></Box></a>
                    </Flex>
                </Flex>
            </Box>

            <Box
            maxW={{ base: "80%" , md: "sm" }}
            // mx={{ base: "auto" }}
            mr={{ base: "auto" , md: 150}}
            ml={{ base: "auto" , md: "unset" }}
            alignItems={"center"}
            justifyContent={"center"}
            >
                <Image className="about-img" maxW={{ base: "80%" , md: "100%" }} alignItems={"center"} m={{ base: "auto" , md: "unset" }} mt={{ base: "15%" , md: "unset" }} src={`${process.env.PUBLIC_URL}/img/profile.JPG`}></Image>
            </Box>

        </Box>

        <Footer />
        </>
    )
    
};

