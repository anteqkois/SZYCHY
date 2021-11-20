import React from 'react';
import Navbar from '../../containers/navigation/Navigation';
import {ResponsiveLine} from '@nivo/line';

const data = [
  {
    "id": "Antek",
    "color": "hsl(185, 70%, 50%)",
    "data": [
      {
        "x": "Matematyka",
        "y": 100
      },
      {
        "x": "Język Polski",
        "y": 40
      },
      {
        "x": "Język Angielski",
        "y": 90
      },
      {
        "x": "Przedmiot Zawodowy",
        "y": 100
      },
      {
        "x": "Język Nimiecki",
        "y": 95
      }
    ]
  },
  {
    "id": "Michał",
    "color": "hsl(185, 70%, 50%)",
    "data": [
      {
        "x": "Matematyka",
        "y": 85
      },
      {
        "x": "Język Polski",
        "y": 65
      },
      {
        "x": "Język Angielski",
        "y": 70
      },
      {
        "x": "Przedmiot Zawodowy",
        "y": 100
      },
      {
        "x": "Język Nimiecki",
        "y": 0
      }
    ]
  },
  {
    "id": "Wojtek",
    "color": "hsl(185, 70%, 50%)",
    "data": [
      {
        "x": "Matematyka",
        "y": 97
      },
      {
        "x": "Język Polski",
        "y": 80
      },
      {
        "x": "Język Angielski",
        "y": 100
      },
      {
        "x": "Przedmiot Zawodowy",
        "y": 80
      },
      {
        "x": "Język Nimiecki",
        "y": 40
      }
    ]
  },
  {
    "id": "Łukasz",
    "color": "hsl(185, 70%, 50%)",
    "data": [
      {
        "x": "Matematyka",
        "y": 50
      },
      {
        "x": "Język Polski",
        "y": 68
      },
      {
        "x": "Język Angielski",
        "y": 31
      },
      {
        "x": "Przedmiot Zawodowy",
        "y": 90
      },
      {
        "x": "Język Nimiecki",
        "y": 15
      }
    ]
  },
]

const MyResponsiveLine = ({ data}) => (
  <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 0, max: 100, stacked: false, reverse: false }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Przedmiot',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Wynik(%)',
          legendOffset: -40,
          legendPosition: 'middle'
      }}
      colors={{ scheme: 'set1' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderColor={{ from: 'serieColor', modifiers: [] }}
      pointBorderWidth={2}
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
      <div style={{marginLeft:"300px"}}>
        <h1 className="text-center p-5">
          Sprawdź wyniki twoich znajomych
        </h1>
        <div className="p-5 text-dark bg-light" style={{height:"80vh"}}>
          <MyResponsiveLine data={data}/>
        </div>
      </div>
    </>
  );
}

export default Stats;
