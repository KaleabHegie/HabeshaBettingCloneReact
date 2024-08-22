import React from "react";
import { Card , Dropdown , Accordion } from "flowbite-react";
import { HiSupport } from "react-icons/hi";


const sportsData = [
  { name: 'Football', count: 1460 },
  { name: 'Basketball', count: 36 },
  { name: 'Tennis', count: 30 },
  { name: 'Table Tennis', count: 218 },
  { name: 'Volleyball', count: 35 },
  { name: 'Ice Hockey', count: 21 },
  { name: 'Cricket', count: 8 },
  { name: 'Combat Sport', count: 53 },
  { name: 'Handball', count: 11 },
  { name: 'Baseball', count: 17 },
  { name: 'Rugby Union', count: 12 },
  { name: 'Rugby League', count: 20 },
  { name: 'American Football', count: 40 }
];

const listItemStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

const acc = sportsData.map((sport, index) => (
    <Accordion.Panel className="text-white" key={index} style={{ padding: '0', margin: '0' }}>
      <Accordion.Title>{sport.name}</Accordion.Title>
      <Accordion.Content>
        <p>Number: {sport.count}</p>
      </Accordion.Content>
    </Accordion.Panel>
))

  
  
const TopLeague = () => {
    
  return (
    <>
    <div  href="#" className="max-w-sm bg-neutral-700 text-white ml-2">
          <p className="bg-neutral-800 text-center p-2" style={{ width: '100%', margin: 0 }}>Top Leagues</p>
      <ul style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} Europe - UEFA Champions League</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} Europe - UEFA Europa League</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} Europe - UEFA Conference League</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} England - Premier League</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} Spain - La Liga</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} Italy - Serie A</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} Germany - Bundesliga</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} France - Ligue 1</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} USA - Major League Soccer</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} USA - NHL</li>
      <hr/> <li className="ml-4  p-2" style={listItemStyle}>{HiSupport} USA - MLB</li>
      </ul>
    </div>
     <div className="justify-center mt-3 mb-3 align-middle ml-8">
     <Dropdown  label="Filter by time" dismissOnClick={false} className="bg-yellow-300 p-4" style={{backgroundColor : 'yellow' , color : 'gray' , paddingLeft : '20px' , paddingRight : '20px'}}>
      <Dropdown.Item>1 Hour</Dropdown.Item>
      <Dropdown.Item>3 Hours</Dropdown.Item>
      <Dropdown.Item>6 Hours</Dropdown.Item>
      <Dropdown.Item>12 Hours</Dropdown.Item>
      <Dropdown.Item>1 Day</Dropdown.Item>
      <Dropdown.Item>12 Days</Dropdown.Item>
    </Dropdown>
     </div>
     <div  href="#" className="max-w-sm bg-neutral-700 text-white ml-2" style={{ maxHeight: '153px', overflowY: 'auto' }}>
          <p className="bg-neutral-800 text-center p-2" style={{ width: '100%', margin: 0 }}>Sports</p>
          <Accordion collapseAll>
              {acc}
           </Accordion>
    </div>
    </>
  );
};

export default TopLeague;
