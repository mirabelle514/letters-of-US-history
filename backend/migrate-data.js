import mongoose from 'mongoose';
import Chapter from './models/Chapter.js';
import fs from 'fs';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/letters-of-us-history', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const migrateData = async () => {
  try {
    // Read the existing Washington data
    const washingtonData = JSON.parse(fs.readFileSync('./washington_chapters.json', 'utf8'));
    
    // Clear existing chapters
    await Chapter.deleteMany({});
    
    // Convert and save the Washington letter
    const washingtonChapter = new Chapter({
      president: 'George Washington',
      successor: 'John Adams',
      letterTitle: 'Letter to John Adams',
      letterContent: washingtonData[0].content,
      historicalAnalysis: washingtonData[1].content,
      sources: [
        'Miller Center, University of Virginia. "George Washington: Impact and Legacy." Accessed 2025.',
        'Mount Vernon Ladies\' Association. "Ten Facts About Washington\'s Presidency." George Washington\'s Mount Vernon.',
        'National Archives. "Presidency of George Washington." Wikipedia, 2025.',
        'History.com. "George Washington: Facts, Revolution & Presidency." Updated February 2025.'
      ],
      keyThemes: [
        'Establishment of Executive Precedents',
        'Federal Authority and Structure',
        'Foreign Policy and Neutrality',
        'Political Faction Management',
        'Slavery and the Union'
      ],
      historicalContext: 'Washington served as the first President of the United States from 1789-1797, establishing crucial precedents for the executive office during the nation\'s formative years.',
      presidencyYears: '1789-1797'
    });
    
    await washingtonChapter.save();
    console.log('Washington chapter migrated successfully');
    
    // Create placeholder chapters for all other presidents
    const presidents = [
      'John Adams', 'Thomas Jefferson', 'James Madison', 'James Monroe', 'John Quincy Adams',
      'Andrew Jackson', 'Martin Van Buren', 'William Henry Harrison', 'John Tyler', 'James K. Polk',
      'Zachary Taylor', 'Millard Fillmore', 'Franklin Pierce', 'James Buchanan', 'Abraham Lincoln',
      'Andrew Johnson', 'Ulysses S. Grant', 'Rutherford B. Hayes', 'James A. Garfield', 'Chester A. Arthur',
      'Grover Cleveland', 'Benjamin Harrison', 'William McKinley', 'Theodore Roosevelt', 'William H. Taft',
      'Woodrow Wilson', 'Warren G. Harding', 'Calvin Coolidge', 'Herbert Hoover', 'Franklin D. Roosevelt',
      'Harry S. Truman', 'Dwight D. Eisenhower', 'John F. Kennedy', 'Lyndon B. Johnson', 'Richard Nixon',
      'Gerald Ford', 'Jimmy Carter', 'Ronald Reagan', 'George H. W. Bush', 'Bill Clinton',
      'George W. Bush', 'Barack Obama', 'Donald Trump', 'Joe Biden'
    ];
    
    const successors = [
      'Thomas Jefferson', 'James Madison', 'James Monroe', 'John Quincy Adams', 'Andrew Jackson',
      'Martin Van Buren', 'William Henry Harrison', 'John Tyler', 'James K. Polk', 'Zachary Taylor',
      'Millard Fillmore', 'Franklin Pierce', 'James Buchanan', 'Abraham Lincoln', 'Andrew Johnson',
      'Ulysses S. Grant', 'Rutherford B. Hayes', 'James A. Garfield', 'Chester A. Arthur', 'Grover Cleveland',
      'Benjamin Harrison', 'William McKinley', 'Theodore Roosevelt', 'William H. Taft', 'Woodrow Wilson',
      'Warren G. Harding', 'Calvin Coolidge', 'Herbert Hoover', 'Franklin D. Roosevelt', 'Harry S. Truman',
      'Dwight D. Eisenhower', 'John F. Kennedy', 'Lyndon B. Johnson', 'Richard Nixon', 'Gerald Ford',
      'Jimmy Carter', 'Ronald Reagan', 'George H. W. Bush', 'Bill Clinton', 'George W. Bush',
      'Barack Obama', 'Donald Trump', 'Joe Biden', 'TBD'
    ];
    
    const presidencyYears = [
      '1797-1801', '1801-1809', '1809-1817', '1817-1825', '1825-1829',
      '1829-1837', '1837-1841', '1841', '1841-1845', '1845-1849',
      '1849-1850', '1850-1853', '1853-1857', '1857-1861', '1861-1865',
      '1865-1869', '1869-1877', '1877-1881', '1881', '1881-1885',
      '1885-1889', '1889-1893', '1893-1897', '1897-1901', '1901-1909',
      '1909-1913', '1913-1921', '1921-1923', '1923-1929', '1929-1933',
      '1933-1945', '1945-1953', '1953-1961', '1961-1963', '1963-1969',
      '1969-1974', '1974-1977', '1977-1981', '1981-1989', '1989-1993',
      '1993-2001', '2001-2009', '2009-2017', '2017-2021', '2021-Present'
    ];
    
    for (let i = 0; i < presidents.length; i++) {
      if (presidents[i] !== 'George Washington') { // Skip Washington as it's already created
        const placeholderChapter = new Chapter({
          president: presidents[i],
          successor: successors[i],
          letterTitle: `Letter to ${successors[i]}`,
          letterContent: `[Content to be added - Imagined letter from ${presidents[i]} to ${successors[i]}]`,
          historicalAnalysis: `[Content to be added - Historical analysis of ${presidents[i]}'s presidency]`,
          sources: [],
          keyThemes: [],
          historicalContext: `[Content to be added - Historical context for ${presidents[i]}'s presidency]`,
          presidencyYears: presidencyYears[i]
        });
        
        await placeholderChapter.save();
        console.log(`Created placeholder for ${presidents[i]}`);
      }
    }
    
    console.log('Migration completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

migrateData(); 