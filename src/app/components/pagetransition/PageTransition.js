"use client";
import React, { useEffect } from 'react'
import Logo from '../logo/Logo'
import { useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import {gsap} from "gsap"


const PageTransition = ({children}) => {
    const router = useRouter();
    const pathname = usePathname();
    const transitionOverlayRef = useRef(null);
    const logoOverlayRef = useRef(null);
    const logoRef = useRef(null);
    const blocksRef = useRef([]);
    const isTransitioning = useRef(false);

    const coverPage = (url) => {
    const paths = Array.from(logoRef.current.querySelectorAll("path"));

    const t1 = gsap.timeline({
        onComplete: () => { router.push(url) }
    });

    t1.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
        transformOrigin: "left",
    })
    /*.set(logoOverlayRef.current, { opacity: 1 }, '-=0.2')
    .set(paths[0], {
        strokeDashoffset: paths[0].getTotalLength(),
        fill: "transparent"
    }, '-=0.25')
    .set(paths[1], {
        strokeDashoffset: paths[1].getTotalLength(),
        fill: "transparent"
    }, '-=0.25')
    .to(paths[0], {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut"
    }, '-=0.5')
    .to(paths[1], {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut"
    }, '-=0.5')
    .to(paths[0], {
        fill: "#fff",
        duration: 1,
        ease: "power2.out"
    }, '-=0.5')
    .to(paths[1], {
        fill: "#fff",
        duration: 1,
        ease: "power2.out"
    }, '-=0.5')
    .to(logoOverlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
    });*/
};

    const revealPage = ()=>{
        gsap.set(blocksRef.current , {transformOrigin:"right",  scaleX:1});
        gsap.to(blocksRef.current,{
            scaleX:0,
            duration:0.4,
            stagger:0.02,
            ease: "power2.inOut",
            onComplete:()=>{
                isTransitioning.current = false;
            }
        })
    }

    useEffect(()=>{




        const createBlocks = ()=>{
            if(!transitionOverlayRef.current){
                return;
            }
            transitionOverlayRef.current.innerHTML = "";
            blocksRef.current = []
            for(let i=0;i<20;i++){
                const block = document.createElement("div");
                block.className = "block";
                transitionOverlayRef.current.appendChild(block);
                blocksRef.current.push(block);
            }
        }

        createBlocks();

        /*gsap.set(blocksRef.current, {scaleX:0, transformOrigin:"left"});

        if(logoRef.current){
            const paths = logoRef.current.querySelectorAll("path");
            paths.forEach(path => {
                const length = path.getTotalLength();
                gsap.set(path, {strokeDasharray:length, strokeDashoffset:length, fill:"transparent"});
            });
        }*/

        revealPage();

        const handleRouteChange = (url)=>{
            if(isTransitioning.current)                return;
            isTransitioning.current = true;
            coverPage(url);
        }

        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach(link => {
            link.addEventListener("click", (e)=>{
                e.preventDefault();
                const href = e.currentTarget.href;
                const url = new URL(href).pathname;
                if(url !== pathname){
                    handleRouteChange(url);
                }
            })
        })

        return ()=>{
            links.forEach((link)=>{
                link.removeEventListener("click",handleRouteChange)
            })
        }


    



    },[router , pathname])



  return (
    <>
        <div className="transition-overlay fixed top-0 left-0 w-full h-screen flex z-10 " ref={transitionOverlayRef}></div>
        {/*<div className="logo-overlay fixed top-0 left-0 w-full h-screen z-10 flex justify-center items-center bg-white  opacity-0 " ref={logoOverlayRef}>
            <div className='logo-container h-200px w-200px flex justify-center items-center p-20px'>
                <Logo ref={logoRef}></Logo>
            </div>
        </div>*/}
        {children}
    </>
  )
}

export default PageTransition
