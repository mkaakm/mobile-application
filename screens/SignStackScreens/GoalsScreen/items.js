import {nanoid} from "@reduxjs/toolkit";

import goal1Src from "../../../assets/images/goals/goal-1.jpg";
import goal1MoneySrc from "../../../assets/images/goals/goal-1-money.jpg";
import goal1TimeSrc from "../../../assets/images/goals/goal-1-time.jpg";

import goal2Src from "../../../assets/images/goals/goal-2.jpg";
import goal2MoneySrc from "../../../assets/images/goals/goal-2-money.jpg";
import goal2TimeSrc from "../../../assets/images/goals/goal-2-time.jpg";

import goal3Src from "../../../assets/images/goals/goal-3.jpg";
import goal3MoneySrc from "../../../assets/images/goals/goal-3-money.jpg";
import goal3TimeSrc from "../../../assets/images/goals/goal-3-time.jpg";

import goal4Src from "../../../assets/images/goals/goal-4.jpg";
import goal4MoneySrc from "../../../assets/images/goals/goal-4-money.jpg";
import goal4TimeSrc from "../../../assets/images/goals/goal-4-time.jpg";

const items = [
    {
        id: nanoid(),
        icon: goal1Src,
        moneyIcon: goal1MoneySrc,
        timeIcon: goal1TimeSrc,
        title: "Producer",
        titleColor: "#93773F",
        subTitle: "5 units per month",
        moneyValue: "Earning you $200,000 a year",
        timeValue: "$105 Hourly Rate",
    },
    {
        id: nanoid(),
        icon: goal2Src,
        moneyIcon: goal2MoneySrc,
        timeIcon: goal2TimeSrc,
        title: "Top Producer",
        titleColor: "#909090",
        subTitle: "6-10 units per month",
        moneyValue: "Earning you $420,000 a year",
        timeValue: "$225 Hourly Rate",
    },
    {
        id: nanoid(),
        icon: goal3Src,
        moneyIcon: goal3MoneySrc,
        timeIcon: goal3TimeSrc,
        title: "Master",
        titleColor: "#8A9CE0",
        subTitle: "20 units per month",
        moneyValue: "Earning you $840,000 a year",
        timeValue: "$560 Hourly Rate",
    },
    {
        id: nanoid(),
        icon: goal4Src,
        moneyIcon: goal4MoneySrc,
        timeIcon: goal4TimeSrc,
        title: "ELITE",
        titleColor: "#93773F",
        subTitle: "30 units per month",
        moneyValue: "Earning you $1,260,000 a year",
        timeValue: "$1,000 Hourly Rate",
    },
];

export default items;