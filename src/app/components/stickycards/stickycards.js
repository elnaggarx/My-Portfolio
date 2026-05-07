"use client"
import React from 'react'
import Image from "next/image"
import image1 from "@/app/assets/images/personalimage1.jpeg"
import image2 from "@/app/assets/images/personalimage2.jpg"
import image3 from "@/app/assets/images/personalimage3.png"
import image4 from "@/app/assets/images/personalimage4.jpg"
import image5 from "@/app/assets/images/personalimage5.jpeg"
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

gsap.registerPlugin(useGSAP, ScrollTrigger);
const StickyCards = () => {
    const rotations = [-12,10,-5,5,-5,2];
    const containerRef = useRef();
    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();
    const card4Ref = useRef();
    const cardsRef = [card1Ref, card2Ref, card3Ref, card4Ref];

    // Intro quote refs — same animation as the "Obsession" quote on the home page
    const introWrapperRef = useRef();
    const introCardRef = useRef();
    const introQuoteRef = useRef();

    useGSAP(() => {

        // --- Intro quote animations (mirrors home page "Obsession" effect) ---
        // 1) Quote text fades in once the dark card pins to the top of the viewport.
        gsap.set(introQuoteRef.current, { opacity: 0 });
        ScrollTrigger.create({
            trigger: introCardRef.current,
            start: "top top",
            end: "bottom 20%",
            onEnter: () => gsap.to(introQuoteRef.current, { opacity: 1, duration: 1 }),
            onLeaveBack: () => gsap.to(introQuoteRef.current, { opacity: 0, duration: 1 }),
        });

        // 2) Dark card "opens" outward via clip-path as it scrolls into view.
        gsap.fromTo(
            introCardRef.current,
            { clipPath: "inset(0 6% 0 6% round 1.5rem)" },
            {
                clipPath: "inset(0 0% 0 0% round 1.5rem)",
                ease: "none",
                scrollTrigger: {
                    trigger: introWrapperRef.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                },
            }
        );


        cardsRef.forEach((card, index) => {

            gsap.set(card.current, {
                y: window.innerHeight,
                rotation: rotations[index],
            });
        });
        ScrollTrigger.create({
                trigger:containerRef.current,
                start: "top top",
                end: `+=${window.innerHeight * 6}px`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const totalCards = cardsRef.length;
                    const progressPerCard = 1 / totalCards;

                    cardsRef.forEach((card, index) => {
                        const cardStart = index * progressPerCard;
                        let cardProgress = (progress - cardStart) / progressPerCard;
                        cardProgress = Math.min(Math.max(cardProgress, 0), 1);
                        let y = window.innerHeight * (1 - cardProgress);
                        let x = 0;

                        if(cardProgress ===1 && index < totalCards - 1){
                            const remainingProgress = (progress - (cardStart + progressPerCard))/(1- cardStart +progressPerCard);
                            if(remainingProgress > 0){
                                const distanceMultiplier = 1-index*0.15;
                                x = -window.innerWidth * remainingProgress * distanceMultiplier*0.3;
                                y = -window.innerHeight * remainingProgress * distanceMultiplier*0.3;
                            }
                        }
                        gsap.to(card.current, {
                            y: y,
                            x: x,
                            ease: "none",
                        })        
                    })
                },
            })
    }, { scope: containerRef });


  return (
    
    <div>
        <div ref={introWrapperRef} className='flex items-center justify-center w-full'>
            <div ref={introCardRef} className='h-screen w-full bg-[#202020] box-border p-6 md:p-8 m-0 flex items-center justify-center relative rounded-3xl md:rounded-4xl'>

                <p ref={introQuoteRef} className="text-3xl md:text-5xl lg:text-7xl text-center  font-[bomstad-light] text-white">Life is a succession of moments.<br></br>To live each one is to succeed.</p>
            </div>
        </div>
        <div className="bg-[#e3e3e3] h-screen relative" ref={containerRef}>
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[60%] bg-[#ffff] p-[0.5em] flex flex-col gap-[0.5em] rounded-md" ref={card1Ref}>

                <Image className="w-full  object-cover min-h-0 flex-1" src={image1} alt="Personal Image" />
                <p>ME-2024</p>
            </div>
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[60%] bg-[#ffff] p-[0.5em] flex flex-col gap-[0.5em] rounded-md" ref={card2Ref} >

                <Image className="w-full  object-cover min-h-0 flex-1" src={image3} alt="Personal Image" />
                <p>ME-2026</p>
            </div>
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[60%] bg-[#ffff] p-[0.5em] flex flex-col gap-[0.5em] rounded-md" ref={card3Ref}>

                <Image className="w-full  object-cover min-h-0 flex-1" src={image5} alt="Personal Image" />
                <p>ME-2025</p>
            </div>

            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[60%] bg-[#ffff] p-[0.5em] flex flex-col gap-[0.5em] rounded-md" ref={card4Ref}>

                <Image className="w-full  object-cover min-h-0 flex-1" src={image4} alt="Personal Image" />
                <p>ME-2025</p>
            </div>

        </div>
    </div>
  )
}

export default StickyCards;
