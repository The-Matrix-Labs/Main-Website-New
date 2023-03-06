import React from 'react';
import bg1Img from "../assests/images/icon-bg1.svg";
import transparencyImg from "../assests/images/icon-transparency.svg";

import "./style.css";

export default function Home()
{
    return (
        <>
            <div className="backdropDiv1">
            <div id="home" className="mainWrapper1">
                <div className="titleContent">
                    <div>
                    <div className="mainHeadingTxt">
                        We&nbsp;create
                        <br />
                        <div className="gradientTxt">Smart Contracts</div>
                    </div>
                    </div>
                    <div className="titleInfo">
                        We provide blockchain services from Smart Contract Development and Audit to creating Launchpads, NFT Marketplaces and any kind of unique DAPPs
                    </div>
                    <div className='titleFeatures'>
                        <div className='titleFeatureItem'>
                            <div className='titleFeatureItemContent1'>40+</div>
                            <div className='titleFeatureItemContent2'>SmartContract</div>
                        </div>
                        <div className='titleFeatureItem'>
                            <div className='titleFeatureItemContent1'>100+</div>
                            <div className='titleFeatureItemContent2'>Projects Completed </div>
                        </div>
                        <div className='titleFeatureItem'>
                            <div className='titleFeatureItemContent1'>20+</div>
                            <div className='titleFeatureItemContent2'>Team Members</div>
                        </div>
                    </div>
                    <div className="getaquotaBtn">Get&nbsp;a&nbsp;Quote</div>
                </div>
                <img src={bg1Img} alt="ai-img" className="float-img" />
            </div>
            </div>
            <div className='mainWrapper2'>
                <div className='maintext2'>Build with us <span> where scalability is never and issue</span></div>
                <div className='whyChooseDiv'>
                    <div className='whyChooseHeading'>Why Choose us?</div>
                    <div className='whyChooseTxt'>We make sure we bring you more value than you will be investing with us. <br/>Don’t just make dApps/Websites, build real profitable businesses with us.</div>
                </div>
                <div className='featureGrid'>
                    <div className='featureGridItems'>
                        <img src={transparencyImg} alt="transparency-img" className="featureGridIcons" />
                        <div>Transparency</div>
                    </div>
                    <div className='featureGridItems'>
                        <img src={transparencyImg} alt="transparency-img" className="featureGridIcons" />
                        <div>Data Protection</div>
                    </div>
                    <div className='featureGridItems'>
                        <img src={transparencyImg} alt="transparency-img" className="featureGridIcons" />
                        <div>SAFU Developers</div>
                    </div>
                    <div className='featureGridItems'>
                        <img src={transparencyImg} alt="transparency-img" className="featureGridIcons" />
                        <div>Fast & Secure</div>
                    </div>
                </div>
            </div>
            <div className='mainWrapper3'>
                <div className='ourServicesHeading'>Our <span>Services</span></div>
                <div className='ourServicesTxt'>Our services help everyone from startups to enterprises to launch and maintain their applications on the blockchain.</div>
                <div className='serviceGrid'>
                    <div className='serviceGridRow'>
                    <div className='serviceGridItem'>
                        <img src={transparencyImg} alt="transparency-img" className="serviceGridItemImg" />
                        <div className='serviceGridItemHeading'>SMART CONTRACT</div>
                        <div className='serviceGridItemTxt'>Our services help everyone from startups to enterprises and more</div>
                        <div className='knowmoreBtn'>Know More</div>
                    </div>
                    <div className='serviceGridItem'>
                        <img src={transparencyImg} alt="transparency-img" className="serviceGridItemImg" />
                        <div className='serviceGridItemHeading'>DAPP DEVELOPMENT</div>
                        <div className='serviceGridItemTxt'>Our services help everyone from startups to enterprises and more</div>
                        <div className='knowmoreBtn'>Know More</div>
                    </div>
                    <div className='serviceGridItem'>
                        <img src={transparencyImg} alt="transparency-img" className="serviceGridItemImg" />
                        <div className='serviceGridItemHeading'>WEBSITE DEVELOPMENT</div>
                        <div className='serviceGridItemTxt'>Our services help everyone from startups to enterprises and more</div>
                        <div className='knowmoreBtn'>Know More</div>
                    </div>
                    </div>
                    <div className='serviceGridRow'>
                    <div className='serviceGridItem'>
                        <img src={transparencyImg} alt="transparency-img" className="serviceGridItemImg" />
                        <div className='serviceGridItemHeading'>NFT AND TOKEN</div>
                        <div className='serviceGridItemTxt'>Our services help everyone from startups to enterprises and more</div>
                        <div className='knowmoreBtn'>Know More</div>
                    </div>
                    <div className='serviceGridItem'>
                        <img src={transparencyImg} alt="transparency-img" className="serviceGridItemImg" />
                        <div className='serviceGridItemHeading'>ANDROID AND IOS APP</div>
                        <div className='serviceGridItemTxt'>Our services help everyone from startups to enterprises and more</div>
                        <div className='knowmoreBtn'>Know More</div>
                    </div>
                    <div className='serviceGridItem'>
                        <img src={transparencyImg} alt="transparency-img" className="serviceGridItemImg" />
                        <div className='serviceGridItemHeading'>MARKETPLACES</div>
                        <div className='serviceGridItemTxt'>Our services help everyone from startups to enterprises and more</div>
                        <div className='knowmoreBtn'>Know More</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}