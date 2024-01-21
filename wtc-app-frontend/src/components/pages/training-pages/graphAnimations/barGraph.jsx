import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './barGraph.css'

const BarGraph = ({ data }) => {
  return (
    <div>
      <div className='text'>
        test
      </div>
    <ResponsiveContainer width={600} height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="problem" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="time" fill={'#82ca9d'} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;

