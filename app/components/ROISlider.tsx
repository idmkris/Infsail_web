'use client';

import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const ROISlider: React.FC = () => {
    const [investment, setInvestment] = useState(10000);
    const [sliderValue, setSliderValue] = useState(3); // Default to 2 years

    const durationOptions = [
        { label: '6 M', value: 6 },
        { label: '1 Yr', value: 12 },
        { label: '18 M', value: 18 },
        { label: '2 Yr', value: 24 },
    ];

    const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
        setInvestment(isNaN(value) ? 0 : value);
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setSliderValue(newValue as number);
    };

    const calculateROI = () => {
        const duration = durationOptions[sliderValue].value;
        const roi = investment * (duration / 12 * 0.468 + 1);
        return roi.toFixed(2);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center ">

            {/* Left Side: Input and Slider */}
            <div className="space-y-4 w-full md:w-1/2">
                {/* Initial Investment Input */}
                <div className="roi-input-container mb-14">
                    <p className="text-2xl font-semibold mb-8">Initial investment</p>
                    <div className="input-container">
                        <input
                            type="text"
                            aria-label="Input Value"
                            value={`$${investment.toLocaleString()}`}
                            onChange={handleInvestmentChange}
                            className="border px-4 py-4 w-2/3 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Investment Duration Slider */}
                <div className="roi-duration-container">
                    <p className="text-2xl font-semibold mb-8">Investment duration</p>
                    <Box sx={{ width: '80%' }}>
                        <Slider
                            aria-label="Investment duration slider"
                            defaultValue={3}
                            step={1}
                            marks={durationOptions.map((option, index) => ({
                                value: index,
                                label: option.label,
                            }))}
                            min={0}
                            max={3}
                            size="small"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                </div>
            </div>

            {/* Right Side: ROI Display */}
            <div className="roi-display-container w-full md:w-1/2 flex flex-col items-center text-center ml-20">
                <div className="item-container">
                    <div className='mb-12'>
                        <p className="text-xl">
                            If you'd invested{' '}
                            <span className="font-bold">
                                ${investment.toLocaleString()} {durationOptions[sliderValue].label}
                            </span>{' '}
                            ago in<br /> Infsail, your money would be worth
                        </p>
                    </div>
                    <p className="item-value text-6xl text-blue-700 font-bold mt-2">${calculateROI()}</p>
                    <div className='mt-10'>
                        <p className="as-of text-lg text-gray-700">As of August 31, 2024</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ROISlider;

