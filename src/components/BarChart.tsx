import styled from "@emotion/styled";
// import { ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Country } from "../types";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
    countries: Country[]
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const ChartWrapper = styled.div`
    max-width:700px;
    margin: 0 auto;
`

const BarChart: React.FunctionComponent<Props> = ({countries}) => {
    const generateChartData = () => {
        const data: number[] = [];
        const labels: string[] = [];

        countries.forEach(country => {
            data.push(country.NewConfirmed);
            labels.push(country.Country)
        })
        return{

              labels,
            datasets: [
              {
                label: 'New Confirmed',
              data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              },
            ],

        }
          
    }

  return (
  <ChartWrapper>
    <Bar data={generateChartData()} options={options} />;
  </ChartWrapper>
  )
};

export default BarChart;