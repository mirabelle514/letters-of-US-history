import mongoose from 'mongoose';
import Chapter from './models/Chapter.js';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/letters-of-us-history', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Presidential content data structure
const presidentialContent = [
  {
    president: "George Washington",
    successor: "John Adams",
    letterTitle: "Letter to John Adams",
    letterContent: `My Dear Adams,

As I take my final steps within these walls of governance, I find myself compelled to share with you the burdens and blessings of this sacred office. The precedents we have established these eight years past shall echo through eternity, and I pray they serve the Republic well.

Above all else, guard against the spirit of faction that threatens to rend our Union asunder. I have witnessed how Hamilton and Jefferson's philosophical differences breed personal animosity, and I fear this contagion may prove fatal to our experiment. The office of President must rise above party consideration—you serve not Federalists or Republicans, but Americans entire.

In foreign affairs, avoid permanent alliances that may entangle us in European quarrels not our own. Our nation is yet infant; we must husband our strength and avoid premature wars that could destroy what we have built. Trade with all, favor none with exclusive arrangements.

I confess to you my greatest regret: I have not resolved the contradiction between our Declaration's promise that all men are created equal and the bondage in which we hold our fellow beings. This burden passes to future generations, but it weighs upon my soul. The Union we preserve must one day fulfill its founding promise to all.

Lead with dignity, consult widely but decide independently, and remember that in a Republic, power held temporarily must be surrendered willingly. May Providence guide your steps.

Your servant and friend,
G. Washington`,
    historicalAnalysis: `George Washington's presidency fundamentally shaped the American executive office and established precedents that endure today. As the only person who could have held the office in 1789, Washington was the most famous American with enough of a national platform to represent the entire country and overwhelmingly trusted by the populous. His unanimous election by the Electoral College in both 1789 and 1792 reflected this unique position in American politics.

**Domestic Policy and Federal Structure**

Washington's administration focused heavily on establishing the federal government's authority and administrative structure. While the current presidential cabinet includes 16 members, George Washington's cabinet included just 4 original members: Jefferson, Hamilton, Knox, and Randolph. Washington defined how these roles would function, establishing the cabinet as the chief executive's private, trusted advisors and sought to include multiple perspectives in the cabinet, perhaps best exhibited by the political spectrum ranging from Hamilton to Jefferson.

The administration's economic policies, largely crafted by Treasury Secretary Alexander Hamilton, proved foundational but controversial. Congress passes the United States' first naturalization law, establishing terms of citizenship, and President Washington signs the first United States copyright law. Most significantly, the Bank Act of 1791 created the First Bank of the United States and federal assumption of state Revolutionary War debts consolidated national financial authority.

Washington faced his first major domestic crisis with the Whiskey Rebellion (1794), demonstrating federal power while showing restraint. His measured response—raising a militia force but pardoning the rebels—established precedent for handling domestic unrest without excessive force.

**Foreign Policy and Neutrality**

Washington's Proclamation of Neutrality in 1793 during the French Revolutionary Wars was crucial for the young nation. Despite pressure from both pro-French Jeffersonians and pro-British Hamiltonians, Washington maintained American neutrality. The Jay Treaty of 1795 helped the U.S. avoid war with Great Britain, but also rankled certain members of Congress and was fiercely opposed by Thomas Jefferson and James Madison.

**Political Legacy and Precedents**

Washington's decision to step away from power solidified his legacy and had a powerful impact on the future of the presidency. All his successors, until Franklin D. Roosevelt, willingly followed his example of retiring after two terms. His Farewell Address warned against excessive partisanship and permanent foreign alliances, advice that influenced American foreign policy for over a century.

Washington struggled throughout his eight-year presidency to hold rival factions together. He was, and remains, the only U.S. president never to be formally affiliated with a political party. However, debates over Hamilton's economic policy, the French Revolution, and the Jay Treaty deepened ideological divisions, with supporters of Hamilton forming the Federalist Party while opponents coalesced around Jefferson to form the Democratic-Republican Party.

**Historical Assessment**

George Washington's presidency has generally been viewed as one of the most successful, and he is often considered to be one of the three greatest American presidents ever. Modern historians consistently rank him among the top three presidents alongside Lincoln and Franklin Roosevelt. Washington recognized the structural importance of leaving office willingly, understanding that Americans needed to learn how to elect, transition, and inaugurate a new president.`,
    sources: [
      "Miller Center, University of Virginia. \"George Washington: Impact and Legacy.\" Accessed 2025.",
      "Mount Vernon Ladies' Association. \"Ten Facts About Washington's Presidency.\" George Washington's Mount Vernon.",
      "National Archives. \"Presidency of George Washington.\" Wikipedia, 2025.",
      "History.com. \"George Washington: Facts, Revolution & Presidency.\" Updated February 2025."
    ],
    keyThemes: [
      "Establishment of Executive Precedents",
      "Federal Authority and Structure", 
      "Foreign Policy and Neutrality",
      "Political Faction Management",
      "Slavery and the Union"
    ],
    historicalContext: "Washington served as the first President of the United States from 1789-1797, establishing crucial precedents for the executive office during the nation's formative years.",
    presidencyYears: "1789-1797"
  },
  {
    president: "John Adams",
    successor: "Thomas Jefferson",
    letterTitle: "Letter to Thomas Jefferson",
    letterContent: `My Dear Jefferson,

Strange that I should address you thus, considering the bitter campaign just concluded and the philosophical chasm that divides us. Yet I write not to the partisan but to the patriot, for the office demands such elevation of spirit.

I leave you a nation at peace, though it cost me dearly. My decision to seek accommodation with France rather than embrace the war fever that gripped our people may have sealed my political fate, but I believe it preserved our Republic. A nation so young cannot afford foreign wars for the satisfaction of party spirits. You will find that the burdens of office often require choices that disappoint one's supporters.

I confess with sorrow my assent to the Alien and Sedition Acts. In the hysteria of possible war, I believed them necessary for national security, yet I now see how they wounded the very liberties we claim to champion. Power exercised in fear often exceeds its proper bounds. Guard well against similar temptations, for they shall surely come.

You inherit also the burden of section. The question of slavery, which we so carefully avoided in our founding documents, grows more pressing with each passing year. I have never owned a slave and pray our nation may soon fulfill its founding promise that all men are created equal. This contradiction will not long endure without resolution.

Though we have disagreed with vehemence, I respect your devotion to liberty and your faith in the people's judgment. Perhaps your confidence in democracy will serve the Republic better than my fears of faction and disorder. May you govern with the wisdom I too often lacked.

Your predecessor and fellow revolutionary,
John Adams`,
    historicalAnalysis: `John Adams's presidency was marked by foreign crisis, domestic upheaval, and the emergence of partisan politics that would define the early Republic. Historians have difficulty assessing John Adams's presidency, as his aloofness and refusal to enter directly into political conflict probably undermined his effectiveness and cost him his reelection in 1800.

**The Quasi-War Crisis**

From the moment John Adams entered the presidency in 1797, the United States was in a state of undeclared war with France. The Quasi-War, as it was known, dominated his presidency, monopolizing both foreign policy and domestic policy. The crisis began when France, angered by the Jay Treaty with Britain, began attacking American merchant vessels.

In 1798, the French foreign minister, Talleyrand, refused to meet with American envoys and audaciously demanded bribes for himself and the French government before diplomatic relations could resume. This XYZ Affair inflamed American public opinion and created pressure for war. However, Adams resisted these pressures, understanding that war could be catastrophic for the young nation.

**The Alien and Sedition Acts**

The war hysteria led to one of the most controversial aspects of Adams's presidency. In response to the unrest, both foreign and domestic, the 5th Congress passed four bills, collectively known as the Alien and Sedition Acts, which made it more difficult for immigrants to become U.S. citizens, allowed the president to imprison and deport non-citizens who were deemed dangerous, and criminalized making false statements that were critical of the federal government.

The Federalist administration initiated fourteen or more indictments under the Sedition Act, as well as suits against five of the six most prominent Democratic-Republican newspapers. These acts became deeply unpopular and contributed significantly to Adams's electoral defeat in 1800.

**Administrative Challenges**

Adams inherited much of Washington's cabinet, but the former vice president lacked the stature of his predecessor, and the cabinet's loyalties lay elsewhere—primarily with former Treasury Secretary Alexander Hamilton, who was still the leader of the Federalist Party. This created a fundamental problem of loyalty that undermined Adams's authority throughout his presidency.

Adams valued no one's opinion half as much as his own—except for that of his wife, Abigail. As an active party politician who nevertheless distrusted factionalism and many Federalist leaders, such as Alexander Hamilton, Adams seems to have been hopelessly out of place in the partisan-style Republic that he had helped bring to life.

**Diplomatic Success and Political Failure**

Despite domestic opposition, Adams achieved his primary foreign policy objective. The Treaty of Mortefontaine, signed in 1800, came too late to help Adams win reelection, but ended the Quasi-War with France and secured a peaceful trade relationship between the two countries. In a case of stunningly bad timing, the election of 1800 came before news of Adams's successful diplomacy reached America.

**Electoral Defeat and Legacy**

Popular historian David McCullough has described the 1800 campaign, which resulted in Thomas Jefferson's ascendancy to the presidency, as "a contest of personal vilification surpassing any presidential election in American history." Opposition to the Quasi-War and the Alien and the Sedition Acts, as well as the intra-party rivalry between Adams and Alexander Hamilton, all contributed to Adams's loss to Jefferson in the 1800 election.

**Historical Assessment**

Most historians agree that Adams was correct in not expanding the naval war with France into an all-out conflict. Another protracted war, especially one so soon after the War of Independence with the populace deeply divided along partisan lines, might have been fatal for the nascent American union. Recent scholarship has increasingly emphasized Adams's principled stance in avoiding war despite enormous political pressure.

Polls of historians and political scientists have generally ranked Adams as an average or above-average president, and one of the best who served a single term. In a 2017 C-SPAN survey, 91 presidential historians ranked Adams 19th among the 43 former presidents. His legacy represents both the challenges of early partisan politics and the importance of principled leadership during national crises.`,
    sources: [
      "Miller Center, University of Virginia. \"John Adams: Impact and Legacy.\" Accessed 2025.",
      "PBS American Experience. \"The Presidency of John Adams.\" November 2017.",
      "White House Historical Association. \"John Adams Biography.\"",
      "Wikipedia. \"Presidency of John Adams.\" Updated April 2025.",
      "TeachingHistory.org. \"John Adams: Great or Not?\" George Mason University."
    ],
    keyThemes: [
      "Quasi-War with France",
      "Alien and Sedition Acts",
      "Partisan Politics",
      "Diplomatic Crisis Management",
      "Executive Authority Challenges"
    ],
    historicalContext: "John Adams served as the second President of the United States from 1797-1801, facing foreign crisis and domestic upheaval during the emergence of partisan politics in the early Republic.",
    presidencyYears: "1797-1801"
  }
];

const importContent = async () => {
  try {
    console.log('Starting presidential content import...');
    
    for (const content of presidentialContent) {
      // Check if chapter already exists
      const existingChapter = await Chapter.findOne({ president: content.president });
      
      if (existingChapter) {
        // Update existing chapter
        const updatedChapter = await Chapter.findByIdAndUpdate(
          existingChapter._id,
          content,
          { new: true }
        );
        console.log(`✅ Updated: ${content.president}`);
      } else {
        // Create new chapter
        const newChapter = new Chapter(content);
        await newChapter.save();
        console.log(`✅ Created: ${content.president}`);
      }
    }
    
    console.log('\n🎉 Presidential content import completed successfully!');
    console.log(`📊 Processed ${presidentialContent.length} presidents`);
    
    // Display summary
    const totalChapters = await Chapter.countDocuments();
    console.log(`📚 Total chapters in database: ${totalChapters}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
};

importContent(); 