import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import styles from './AreaChart.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const options = {
  color: 'white',
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 12,
  plugins: {
    legend: {
      display: false,
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Random numbers',
      data: labels.map(() => Math.random()),
      borderColor: 'rgb(255, 255, 255)',
      backgroundColor: 'rgba(0, 153, 255, 0.5)',
    },
  ],
}

const customCanvasBackgroundColor = {
  id: 'customCanvasBackgroundColor',
  // @ts-ignore
  beforeDatastsDraw(chart, args, plugin) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart
    console.log('BEFORE DATASET DRAW')
    ctx.save()
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(left, top, width, height)
  },
}

const AreaChart = () => {
  return (
    <div className={styles.AreaChart}>
      <Line options={options} data={data} plugins={[customCanvasBackgroundColor]} />
    </div>
  )
}

export default AreaChart
