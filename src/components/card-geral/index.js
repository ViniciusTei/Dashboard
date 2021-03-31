import React from 'react'
import { Chart } from "react-google-charts";
import { Cardgeral, Titulo } from './styles'


export default function CardGeral({valor, data}) {
    // const val = valor
    return (
        <Cardgeral>
            <Titulo>
                R${valor}
            </Titulo>
            <Chart
                width={'100%'}
                height={'70%'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: `Saldo anual`,
                    hAxis: { title: 'Mes', titleTextStyle: { color: '#000' } },
                    vAxis: { minValue: 0 },
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: '80%', height: '90%' },
                    backgroundColor: 'transparent',
                }}
                rootProps={{ 'data-testid': '1' }}
                />
        </Cardgeral>
    )
}
