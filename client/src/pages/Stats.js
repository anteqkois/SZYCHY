import React from 'react';
import Navbar from '../components/Navigation/Navigation';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'codingnight',
    color: 'hsl(185, 70%, 50%)',
    data: [
      {
        x: 'Matematyka',
        y: 0,
      },
      {
        x: 'Język Polski',
        y: 0,
      },
      {
        x: 'Język Angielski',
        y: 1,
      },
      {
        x: 'Programowanie',
        y: 2,
      },
    ],
  },
  {
    id: 'jannowak',
    color: 'hsl(185, 70%, 50%)',
    data: [
      {
        x: 'Matematyka',
        y: 1,
      },
      {
        x: 'Język Polski',
        y: 1,
      },
      {
        x: 'Język Angielski',
        y: 1,
      },
      {
        x: 'Programowanie',
        y: 1,
      },
    ],
  },
  {
    id: 'juliawozniak',
    color: 'hsl(185, 70%, 50%)',
    data: [
      {
        x: 'Matematyka',
        y: 1,
      },
      {
        x: 'Język Polski',
        y: 2,
      },
      {
        x: 'Język Angielski',
        y: 0,
      },
      {
        x: 'Programowanie',
        y: 1,
      },
    ],
  },
  {
    id: 'majazielinska',
    color: 'hsl(185, 70%, 50%)',
    data: [
      {
        x: 'Matematyka',
        y: 0,
      },
      {
        x: 'Język Polski',
        y: 1,
      },
      {
        x: 'Język Angielski',
        y: 1,
      },
      {
        x: 'Programowanie',
        y: 1,
      },
    ],
  },
  {
    id: 'antoniwisniewski',
    color: 'hsl(240, 40%, 50%)',
    data: [
      {
        x: 'Matematyka',
        y: 1,
      },
      {
        x: 'Język Polski',
        y: 1,
      },
      {
        x: 'Język Angielski',
        y: 0,
      },
      {
        x: 'Programowanie',
        y: 0,
      },
    ],
  },
  {
    id: 'krzysztofkowalski',
    color: 'hsl(340, 50%, 70%)',
    data: [
      {
        x: 'Matematyka',
        y: 0,
      },
      {
        x: 'Język Polski',
        y: 1,
      },
      {
        x: 'Język Angielski',
        y: 0,
      },
      {
        x: 'Programowanie',
        y: 1,
      },
    ],
  },
];

const MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 0,
      max: 2,
      stacked: false,
      reverse: false,
    }}
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
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Liczba odpowiedzi',
      legendOffset: -40,
      legendPosition: 'middle',
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
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

function Stats() {
  return (
    <>
      <Navbar />
      <div style={{ marginLeft: '300px' }}>
        <h1 className="text-center p-5">
          Zobacz najczęściej odpowiadających użytkowników
        </h1>
        <div className="p-5 text-dark bg-light" style={{ height: '80vh' }}>
          <MyResponsiveLine data={data} />
        </div>
      </div>
    </>
  );
}

export default Stats;
