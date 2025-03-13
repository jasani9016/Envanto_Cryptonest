import React from 'react';
import Image from 'next/image';

import analyticsIcon from '@/assets/img/features/analytics.svg';
import blockChainIcon from '@/assets/img/features/blockchain.svg';
import dashboardIcon from '@/assets/img/features/dashboard.svg';
import instantIcon from '@/assets/img/features/Instant.svg';
import safeIcon from '@/assets/img/features/safe.svg';
import timeIcon from '@/assets/img/features/time.svg';

interface DataType {
    id: number;
    icon: string;
    title: string;
    text: string;
}[];

const features_data: DataType[] = [
    {
        id: 1,
        icon: timeIcon,
        title: "Real Time Update",
        text: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
        id: 2,
        icon: analyticsIcon,
        title: "Advanced Analytics",
        text: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
        id: 3,
        icon: blockChainIcon,
        title: "Blockchain Technology",
        text: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
        id: 4,
        icon: dashboardIcon,
        title: "Email Notifications",
        text: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
        id: 5,
        icon: safeIcon,
        title: "Safe and Secure",
        text: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
        id: 6,
        icon: instantIcon,
        title: "Instant Exchange",
        text: "It is a long established fact that a reader will be distracted by the readable content.",
    }
];


const FeatureDetail = () => {
    return (
        <div className="pt-130 pb-130 bg-section">
            <div className="container">
                <div className="row gy-30 position-relative feature-detail">
                    {features_data.map((item) => (
                        <div key={item.id} className="col-lg-4">
                            <div className="feature-item">
                                <Image src={item.icon} alt="icon" />
                                <h4 className="title">{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeatureDetail;