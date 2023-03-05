import React from 'react';
import bg1Img from "../assests/images/icon-bg1.svg";
import "./style.css";

export default function Home()
{
    return (
        <>
            <div className="backdropDiv1">
            <div className="eclipseDiv"></div>
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
        </>
    );
}