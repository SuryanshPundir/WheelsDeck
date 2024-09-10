import React from 'react'
import cars from '../cars.json'
import { useState } from 'react';
export default function Player1() {
    const [car, setCar] = useState(null);

    const getRandomCar = () => {
        const randomIndex = Math.floor(Math.random() * cars.length);
        setCar(cars[randomIndex]);
    };

    return (
        <>
            <div className='p-4 text-center flex-1 text-4xl font-bold'>
                <p>Player</p>
                <img
                    className='p-4 pt-6 grayscale opacity-80'
                    src="src/components/car.jpg"
                    alt="Car"
                />
                <div className='text-3xl text-left space-y-6 p-4'>
                    {car ? (
                        <>
                            <p><strong>Make:</strong> {car.make}</p>
                            <p><strong>Model:</strong> {car.model}</p>
                            <p><strong>Year:</strong> {car.year}</p>
                            <p><strong>Power:</strong> {car.powerBhp} bhp</p>
                            <p><strong>Torque:</strong> {car.torqueNm} Nm</p>
                            <p><strong>Top Speed:</strong> {car.topSpeedKmph} km/h</p>
                            <p><strong>Quarter Mile Time:</strong> {car.quarterMileTime}</p>
                            <p><strong>Price:</strong> ${car.priceUsd}</p>
                        </>
                    ) : (
                        <p>Click the button to see a random car.</p>
                    )}
                </div>
                <button
                    onClick={getRandomCar}
                    className='mt-4 p-2 bg-blue-500 text-white rounded'
                >
                    Change Card
                </button>
            </div>
        </>
    );
}

