// src/components/MiniChart.jsx

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const MiniChart = ({ data }) => {
  const chartData = {
    labels: data.map((_, idx) => idx),
    datasets: [
      {
        data,
        borderColor: '#3b82f6',
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="h-10 w-24">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default MiniChart;
