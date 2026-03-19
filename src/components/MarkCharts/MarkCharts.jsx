import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarkCharts = ({marksPromiss}) => {
    const marksDatares = use(marksPromiss);
    const marksData = marksDatares.data;
    // console.log(marksDatares)

    // Data procecintg for the charts
    const marksChartsData = marksData.map(studentData => {
        const student =  {
            id: studentData.id,
            name: studentData.name,
            math: studentData.marks.math,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry
        }
        const avg = (student.math + student.physics + student.chemistry) / 3;
        student.avg = avg.toFixed();
        return student
    })

    // console.log(marksChartsData)



    return (
        <div>
            <h1 className='text-4xl text-center font-medium mt-15'>Simple Bar Chart Using by <a href="https://recharts.github.io/" target='blank'>recharts</a> and <a href="https://axios-http.com/docs/intro" target='blank'>axious</a></h1>
            <BarChart height={500} width='full' data={marksChartsData} responsive>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='avg' fill='red'></Bar>
                <Bar dataKey='math' fill='blue'></Bar>
                <Bar dataKey='physics' fill='green'></Bar>
                <Bar dataKey='chemistry' fill='pink'></Bar>
                <Legend></Legend>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default MarkCharts;