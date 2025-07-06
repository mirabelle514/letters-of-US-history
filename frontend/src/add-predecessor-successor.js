// Complete list of US Presidents in chronological order
const presidentsInOrder = [
  'George Washington',
  'John Adams', 
  'Thomas Jefferson',
  'James Madison',
  'James Monroe',
  'John Quincy Adams',
  'Andrew Jackson',
  'Martin Van Buren',
  'William Henry Harrison',
  'John Tyler',
  'James K. Polk',
  'Zachary Taylor',
  'Millard Fillmore',
  'Franklin Pierce',
  'James Buchanan',
  'Abraham Lincoln',
  'Andrew Johnson',
  'Ulysses S. Grant',
  'Rutherford B. Hayes',
  'James A. Garfield',
  'Chester A. Arthur',
  'Grover Cleveland',
  'Benjamin Harrison',
  'Grover Cleveland', // 2nd term
  'William McKinley',
  'Theodore Roosevelt',
  'William Howard Taft',
  'Woodrow Wilson',
  'Warren G. Harding',
  'Calvin Coolidge',
  'Herbert Hoover',
  'Franklin D. Roosevelt',
  'Harry S. Truman',
  'Dwight D. Eisenhower',
  'John F. Kennedy',
  'Lyndon B. Johnson',
  'Richard Nixon',
  'Gerald Ford',
  'Jimmy Carter',
  'Ronald Reagan',
  'George H. W. Bush',
  'Bill Clinton',
  'George W. Bush',
  'Barack Obama',
  'Donald Trump',
  'Joe Biden'
];

// Function to get predecessor and successor
function getPredecessorAndSuccessor(presidentName) {
  const index = presidentsInOrder.indexOf(presidentName);
  if (index === -1) {
    console.log(`President ${presidentName} not found in list`);
    return { predecessor: null, successor: null };
  }
  
  const predecessor = index > 0 ? presidentsInOrder[index - 1] : null;
  const successor = index < presidentsInOrder.length - 1 ? presidentsInOrder[index + 1] : null;
  
  return { predecessor, successor };
}

// Test the function
console.log('Predecessor and Successor for each president:');
presidentsInOrder.forEach((president, index) => {
  const { predecessor, successor } = getPredecessorAndSuccessor(president);
  console.log(`${index + 1}. ${president}:`);
  console.log(`   Predecessor: ${predecessor || 'None'}`);
  console.log(`   Successor: ${successor || 'None'}`);
  console.log('');
});

module.exports = { presidentsInOrder, getPredecessorAndSuccessor }; 