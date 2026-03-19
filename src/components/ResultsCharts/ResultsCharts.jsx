import React from 'react';
import { Legend, Line, LineChart, XAxis, YAxis } from 'recharts';


const resultsData = [
  { id: 1, name: "Rahim", physics: 78, chemistry: 61, math: 90 },
  { id: 2, name: "Karim", physics: 65, chemistry: 50, math: 68 },
  { id: 3, name: "Sakib", physics: 88, chemistry: 65, math: 85 },
  { id: 4, name: "Nadim", physics: 72, chemistry: 55, math: 80 },
  { id: 5, name: "Jahid", physics: 60, chemistry: 66, math: 70 },
  { id: 6, name: "Tanvir", physics: 95, chemistry: 79, math: 93 },
  { id: 7, name: "Rasel", physics: 55, chemistry: 60, math: 58 },
  { id: 8, name: "Imran", physics: 84, chemistry: 55, math: 88 },
  { id: 9, name: "Fahim", physics: 68, chemistry: 72, math: 74 },
  { id: 10, name: "Shuvo", physics: 90, chemistry: 66, math: 92 }
];

const ResultsCharts = () => {
    return (
        <div className='text-center'>
            <h2 className='text-4xl font-medium my-10'><u>Students Reasults by Subject</u></h2>
            <p>Using by recharts <a href="https://recharts.github.io/" className='text-green-500' target='blank'><u>click</u></a></p>
            
            <div className='flex justify-center mr-5 md:mr-0'>
                <LineChart width={800} height={500} data={resultsData} responsive>
                <Line dataKey={'math'} stroke='blue'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Legend></Legend>
            </LineChart>
            </div>
        </div>
    );
};

export default ResultsCharts;