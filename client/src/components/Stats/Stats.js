import React from 'react'
import styled from 'styled-components'
import Navbar from '../../containers/navigation/Navigation';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    "id": "Łukasz",
    "color": "hsl(291, 70%, 50%)",
    "data": [
      {
        "x": "język polski",
        "y": 31
      },{
        "x": "język angielski",
        "y": 87
      },
      {
        "x": "matematyka",
        "y": 100
      },
      {
        "x": "niemiecki",
        "y": 0
      },
      {
        "x": "przedmiot zawodowy",
        "y": 100
      },
    ]
  }
]

const MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 110 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 45,
          legend: 'Studenci',
          legendOffset: 20,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Wynik(%)',
          legendOffset: -50,
          legendPosition: 'middle'
      }}
      pointSize={5}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={3}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
  />
)

function Stats() {
    return (
      <>
        <Navbar />
        <div className="container-fluid d-flex flex-column justify-content-top" style={{marginLeft:"290px", height:"100vh", width:"86vw"}}>
          <h1 className="text-center pt-5">Wyniki twoich przyjaciół</h1>
          <div className="my-3 mx-5 h-75">
          <MyResponsiveLine data={data}/>
          </div>
        </div>
      </>
    )
}

export default Stats
