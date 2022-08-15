import { Box, Center, Flex, Image, Text, useDisclosure, Wrap } from "@chakra-ui/react";
import React from "react";
import { Details } from "../organisms/Contents/Details";
import '../../App.css';
import AnimationTrigger from "../AnimationTrigger";
import { Footer } from "../organisms/layout/Footer";




export const Home: React.VFC= () => {


    return (
        <>
        
        <Flex 
        justify={"space-around"}
        bg="#ECECE7"
        pt={200}
        >
            <Box
            maxW={{ base: "100%", md: "xl" }}
            >
                <Text fontSize='6xl' color="gray.700" fontWeight={"normal"} fontFamily={"mono"}>YUJI INOGUCHI</Text>
                <Text fontSize='2xl' color="gray.700" fontWeight={"normal"} fontFamily={"mono"}>_  PORTFOLIO SITE  ...</Text>
            </Box>
            <Box
            maxW={{ base: "100%", md: "sm" }}
            mr={100}
            >
                <Image className="top-img" src={`${process.env.PUBLIC_URL}/img/illab-logo.png`}></Image>
            </Box>

        
        </Flex>
        <Image src={`${process.env.PUBLIC_URL}/img/wave.svg`}></Image>
        
        <Text fontSize={"9xl"} textAlign={"right"} mt={"-7%"} mr={"5%"} mb={"3%"} className={"work"}>Work</Text>
        <AnimationTrigger animation="fadeIn">

            {/* <Text fontSize={"9xl"} fontFamily={"fantasy"} textAlign={"right"} mt={-100} mr={"10%"} className={"work"}>Work</Text> */}
            <Wrap p={{ base: 4, md: 10 }} justify='center'>
                
                
                <Details image={`${process.env.PUBLIC_URL}/img/Airbnb_Home.jpg`} title="Airbnb模写サイト1" detail="HTML/CSS" modal={`${process.env.PUBLIC_URL}/img/Airbnb.jpg`}/>

                <Details image={`${process.env.PUBLIC_URL}/img/React_Home.jpg`} title="事業サイト" detail="React/TypeScript" modal={`${process.env.PUBLIC_URL}/img/BusinessSite.jpg`}/> 
                
                <Details image={`${process.env.PUBLIC_URL}/img/SampleSite_Home.jpg`} title="サンプルサイト" detail="HTML/CSS"  modal={`${process.env.PUBLIC_URL}/img/SampleSite.jpg`}/>
                
                <Details image={`${process.env.PUBLIC_URL}/img/ShopifySite_Home.jpg`} title="制作会社様ご依頼" detail="HTML/CSS/JavaScript/Shopify/Liquid" modal={`${process.env.PUBLIC_URL}/img/ShopifySite.jpg`}/>
                
                <Details image={`${process.env.PUBLIC_URL}/img/BusinessSite_Home.jpg`} title="事業サイト" detail="HTML/CSS/JavaScript/WordPress" modal={`${process.env.PUBLIC_URL}/img/BusinessSite.jpg`}/> 
                
                <Details image={`${process.env.PUBLIC_URL}/img/Case_Home.jpg`} title="制作会社様ご依頼" detail="HTML/CSS/JavaScript" modal={`${process.env.PUBLIC_URL}/img/Case.jpg`}/>
                
                <Details image={`${process.env.PUBLIC_URL}/img/SampleSiteCompany_Home.jpg`} title="企業サンプルサイト" detail="HTML/CSS" modal={`${process.env.PUBLIC_URL}/img/SampleSiteCompany.jpg`}/>

                <Details image={`${process.env.PUBLIC_URL}/img/SalonSample_Home.jpg`} title="Salonサイト" detail="HTML/CSS/JavaScript/PHP"  modal={`${process.env.PUBLIC_URL}/img/SalonSample.jpg`}/>

                <Details image={`${process.env.PUBLIC_URL}/img/FrogSchool_Home.jpg`} title="FrogSchool模写サイト2" detail="HTML/CSS"  modal={`${process.env.PUBLIC_URL}/img/FrogSchool.jpg`}/>

            </Wrap>

        </AnimationTrigger>


        
        <Image mt={-70} src={`${process.env.PUBLIC_URL}/img/wave-footer.svg`}></Image>
        <Flex 
        justify={"flex-end"}
        bg="#ECECE7"
        pt={200}
        >
            <Box
            maxW={{ base: "100%", md: "xl" }}
            mr={10}
            >
                <Text textAlign={"left"} mt={"-50%"} ml={"-45%"} mb={"10%"} className={"about"}></Text>
                <Text fontSize='3xl' color="gray.700" fontWeight={"normal"} fontFamily={"mono"}>イノグチユウジ</Text>
                <Text fontSize='ms' color="gray.700" fontWeight={"normal"} fontFamily={"mono"}pt={5} lineHeight={7}>拝見いただきありがとうございます。
                お仕事をご一緒させていただいているかた、いつもありがとうございます。
                初めてお会いするかた、初めまして。井ノ口雄次と申します。
                以前は自動車業界で整備や検査、工程管理をしておりましたが、プログラムでのものづくりに興味をもち、独学で勉強を始め、現在Webエンジニアをしております。<br />
                制作会社さまと一緒にお仕事をさせていただいたり、個人さまから制作のご依頼をいただいたり、時代に合わせた技術を追いかけつつ、制作したものを使用いただく方の悩みや課題を解決できるよう日々スキルを磨いております。
                <br />楽しみを忘れずに切磋琢磨しておりますので、これからご縁でご一緒させていただいた方々、何卒よろしくお願いいたします。
                </Text>
            </Box>
            <Box
            maxW={{ base: "100%", md: "sm" }}
            mr={100}
            >
                <Image className="about-img" src={`${process.env.PUBLIC_URL}/img/profile.JPG`}></Image>
            </Box>

        
        </Flex>


        <Footer />
        </>
    )
    
};

