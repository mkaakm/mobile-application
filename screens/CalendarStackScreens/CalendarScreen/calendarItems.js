import {nanoid} from "@reduxjs/toolkit";

export const months = [
    {label: 'March', value: 'March'},
];

const week = {
    0: "Mon",
    1: "Tue",
    2: "Wed",
    3: "Thu",
    4: "Fri"
};

const now = new Date();

export const days = Array(5).fill(null).map((_, index) => {
    const date = new Date();
    const caf = index + 1 - now.getDay();
    date.setHours(caf * 24);

    return {
        title: week[index],
        value: date.getDate()
    }
})

export const calendarSteps = [
    {
        id: nanoid(),
        text: "6 AM",
    },
    {
        id: nanoid(),
        text: "7 AM",
    },
    {
        id: nanoid(),
        text: "8 AM",
    },
    {
        id: nanoid(),
        text: "9 AM",
    },
    {
        id: nanoid(),
        text: "10 AM",
    },
    {
        id: nanoid(),
        text: "11 AM",
    },
    {
        id: nanoid(),
        text: "12 AM",
    },
    {
        id: nanoid(),
        text: "1 PM",
    },
    {
        id: nanoid(),
        text: "2 PM",
    },
    {
        id: nanoid(),
        text: "3 PM",
    },
    {
        id: nanoid(),
        text: "4 PM",
    },
    {
        id: nanoid(),
        text: "5 PM",
    },
    {
        id: nanoid(),
        text: "6 PM",
    },
    {
        id: nanoid(),
        text: "7 PM",
    },
    {
        id: nanoid(),
        text: "8 PM",
    },
]

export const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const itemBgColors = {
    free: "#4fb9f5",
    "personal": "#f7f8fa",
    mindset: "#eff4b1",
    market: "#00b050",
    "email": "#f13265"
}