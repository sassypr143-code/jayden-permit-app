import { useState, useEffect } from "react";

const LESSONS = [
  {
    id: 1,
    day: "Day 1",
    title: "Florida License Requirements",
    icon: "🪪",
    content: [
      {
        heading: "Who Needs a License?",
        text: "In Florida, you must have a valid driver's license or learner's permit to operate any motor vehicle on public roads. Anyone under 18 must go through the Graduated Driver Licensing (GDL) program."
      },
      {
        heading: "Learner's Permit (Age 15+)",
        text: "You can get a learner's permit at age 15. You must pass a vision test and a written knowledge exam (50 questions, must get 40 correct — 80%). You must hold your permit for at least 12 months before getting a license if you are under 18."
      },
      {
        heading: "Supervised Driving Requirement",
        text: "You must complete 50 hours of supervised driving (10 of which must be at night) with a licensed driver age 21 or older before you can get your Class E license."
      },
      {
        heading: "The Knowledge Test",
        text: "The Florida permit test has 50 questions drawn from the official Florida Driver Handbook. You need at least 40 correct (80%) to pass. It covers traffic laws, road signs, and safe driving practices."
      },
      {
        heading: "Key Documents Required",
        text: "To apply, bring: proof of identity (birth certificate or passport), proof of Social Security number, and proof of Florida residential address (two documents required)."
      }
    ],
    quiz: [
      { q: "At what age can you get a Florida learner's permit?", options: ["14", "15", "16", "17"], answer: 1 },
      { q: "How many questions are on the Florida permit knowledge test?", options: ["40", "45", "50", "60"], answer: 2 },
      { q: "What is the minimum passing score on the permit test?", options: ["70%", "75%", "80%", "85%"], answer: 2 },
      { q: "How many total supervised driving hours are required before getting a Class E license?", options: ["25 hours", "40 hours", "50 hours", "60 hours"], answer: 2 },
      { q: "How many of the required supervised hours must be at night?", options: ["5", "10", "15", "20"], answer: 1 }
    ]
  },
  {
    id: 2,
    day: "Day 2",
    title: "Traffic Signs & Signals",
    icon: "🚦",
    content: [
      {
        heading: "Sign Shapes & What They Mean",
        text: "Octagon (8-sided) = STOP. Triangle pointing down = YIELD. Diamond = Warning. Rectangle = Regulatory or informational. Pentagon = School zone. Pennant (5-sided pointing right) = No Passing Zone."
      },
      {
        heading: "Sign Colors",
        text: "Red = Stop, yield, or prohibited. Yellow = Warning. Orange = Construction/work zone. Green = Direction/distance. Blue = Services (gas, food, hospital). Brown = Recreation/cultural sites. White = Regulatory (speed limits, rules)."
      },
      {
        heading: "Traffic Signals",
        text: "Green = Go (but yield to pedestrians and cross-traffic). Yellow = Prepare to stop — do NOT speed up to beat it. Red = Full stop. A flashing red light = treat as a STOP sign. A flashing yellow = slow down, proceed with caution."
      },
      {
        heading: "Arrows at Intersections",
        text: "A green arrow means you may turn in that direction — oncoming traffic is stopped. A yellow arrow means the protected turn is ending — prepare to stop or yield. A red arrow means NO turn in that direction."
      },
      {
        heading: "Pedestrian & Special Signals",
        text: "Walk/Don't Walk signals: obey them. A flashing 'Don't Walk' with a countdown means finish crossing if already in the street, but don't start crossing. School zone signs with flashing yellow lights = 20 mph speed limit."
      }
    ],
    quiz: [
      { q: "What shape is a STOP sign?", options: ["Diamond", "Triangle", "Octagon", "Rectangle"], answer: 2 },
      { q: "A flashing red traffic light means:", options: ["Slow down and proceed", "Treat it as a STOP sign", "Yield to oncoming traffic", "The light is broken — go fast"], answer: 1 },
      { q: "What does an orange traffic sign indicate?", options: ["Yield ahead", "School zone", "Construction or work zone", "Recreational area"], answer: 2 },
      { q: "A green arrow at a traffic signal means:", options: ["You may turn; yield to all traffic", "You may turn; oncoming traffic is stopped", "You must turn in that direction", "Proceed straight only"], answer: 1 },
      { q: "What shape is a warning sign?", options: ["Rectangle", "Pentagon", "Circle", "Diamond"], answer: 3 }
    ]
  },
  {
    id: 3,
    day: "Day 3",
    title: "Speed Limits & Right-of-Way",
    icon: "⚡",
    content: [
      {
        heading: "Default Speed Limits in Florida",
        text: "Unless otherwise posted: 30 mph in business/residential areas, 20 mph in school zones (when flashing), 55 mph on rural roads, 70 mph on some divided highways/interstates. Always obey posted signs — they override defaults."
      },
      {
        heading: "Right-of-Way at Intersections",
        text: "At a 4-way stop, the first vehicle to arrive goes first. If two vehicles arrive at the same time, yield to the vehicle on your RIGHT. At a T-intersection, vehicles on the through road have right-of-way over vehicles turning onto it."
      },
      {
        heading: "Yielding to Pedestrians",
        text: "You must always yield to pedestrians in a crosswalk — marked or unmarked. A pedestrian entering a crosswalk has the right-of-way. However, pedestrians must not suddenly step into traffic when a vehicle cannot safely stop."
      },
      {
        heading: "Yielding When Turning",
        text: "When turning left, you must yield to all oncoming traffic and pedestrians. When turning right on red (permitted in Florida unless a sign prohibits it), come to a full stop first, then yield before turning."
      },
      {
        heading: "Emergency Vehicles & School Buses",
        text: "You must pull to the right and stop for emergency vehicles (police, fire, ambulance) with lights/sirens. For school buses with flashing red lights and extended stop sign: stop at least 20 feet away on all roads — BOTH directions — unless separated by a median."
      }
    ],
    quiz: [
      { q: "What is the default speed limit in a Florida business or residential area?", options: ["20 mph", "25 mph", "30 mph", "35 mph"], answer: 2 },
      { q: "At a 4-way stop where two cars arrive at the same time, who goes first?", options: ["The car going straight", "The car on the left", "The car on the right", "The larger vehicle"], answer: 2 },
      { q: "You must stop for a school bus with flashing red lights:", options: ["Only if you are behind it", "On all roads in both directions, unless divided by a median", "Only in school zones", "Only if children are visible"], answer: 1 },
      { q: "When turning right at a red light in Florida:", options: ["You may turn without stopping", "Stop fully, then yield before turning", "You must wait for a green light", "Only allowed with a green arrow"], answer: 1 },
      { q: "How far must you stop from a school bus with red lights flashing?", options: ["10 feet", "15 feet", "20 feet", "25 feet"], answer: 2 }
    ]
  },
  {
    id: 4,
    day: "Day 4",
    title: "Lanes, Passing & Intersections",
    icon: "🛣️",
    content: [
      {
        heading: "Lane Markings",
        text: "White lines separate traffic moving in the SAME direction. Yellow lines separate traffic moving in OPPOSITE directions. Broken lines = may cross to pass or change lanes. Solid lines = do not cross. Double solid yellow = NO passing in either direction."
      },
      {
        heading: "Passing Rules",
        text: "Pass only on the left side unless traffic is moving in marked lanes. You may NOT pass: within 100 feet of a railroad crossing, bridge, or tunnel; on a curve or hill where you can't see clearly; when a solid yellow line is on your side; or in a no-passing zone."
      },
      {
        heading: "Changing Lanes Safely",
        text: "Signal before changing lanes. Check mirrors AND your blind spots (look over your shoulder). Make sure you have enough space. Do not change lanes in an intersection. Maintain a safe following distance — the 3-second rule."
      },
      {
        heading: "The 3-Second Following Rule",
        text: "Pick a fixed point ahead. When the car in front passes it, count 'one-thousand-one, one-thousand-two, one-thousand-three.' If you reach the point before finishing, you're too close. In bad weather or night, double it to 6 seconds."
      },
      {
        heading: "Turning Lanes & HOV Lanes",
        text: "Turn from the correct lane — right turns from the right lane, left turns from the left lane. HOV (High Occupancy Vehicle) lanes require 2+ occupants unless posted otherwise. You may only enter/exit HOV lanes at designated points marked by broken white lines."
      }
    ],
    quiz: [
      { q: "A double solid yellow center line means:", options: ["Passing allowed in both directions", "No passing in either direction", "Passing allowed only during daylight", "Yield to oncoming traffic"], answer: 1 },
      { q: "Using the 3-second rule, if weather is bad you should:", options: ["Still use 3 seconds", "Use 6 seconds", "Use 1 second", "Use 10 seconds"], answer: 1 },
      { q: "You may NOT pass another vehicle:", options: ["On a multi-lane highway", "When the line on your side is broken", "Within 100 feet of a railroad crossing", "When the road is straight and clear"], answer: 2 },
      { q: "White lane lines on a road indicate:", options: ["Traffic moving in opposite directions", "Traffic moving in the same direction", "No-passing zones", "Construction boundaries"], answer: 1 },
      { q: "Before changing lanes, you should:", options: ["Signal, check mirrors, check blind spot", "Just check your mirror", "Only signal if another car is nearby", "Speed up to create a gap"], answer: 0 }
    ]
  },
  {
    id: 5,
    day: "Day 5",
    title: "Alcohol, Drugs & DUI Laws",
    icon: "🚫",
    content: [
      {
        heading: "Blood Alcohol Content (BAC) Limits",
        text: "For drivers age 21 and older: BAC of 0.08% or higher = DUI. For drivers under 21: BAC of 0.02% or higher = DUI (zero tolerance). For commercial drivers: 0.04% or higher."
      },
      {
        heading: "Implied Consent Law",
        text: "By driving in Florida, you automatically consent to chemical testing (breath, blood, or urine) if law enforcement suspects impairment. Refusing to take the test results in automatic license suspension: 1 year for first refusal, 18 months for subsequent refusals — plus a misdemeanor charge."
      },
      {
        heading: "Penalties for DUI",
        text: "First DUI: $500–$1,000 fine, up to 6 months in jail, license revocation for at least 180 days, 50 hours community service, possible vehicle impoundment. Penalties increase significantly for repeat offenses, high BAC, or if a minor is in the vehicle."
      },
      {
        heading: "Drugs and Driving",
        text: "Driving under the influence of any impairing substance — including legal prescription drugs and marijuana — is illegal. Even over-the-counter medications can impair driving. If a label says 'may cause drowsiness,' do not drive after taking it."
      },
      {
        heading: "Zero Tolerance & Teen Penalties",
        text: "For drivers under 21 with any BAC between 0.02% and 0.08%: 6-month license suspension. If BAC is 0.05%+, the driver must also complete a substance abuse course before license reinstatement. There is NO safe amount of alcohol for teen drivers."
      }
    ],
    quiz: [
      { q: "What is the legal BAC limit for drivers 21 and older in Florida?", options: ["0.04%", "0.06%", "0.08%", "0.10%"], answer: 2 },
      { q: "Under Florida's zero-tolerance law, a driver under 21 can get a DUI with a BAC of:", options: ["0.08% or higher", "0.04% or higher", "0.02% or higher", "Any BAC above 0.00%"], answer: 2 },
      { q: "What happens if you refuse a chemical test under the Implied Consent Law?", options: ["Nothing — it's your right", "License suspended for 1 year (first refusal)", "A $500 fine only", "You must take a drug course"], answer: 1 },
      { q: "Which of the following can result in a DUI charge?", options: ["Only illegal drugs", "Alcohol only", "Prescription drugs, alcohol, or marijuana", "Only if your BAC is 0.10% or higher"], answer: 2 },
      { q: "A first-time DUI conviction in Florida can result in:", options: ["Only a warning", "License suspension of at least 180 days", "A maximum $200 fine", "No jail time, ever"], answer: 1 }
    ]
  },
  {
    id: 6,
    day: "Day 6",
    title: "Sharing the Road",
    icon: "🚲",
    content: [
      {
        heading: "Bicyclists",
        text: "Bicyclists have the same rights and responsibilities as drivers. Pass a cyclist with at least 3 feet of clearance. When turning right, watch for cyclists in bike lanes — they have the right-of-way. Cyclists may ride in the lane if the lane is too narrow to share safely."
      },
      {
        heading: "Motorcycles",
        text: "A motorcycle occupies a full lane — do not share a lane with a motorcyclist. Allow the same following distance you would for a car. Motorcycles are harder to see; always check blind spots. Motorcyclists may legally ride side-by-side (2 abreast) in a single lane."
      },
      {
        heading: "Large Trucks & Blind Spots",
        text: "Trucks have large blind spots: directly behind, directly in front, and along both sides (especially the right side). If you can't see the truck driver in their mirror, they cannot see you. Do not cut in front of a truck — trucks need up to 2x the stopping distance of a car."
      },
      {
        heading: "Pedestrians & Crosswalks",
        text: "Always yield to pedestrians in crosswalks — marked and unmarked. Obey pedestrian crossing signals. Never block a crosswalk when stopped at a red light. In Florida, it is illegal to pass a vehicle stopped for a pedestrian in a crosswalk."
      },
      {
        heading: "Move Over Law",
        text: "Florida's Move Over Law requires you to move over a lane (when safe) or slow down significantly when passing: law enforcement, emergency vehicles, tow trucks, and utility service vehicles stopped on the roadside with lights flashing. Failure to comply is a moving violation."
      }
    ],
    quiz: [
      { q: "How much clearance must you give a bicyclist when passing?", options: ["1 foot", "2 feet", "3 feet", "5 feet"], answer: 2 },
      { q: "What does Florida's Move Over Law require?", options: ["Stop completely for all emergency vehicles", "Move over a lane or slow down for stopped roadside vehicles with lights", "Only applies to police cars", "Honk and slow down"], answer: 1 },
      { q: "How many motorcycles may legally ride side-by-side in one lane?", options: ["1 only", "2", "3", "As many as fit"], answer: 1 },
      { q: "If you can't see a truck driver in their mirror:", options: ["They can still see you", "They cannot see you", "You are in a safe zone", "You should speed up to pass"], answer: 1 },
      { q: "It is illegal in Florida to pass a vehicle that has stopped:", options: ["At a yellow light", "For a pedestrian in a crosswalk", "On a two-lane road", "More than 5 mph under the limit"], answer: 1 }
    ]
  },
  {
    id: 7,
    day: "Day 7",
    title: "Distracted & Drowsy Driving",
    icon: "📵",
    content: [
      {
        heading: "Florida's Texting & Handheld Device Law",
        text: "In Florida, texting while driving is a primary offense — police CAN pull you over just for it. Using a handheld device in a school zone or active work zone is also a primary offense. Fines: $30 for first offense, $60 for second. Points are added to your license for school/work zone violations."
      },
      {
        heading: "What Counts as Distracted Driving?",
        text: "Distracted driving includes: texting or using a phone, eating or drinking, adjusting GPS or radio, talking to passengers, grooming, or any activity that takes your eyes, hands, or mind off driving. Even glancing away for 5 seconds at 55 mph = traveling the length of a football field."
      },
      {
        heading: "Drowsy Driving",
        text: "Drowsy driving is as dangerous as drunk driving. Being awake for 18 hours impairs you similarly to a BAC of 0.05%. Signs: frequent yawning, difficulty keeping eyes open, drifting between lanes, missing exits. Solution: pull over and rest. Caffeine is only a short-term fix."
      },
      {
        heading: "Safe Phone Use",
        text: "In Florida, you may use your phone hands-free (Bluetooth, speakerphone mounted on dashboard). You may NOT hold the phone. If you need to make a call or check GPS, pull over safely first. No exemption exists for being stopped at a red light."
      },
      {
        heading: "Aggressive Driving",
        text: "Aggressive driving in Florida includes: speeding, running red lights, following too closely, improper passing, or cutting off other drivers. If another driver behaves aggressively: don't engage, don't make eye contact, don't retaliate. Contact law enforcement if needed."
      }
    ],
    quiz: [
      { q: "In Florida, texting while driving is:", options: ["Only a secondary offense", "A primary offense — police can pull you over just for it", "Legal if stopped at a red light", "Only illegal for drivers under 18"], answer: 1 },
      { q: "At 55 mph, looking away from the road for 5 seconds is like driving:", options: ["Half a block blindfolded", "The length of a football field blindfolded", "10 feet with eyes closed", "Through one full intersection"], answer: 1 },
      { q: "Being awake for 18 hours impairs driving similarly to a BAC of:", options: ["0.02%", "0.04%", "0.05%", "0.08%"], answer: 2 },
      { q: "Which phone use is legal while driving in Florida?", options: ["Holding your phone to your ear", "Texting at a red light", "Hands-free Bluetooth calling", "Reading a text while driving slowly"], answer: 2 },
      { q: "If an aggressive driver confronts you, you should:", options: ["Speed up to get away fast", "Engage and assert your rights", "Not make eye contact and avoid escalating", "Pull alongside and gesture at them"], answer: 2 }
    ]
  },
  {
    id: 8,
    day: "Day 8",
    title: "Parking, Turning & Special Situations",
    icon: "🅿️",
    content: [
      {
        heading: "Parallel Parking",
        text: "When parallel parking: signal, pull alongside the car in front of the empty space, back slowly while turning the wheel. Your car should end up within 12 inches of the curb. On a hill with a curb: turn wheels INTO the curb (downhill) or AWAY from the curb (uphill). No curb: turn wheels to the right always."
      },
      {
        heading: "Prohibited Parking",
        text: "You may NOT park: within 15 feet of a fire hydrant, within 20 feet of a crosswalk at an intersection, within 30 feet of a stop sign or traffic signal, in front of a driveway, in a handicapped space without a permit, in a no-parking zone, or blocking a sidewalk or bike lane."
      },
      {
        heading: "U-Turns",
        text: "U-turns are legal in Florida unless a sign prohibits them. You may NOT make a U-turn: where your view is blocked, in a business district unless at an intersection, on curves or hills, near a fire station driveway, or if it would endanger other traffic."
      },
      {
        heading: "Roundabouts",
        text: "At a roundabout: yield to traffic already inside the circle. Enter when there's a safe gap. Travel counterclockwise. Do not stop inside the roundabout. Exit at your desired road. If you miss your exit, continue around."
      },
      {
        heading: "Railroad Crossings",
        text: "At railroad crossings: slow down, look both ways, listen. If lights are flashing or gates are down — STOP. Never drive around a lowered gate. Do not stop on the tracks. After a train passes, wait — another train may be coming from the other direction. Do not race a train."
      }
    ],
    quiz: [
      { q: "How far from the curb should your car be after parallel parking?", options: ["6 inches", "12 inches", "18 inches", "24 inches"], answer: 1 },
      { q: "When parking uphill with a curb, your wheels should face:", options: ["Into the curb (right)", "Away from the curb (left)", "Straight ahead", "Doesn't matter"], answer: 1 },
      { q: "You must NOT park within how many feet of a fire hydrant?", options: ["10 feet", "15 feet", "20 feet", "25 feet"], answer: 1 },
      { q: "At a roundabout, you must yield to:", options: ["All entering traffic", "Traffic already inside the circle", "No one — just enter", "Emergency vehicles only"], answer: 1 },
      { q: "After a train passes a railroad crossing, you should:", options: ["Proceed immediately", "Wait — another train may be coming", "Honk before proceeding", "Back up and find another route"], answer: 1 }
    ]
  },
  {
    id: 9,
    day: "Day 9",
    title: "Vehicle Safety & Emergencies",
    icon: "🚨",
    content: [
      {
        heading: "Seat Belts",
        text: "Florida law requires all front-seat occupants to wear seat belts. For rear-seat passengers: everyone under 18 must be buckled. Children under age 5 must be in a federally approved child restraint device. Seat belt violations are primary offenses."
      },
      {
        heading: "Headlights",
        text: "You must turn on headlights: from sunset to sunrise, when visibility is less than 1,000 feet (in rain, fog, or smoke), and whenever you use windshield wipers due to rain. In Florida, if it's raining hard enough to use wipers, lights are required by law."
      },
      {
        heading: "Brake Failure",
        text: "If your brakes fail: pump the brake pedal rapidly to build pressure. Downshift to a lower gear. Use the emergency/parking brake gradually (not suddenly). Steer toward a safe area to slow down. Turn on hazard lights. Sound your horn to warn others."
      },
      {
        heading: "Tire Blowout",
        text: "If a tire blows: do NOT brake suddenly. Grip the steering wheel firmly. Gradually ease off the gas. Steer in the direction you want to go. Allow the car to slow naturally, then gently brake and pull safely off the road."
      },
      {
        heading: "Skidding & Hydroplaning",
        text: "If your car skids: ease off the gas. Steer in the direction the rear of the car is sliding (into the skid). Do NOT brake suddenly. Hydroplaning (tires riding on water film) happens in rain. If it occurs: ease off gas, do not brake hard, hold steering wheel straight until traction returns."
      }
    ],
    quiz: [
      { q: "In Florida, rear-seat passengers must wear seat belts if they are:", options: ["Only if the driver says so", "Under 18 years old", "Under 21 years old", "Only in the back middle seat"], answer: 1 },
      { q: "You must turn on headlights when visibility is less than:", options: ["500 feet", "750 feet", "1,000 feet", "1,500 feet"], answer: 2 },
      { q: "If your brakes fail, you should first:", options: ["Swerve off the road immediately", "Pump the brake pedal rapidly", "Turn off the engine", "Pull the steering wheel hard left"], answer: 1 },
      { q: "During a tire blowout, you should:", options: ["Brake hard immediately", "Accelerate to maintain control", "Grip wheel firmly and ease off the gas", "Turn sharply to the right"], answer: 2 },
      { q: "Florida law requires headlights when using windshield wipers due to:", options: ["Only heavy rain", "Any rain requiring wiper use", "Only at night in rain", "Only on highways in rain"], answer: 1 }
    ]
  },
  {
    id: 10,
    day: "Day 10",
    title: "Final Review & Test Prep",
    icon: "🎓",
    content: [
      {
        heading: "Top 10 Things to Remember",
        text: "1. Permit at 15, 50 supervised hours required (10 at night). 2. Test: 50 questions, need 40 correct (80%). 3. BAC under 21: 0.02% = DUI. 4. Stop for school buses — both directions unless divided by median. 5. 3-second following rule (double in bad weather). 6. Texting while driving is a primary offense. 7. Headlights required when wipers are on. 8. Move over or slow for roadside emergency vehicles. 9. At 4-way stops, first to arrive goes first; ties go to driver on right. 10. At a roundabout, yield to traffic already inside."
      },
      {
        heading: "Most Common Test Mistakes",
        text: "Watch out for: school bus stopping distances (20 feet minimum, both directions), parking distances from hydrants (15 ft) vs. crosswalks (20 ft) vs. stop signs (30 ft), and hill parking wheel direction (into curb downhill, away from curb uphill)."
      },
      {
        heading: "Road Sign Quick Review",
        text: "Memorize shapes: Octagon = STOP. Triangle (pointing down) = YIELD. Diamond = Warning. Pentagon = School. Pennant = No Passing. And colors: Red = Stop/Prohibited. Yellow = Warning. Orange = Work zone. Blue = Services. Green = Guide/Distance."
      },
      {
        heading: "Speed Limit Reminders",
        text: "Business/residential: 30 mph. School zones: 20 mph (when flashing). Rural roads: 55 mph. Some interstates: 70 mph. Work zones: slow down, obey posted signs. Double fine for speeding in school/work zones."
      },
      {
        heading: "Test Day Tips",
        text: "Get a good night's sleep. Read each question carefully — watch for words like 'EXCEPT', 'NOT', 'NEVER', and 'ALWAYS.' If unsure, eliminate wrong answers. Trust your studying. The test is multiple choice — you've got this!"
      }
    ],
    quiz: [
      { q: "How many correct answers are needed to pass the Florida permit test?", options: ["35 out of 50", "38 out of 50", "40 out of 50", "45 out of 50"], answer: 2 },
      { q: "Parking is prohibited within how many feet of a stop sign?", options: ["15 feet", "20 feet", "25 feet", "30 feet"], answer: 3 },
      { q: "When parked downhill next to a curb, your front wheels should point:", options: ["Away from the curb", "Into the curb", "Straight ahead", "To the left"], answer: 1 },
      { q: "What is the speed limit in a Florida school zone with a flashing light?", options: ["15 mph", "20 mph", "25 mph", "30 mph"], answer: 1 },
      { q: "Florida's Move Over Law applies to all of the following EXCEPT:", options: ["Law enforcement vehicles", "Tow trucks with lights on", "Utility vehicles with lights on", "Private vehicles stopped on the shoulder"], answer: 3 }
    ]
  }
];

const PRACTICE_TEST_QUESTIONS = [
  { q: "What is the minimum age to apply for a Florida learner's permit?", options: ["14", "15", "16", "17"], answer: 1 },
  { q: "A flashing yellow traffic light means:", options: ["Stop — the light is about to turn red", "Slow down and proceed with caution", "Yield to all traffic", "The intersection is closed"], answer: 1 },
  { q: "When must you yield the right-of-way to a pedestrian?", options: ["Only at marked crosswalks", "Only when a crossing guard is present", "At all crosswalks — marked and unmarked", "Only in school zones"], answer: 2 },
  { q: "What is the BAC limit for a Florida driver under 21?", options: ["0.08%", "0.04%", "0.02%", "0.00%"], answer: 2 },
  { q: "A solid white line between lanes means:", options: ["You may cross to change lanes", "Do not cross — lane changes discouraged", "No passing zone", "Oncoming traffic ahead"], answer: 1 },
  { q: "You are driving at 55 mph and look away for 5 seconds. How far have you traveled?", options: ["Half a block", "About 400 feet — the length of a football field", "About 100 feet", "About 250 feet"], answer: 1 },
  { q: "How many hours of supervised driving are required before getting a Class E license?", options: ["25 hours", "40 hours", "50 hours", "60 hours"], answer: 2 },
  { q: "What does a pentagon-shaped sign mean?", options: ["Railroad crossing ahead", "School zone", "No passing zone", "Yield ahead"], answer: 1 },
  { q: "When parking uphill WITHOUT a curb, your wheels should point:", options: ["Left — toward the center of the road", "Right — toward the shoulder", "Straight ahead", "Doesn't matter"], answer: 1 },
  { q: "What is the Florida speed limit in a residential area unless otherwise posted?", options: ["25 mph", "30 mph", "35 mph", "40 mph"], answer: 1 },
  { q: "Florida's Implied Consent Law means:", options: ["You voluntarily agree to any search of your vehicle", "By driving in Florida, you consent to chemical testing if suspected of DUI", "You must answer all questions from law enforcement", "You agree to allow passengers to drink in your car"], answer: 1 },
  { q: "A diamond-shaped sign indicates:", options: ["Stop ahead", "A warning or hazard", "Speed limit change", "School zone"], answer: 1 },
  { q: "You must stop for a school bus with red lights flashing unless:", options: ["You are in a hurry", "The children have already crossed", "The road is divided by a median", "You are on a highway"], answer: 2 },
  { q: "When passing a bicyclist, you must give at least:", options: ["1 foot of clearance", "2 feet of clearance", "3 feet of clearance", "5 feet of clearance"], answer: 2 },
  { q: "Florida law requires you to use headlights:", options: ["Only between midnight and 5 AM", "From sunset to sunrise and when visibility is under 1,000 feet", "Only on highways at night", "Only when it is raining heavily"], answer: 1 },
  { q: "If your car begins to hydroplane, you should:", options: ["Brake firmly to regain traction", "Ease off the gas and hold the wheel straight", "Turn the wheel sharply to correct", "Accelerate through the water"], answer: 1 },
  { q: "At a roundabout, you must yield to:", options: ["Vehicles entering from the right", "All traffic — it's a free-for-all", "Traffic already inside the roundabout", "The largest vehicle present"], answer: 2 },
  { q: "Florida's Move Over Law requires you to move over or slow down for all EXCEPT:", options: ["Police vehicles stopped on the roadside", "Tow trucks with lights flashing", "Utility workers with lights on", "A car with hazard lights pulled over privately"], answer: 3 },
  { q: "Texting while driving in Florida is:", options: ["Legal if stopped at a red light", "A secondary offense only", "A primary offense — you can be pulled over just for it", "Only illegal for drivers under 21"], answer: 2 },
  { q: "What is the minimum stopping distance you must maintain from a school bus with flashing lights?", options: ["10 feet", "15 feet", "20 feet", "25 feet"], answer: 2 },
  { q: "You may NOT pass another vehicle:", options: ["On a road with a broken center line", "On a multi-lane highway", "Within 100 feet of a railroad crossing", "When traveling at the speed limit"], answer: 2 },
  { q: "To pass the Florida permit knowledge test, you need to answer correctly:", options: ["70% of questions (35/50)", "75% of questions (37/50)", "80% of questions (40/50)", "90% of questions (45/50)"], answer: 2 },
  { q: "A 'No Passing Zone' sign has what shape?", options: ["Diamond", "Rectangle", "Pennant (5-sided, points right)", "Octagon"], answer: 2 },
  { q: "If you refuse a breath test in Florida (first offense), your license is suspended for:", options: ["6 months", "1 year", "18 months", "2 years"], answer: 1 },
  { q: "When must headlights be used in addition to nighttime hours?", options: ["Only in heavy fog", "Whenever windshield wipers are in use due to rain", "Only when visibility is under 500 feet", "Headlights are optional in light rain"], answer: 1 },
  { q: "At a 4-way stop, two cars arrive at the same time. Which car goes first?", options: ["The car going straight", "The car on the left", "The car on the right", "The heavier vehicle"], answer: 2 },
  { q: "What color are regulatory signs (like speed limit signs)?", options: ["Yellow", "Orange", "Blue", "White"], answer: 3 },
  { q: "If a tire blows out at highway speed, you should:", options: ["Brake hard and steer to the shoulder", "Grip the wheel, ease off the gas, and steer steadily", "Immediately turn off the engine", "Swerve to the left lane"], answer: 1 },
  { q: "How far from a fire hydrant is parking prohibited?", options: ["10 feet", "15 feet", "20 feet", "25 feet"], answer: 1 },
  { q: "How many hours of the 50 required supervised driving hours must occur at night?", options: ["5 hours", "10 hours", "15 hours", "20 hours"], answer: 1 },
  { q: "A green arrow traffic signal means:", options: ["Yield to all traffic before turning", "Oncoming traffic is stopped — you have a protected turn", "Pedestrians have the right of way", "Turn only if the intersection is clear"], answer: 1 },
  { q: "Motorcyclists may legally:", options: ["Share a lane with a car", "Ride two abreast in one lane", "Travel between lanes of traffic", "Exceed the speed limit by 5 mph"], answer: 1 },
  { q: "What is the 3-second following rule used for?", options: ["Judging when to merge", "Maintaining a safe following distance", "Timing yellow light decisions", "Measuring passing distance"], answer: 1 },
  { q: "An orange traffic sign typically indicates:", options: ["A warning of a natural hazard", "A construction or work zone", "A recreational area nearby", "A school zone ahead"], answer: 1 },
  { q: "If your brakes fail while driving, you should:", options: ["Immediately turn off the engine", "Pump the brakes and downshift", "Open the car door to slow down", "Honk and stop quickly"], answer: 1 },
  { q: "You may make a right turn at a red light in Florida when:", options: ["Always — no restriction", "After stopping and yielding, unless a sign prohibits it", "Only when the intersection is empty", "Only if a sign specifically permits it"], answer: 1 },
  { q: "Florida law requires front-seat passengers to wear a seat belt. This law is:", options: ["A secondary offense only", "A primary offense — police can stop you just for it", "Only enforced for drivers, not passengers", "Only required on highways"], answer: 1 },
  { q: "What does a blue traffic sign typically indicate?", options: ["Warning ahead", "Speed regulation", "Services like gas, food, or hospital", "Recreational area"], answer: 2 },
  { q: "Being awake for 18+ hours impairs driving similarly to a BAC of:", options: ["0.02%", "0.04%", "0.05%", "0.08%"], answer: 2 },
  { q: "At a railroad crossing with flashing lights, you must:", options: ["Slow down and look both ways", "Stop and wait until the crossing is clear", "Proceed quickly before the gate comes down", "Turn around and find another route"], answer: 1 },
  { q: "A vehicle is too close if, using the 3-second rule:", options: ["You reach the marker before finishing the count", "The other driver can see you", "You are within 50 feet of the car ahead", "You can see their headlights"], answer: 0 },
  { q: "Florida's aggressive driving law includes which of the following behaviors?", options: ["Driving 1 mph over the speed limit", "Failing to signal a lane change once", "Speeding combined with tailgating or erratic lane changes", "Using high beams on a dark highway"], answer: 2 },
  { q: "When can you use a handheld phone in a Florida school zone?", options: ["If you are parked", "Never while driving through a school zone", "Only for GPS navigation", "If you are running late"], answer: 1 },
  { q: "The shape of a YIELD sign is:", options: ["Octagon", "Diamond", "Downward-pointing triangle", "Rectangle"], answer: 2 },
  { q: "How long must you hold a learner's permit before getting a Class E license (under 18)?", options: ["6 months", "9 months", "12 months", "18 months"], answer: 2 },
  { q: "Which lane must you turn from when making a right turn?", options: ["Any available lane", "The rightmost lane", "The center turn lane", "The left lane"], answer: 1 },
  { q: "If an aggressive driver is following you closely, you should:", options: ["Slow down to frustrate them", "Speed up to get away", "Change lanes or turn off to let them pass", "Brake suddenly to warn them"], answer: 2 },
  { q: "Parking is prohibited within how many feet of a crosswalk at an intersection?", options: ["10 feet", "15 feet", "20 feet", "30 feet"], answer: 2 },
  { q: "A child under age 5 must be secured in:", options: ["A regular seat belt", "A booster seat only", "A federally approved child restraint (car seat)", "The back seat with just a lap belt"], answer: 2 },
  { q: "What should you do if you miss your exit at a roundabout?", options: ["Stop and back up", "Make a U-turn", "Continue around and try again", "Cut across the center island"], answer: 2 }
];

// Shuffle array
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [view, setView] = useState("home"); // home | study | quiz | practice
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [quizState, setQuizState] = useState({ current: 0, answers: [], done: false });
  const [practiceState, setPracticeState] = useState({
    questions: [],
    current: 0,
    answers: [],
    done: false,
    started: false
  });
  const [completedLessons, setCompletedLessons] = useState(() => {
    try { return JSON.parse(localStorage.getItem("fl_completed") || "[]"); } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem("fl_completed", JSON.stringify(completedLessons)); } catch {}
  }, [completedLessons]);

  function startLesson(lesson) {
    setSelectedLesson(lesson);
    setQuizState({ current: 0, answers: [], done: false });
    setView("study");
  }

  function startQuiz() {
    setQuizState({ current: 0, answers: [], done: false });
    setView("quiz");
  }

  function answerQuiz(idx) {
    const newAnswers = [...quizState.answers, idx];
    if (quizState.current + 1 >= selectedLesson.quiz.length) {
      setQuizState({ ...quizState, answers: newAnswers, done: true });
      const correct = newAnswers.filter((a, i) => a === selectedLesson.quiz[i].answer).length;
      if (correct >= Math.ceil(selectedLesson.quiz.length * 0.8) && !completedLessons.includes(selectedLesson.id)) {
        setCompletedLessons([...completedLessons, selectedLesson.id]);
      }
    } else {
      setQuizState({ ...quizState, current: quizState.current + 1, answers: newAnswers });
    }
  }

  function startPracticeTest() {
    const qs = shuffle(PRACTICE_TEST_QUESTIONS).slice(0, 50);
    setPracticeState({ questions: qs, current: 0, answers: [], done: false, started: true });
    setView("practice");
  }

  function answerPractice(idx) {
    const newAnswers = [...practiceState.answers, idx];
    if (practiceState.current + 1 >= practiceState.questions.length) {
      setPracticeState({ ...practiceState, answers: newAnswers, done: true });
    } else {
      setPracticeState({ ...practiceState, current: practiceState.current + 1, answers: newAnswers });
    }
  }

  const styles = {
    app: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a1628 0%, #0d2444 50%, #0a1628 100%)",
      fontFamily: "'Georgia', serif",
      color: "#e8e0d0",
      padding: "0 0 40px 0"
    },
    header: {
      background: "linear-gradient(90deg, #1a3a6b 0%, #0f2a52 50%, #1a3a6b 100%)",
      borderBottom: "3px solid #c8972a",
      padding: "20px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#f0c842",
      letterSpacing: 1,
      textShadow: "0 1px 6px rgba(0,0,0,0.5)"
    },
    headerSub: { fontSize: 12, color: "#9ab5d0", marginTop: 2 },
    backBtn: {
      background: "rgba(200,151,42,0.15)",
      border: "1px solid #c8972a",
      color: "#f0c842",
      padding: "6px 14px",
      borderRadius: 6,
      cursor: "pointer",
      fontSize: 13,
      fontFamily: "'Georgia', serif"
    },
    container: { maxWidth: 680, margin: "0 auto", padding: "20px 16px" },
    card: {
      background: "linear-gradient(145deg, #112040 0%, #0e1e3a 100%)",
      border: "1px solid #1e3f6f",
      borderRadius: 12,
      padding: "18px 20px",
      marginBottom: 14,
      cursor: "pointer",
      transition: "all 0.2s",
      boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
    },
    cardHeader: { display: "flex", alignItems: "center", justifyContent: "space-between" },
    cardTitle: { fontSize: 16, fontWeight: "bold", color: "#d4c4a0" },
    cardSub: { fontSize: 12, color: "#6a8aaa", marginTop: 3 },
    badge: {
      background: "#1a4a2e",
      border: "1px solid #2d7a4a",
      color: "#4dbb7a",
      borderRadius: 20,
      padding: "2px 10px",
      fontSize: 11
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#f0c842",
      marginBottom: 6,
      textAlign: "center",
      textShadow: "0 2px 8px rgba(0,0,0,0.5)"
    },
    sectionSub: {
      fontSize: 13,
      color: "#7a9bbf",
      textAlign: "center",
      marginBottom: 20
    },
    contentBlock: {
      background: "linear-gradient(145deg, #0e1e3a 0%, #0b1830 100%)",
      border: "1px solid #1e3f6f",
      borderRadius: 10,
      padding: "16px 18px",
      marginBottom: 12
    },
    contentHeading: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#c8972a",
      marginBottom: 6,
      display: "flex",
      alignItems: "center",
      gap: 6
    },
    contentText: { fontSize: 13.5, color: "#c8c0b0", lineHeight: 1.65 },
    quizCard: {
      background: "linear-gradient(145deg, #0e1e3a 0%, #0b1830 100%)",
      border: "1px solid #1e3f6f",
      borderRadius: 12,
      padding: "20px",
      marginBottom: 16
    },
    quizQ: { fontSize: 15, color: "#e8e0d0", marginBottom: 14, lineHeight: 1.5 },
    option: (selected, correct, answered, isAnswer) => ({
      display: "block",
      width: "100%",
      padding: "11px 14px",
      marginBottom: 8,
      background: answered
        ? (isAnswer ? "#1a4a2e" : selected ? "#4a1a1a" : "rgba(255,255,255,0.03)")
        : "rgba(255,255,255,0.05)",
      border: answered
        ? `1px solid ${isAnswer ? "#2d7a4a" : selected ? "#7a2d2d" : "#1e3f6f"}`
        : "1px solid #1e3f6f",
      borderRadius: 8,
      color: answered
        ? (isAnswer ? "#4dbb7a" : selected ? "#e07070" : "#888")
        : "#c8c0b0",
      cursor: answered ? "default" : "pointer",
      fontSize: 13.5,
      textAlign: "left",
      fontFamily: "'Georgia', serif",
      transition: "all 0.15s"
    }),
    progressBar: {
      background: "rgba(255,255,255,0.1)",
      borderRadius: 10,
      height: 6,
      marginBottom: 16,
      overflow: "hidden"
    },
    progressFill: (pct) => ({
      height: "100%",
      width: `${pct}%`,
      background: "linear-gradient(90deg, #c8972a, #f0c842)",
      borderRadius: 10,
      transition: "width 0.3s"
    }),
    btn: {
      background: "linear-gradient(135deg, #c8972a 0%, #f0c842 100%)",
      color: "#0a1628",
      border: "none",
      padding: "12px 28px",
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 14,
      fontWeight: "bold",
      fontFamily: "'Georgia', serif",
      display: "block",
      margin: "16px auto 0",
      boxShadow: "0 4px 14px rgba(200,151,42,0.3)"
    },
    btnOutline: {
      background: "transparent",
      color: "#f0c842",
      border: "1px solid #c8972a",
      padding: "10px 22px",
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 13,
      fontFamily: "'Georgia', serif",
      display: "inline-block",
      margin: "8px 6px 0"
    },
    scoreBox: (passed) => ({
      textAlign: "center",
      background: passed ? "rgba(26,74,46,0.4)" : "rgba(74,26,26,0.4)",
      border: `1px solid ${passed ? "#2d7a4a" : "#7a2d2d"}`,
      borderRadius: 12,
      padding: "24px 20px",
      marginBottom: 16
    }),
    scorePct: (passed) => ({
      fontSize: 48,
      fontWeight: "bold",
      color: passed ? "#4dbb7a" : "#e07070"
    }),
    practiceTestBtn: {
      background: "linear-gradient(135deg, #1a3a6b 0%, #0f2a52 100%)",
      border: "2px solid #c8972a",
      borderRadius: 12,
      padding: "20px",
      cursor: "pointer",
      textAlign: "center",
      marginBottom: 20,
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
    }
  };

  // HOME VIEW
  if (view === "home") {
    const progress = (completedLessons.length / LESSONS.length) * 100;
    return (
      <div style={styles.app}>
        <div style={styles.header}>
          <div>
            <div style={styles.headerTitle}>🌴 Florida DMV Permit Study Guide</div>
            <div style={styles.headerSub}>Jayden's Road to Getting Licensed</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 12, color: "#9ab5d0" }}>Progress</div>
            <div style={{ fontSize: 16, color: "#f0c842", fontWeight: "bold" }}>{completedLessons.length}/{LESSONS.length} lessons</div>
          </div>
        </div>

        <div style={styles.container}>
          <div style={{ marginBottom: 20 }}>
            <div style={styles.progressBar}>
              <div style={styles.progressFill(progress)} />
            </div>
            <div style={{ textAlign: "center", fontSize: 12, color: "#6a8aaa" }}>
              {completedLessons.length === LESSONS.length ? "🎉 All lessons completed! Take the practice test." : `${Math.round(progress)}% complete — one lesson per day`}
            </div>
          </div>

          <div
            style={{ ...styles.practiceTestBtn }}
            onClick={startPracticeTest}
          >
            <div style={{ fontSize: 24 }}>📝</div>
            <div style={{ fontSize: 16, fontWeight: "bold", color: "#f0c842", marginTop: 6 }}>Full Practice Test (50 Questions)</div>
            <div style={{ fontSize: 12, color: "#9ab5d0", marginTop: 4 }}>Simulated Florida DMV exam — takes about 30 min</div>
          </div>

          <div style={styles.sectionSub}>Tap a lesson below — one per day builds the best retention</div>

          {LESSONS.map((lesson) => {
            const done = completedLessons.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                style={{
                  ...styles.card,
                  borderColor: done ? "#2d7a4a" : "#1e3f6f",
                  boxShadow: done ? "0 4px 16px rgba(77,187,122,0.1)" : "0 4px 16px rgba(0,0,0,0.3)"
                }}
                onClick={() => startLesson(lesson)}
              >
                <div style={styles.cardHeader}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 20 }}>{lesson.icon}</span>
                      <div>
                        <div style={{ fontSize: 11, color: "#6a8aaa", letterSpacing: 1 }}>{lesson.day}</div>
                        <div style={styles.cardTitle}>{lesson.title}</div>
                      </div>
                    </div>
                    <div style={styles.cardSub}>{lesson.content.length} topics · {lesson.quiz.length} knowledge check questions</div>
                  </div>
                  {done ? (
                    <div style={styles.badge}>✓ Done</div>
                  ) : (
                    <div style={{ fontSize: 18, color: "#1e3f6f" }}>›</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // STUDY VIEW
  if (view === "study" && selectedLesson) {
    return (
      <div style={styles.app}>
        <div style={styles.header}>
          <button style={styles.backBtn} onClick={() => setView("home")}>← Back</button>
          <div style={{ textAlign: "center" }}>
            <div style={styles.headerTitle}>{selectedLesson.icon} {selectedLesson.title}</div>
            <div style={styles.headerSub}>{selectedLesson.day} of 10</div>
          </div>
          <div style={{ width: 60 }} />
        </div>
        <div style={styles.container}>
          {selectedLesson.content.map((block, i) => (
            <div key={i} style={styles.contentBlock}>
              <div style={styles.contentHeading}>
                <span style={{ color: "#c8972a" }}>◆</span> {block.heading}
              </div>
              <div style={styles.contentText}>{block.text}</div>
            </div>
          ))}
          <button style={styles.btn} onClick={startQuiz}>
            Take Knowledge Check →
          </button>
        </div>
      </div>
    );
  }

  // QUIZ VIEW (lesson knowledge check)
  if (view === "quiz" && selectedLesson) {
    const q = selectedLesson.quiz[quizState.current];
    const answered = quizState.answers.length > quizState.current;
    const userAnswer = quizState.answers[quizState.current];

    if (quizState.done) {
      const correct = quizState.answers.filter((a, i) => a === selectedLesson.quiz[i].answer).length;
      const pct = Math.round((correct / selectedLesson.quiz.length) * 100);
      const passed = pct >= 80;
      return (
        <div style={styles.app}>
          <div style={styles.header}>
            <button style={styles.backBtn} onClick={() => setView("home")}>← Home</button>
            <div style={styles.headerTitle}>Results</div>
            <div style={{ width: 60 }} />
          </div>
          <div style={styles.container}>
            <div style={styles.scoreBox(passed)}>
              <div style={styles.scorePct(passed)}>{pct}%</div>
              <div style={{ fontSize: 18, color: passed ? "#4dbb7a" : "#e07070", marginTop: 6 }}>
                {passed ? "✓ Passed!" : "✗ Keep Studying"}
              </div>
              <div style={{ fontSize: 13, color: "#9ab5d0", marginTop: 8 }}>
                {correct} out of {selectedLesson.quiz.length} correct
              </div>
            </div>

            {selectedLesson.quiz.map((qItem, i) => {
              const ua = quizState.answers[i];
              const correct2 = ua === qItem.answer;
              return (
                <div key={i} style={{ ...styles.contentBlock, borderColor: correct2 ? "#2d7a4a" : "#7a2d2d" }}>
                  <div style={{ fontSize: 13, color: "#c8c0b0", marginBottom: 6 }}><strong>Q{i + 1}:</strong> {qItem.q}</div>
                  <div style={{ fontSize: 12 }}>
                    <span style={{ color: "#4dbb7a" }}>✓ {qItem.options[qItem.answer]}</span>
                    {!correct2 && <span style={{ color: "#e07070", marginLeft: 12 }}>✗ You chose: {qItem.options[ua]}</span>}
                  </div>
                </div>
              );
            })}

            <div style={{ textAlign: "center", marginTop: 8 }}>
              <button style={styles.btnOutline} onClick={() => setView("study")}>Review Lesson</button>
              <button style={styles.btnOutline} onClick={() => setView("home")}>Back to Home</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={styles.app}>
        <div style={styles.header}>
          <button style={styles.backBtn} onClick={() => setView("study")}>← Lesson</button>
          <div style={styles.headerTitle}>Knowledge Check</div>
          <div style={{ fontSize: 12, color: "#9ab5d0" }}>{quizState.current + 1}/{selectedLesson.quiz.length}</div>
        </div>
        <div style={styles.container}>
          <div style={styles.progressBar}>
            <div style={styles.progressFill((quizState.current / selectedLesson.quiz.length) * 100)} />
          </div>
          <div style={styles.quizCard}>
            <div style={styles.quizQ}>{quizState.current + 1}. {q.q}</div>
            {q.options.map((opt, i) => (
              <button
                key={i}
                style={styles.option(userAnswer === i, i === q.answer, answered, i === q.answer)}
                onClick={() => !answered && answerQuiz(i)}
              >
                {answered && i === q.answer ? "✓ " : answered && userAnswer === i ? "✗ " : ""}
                {opt}
              </button>
            ))}
            {answered && quizState.current + 1 < selectedLesson.quiz.length && (
              <button style={styles.btn} onClick={() => setQuizState({ ...quizState, current: quizState.current + 1 })}>
                Next Question →
              </button>
            )}
            {answered && quizState.current + 1 >= selectedLesson.quiz.length && (
              <button style={styles.btn} onClick={() => setQuizState({ ...quizState, done: true })}>
                See Results →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // PRACTICE TEST VIEW
  if (view === "practice") {
    if (practiceState.done) {
      const correct = practiceState.answers.filter((a, i) => a === practiceState.questions[i].answer).length;
      const pct = Math.round((correct / practiceState.questions.length) * 100);
      const passed = pct >= 80;
      return (
        <div style={styles.app}>
          <div style={styles.header}>
            <button style={styles.backBtn} onClick={() => setView("home")}>← Home</button>
            <div style={styles.headerTitle}>Practice Test Results</div>
            <div style={{ width: 60 }} />
          </div>
          <div style={styles.container}>
            <div style={styles.scoreBox(passed)}>
              <div style={styles.scorePct(passed)}>{pct}%</div>
              <div style={{ fontSize: 20, color: passed ? "#4dbb7a" : "#e07070", marginTop: 6 }}>
                {passed ? "🎉 You would PASS!" : "📚 Keep Practicing"}
              </div>
              <div style={{ fontSize: 14, color: "#9ab5d0", marginTop: 8 }}>
                {correct} out of {practiceState.questions.length} correct · Need 40/50 (80%) to pass
              </div>
              {passed && <div style={{ fontSize: 13, color: "#4dbb7a", marginTop: 10 }}>You're ready for the real test! 🌴</div>}
              {!passed && <div style={{ fontSize: 13, color: "#e07070", marginTop: 10 }}>Review the lessons and try again — you've got this!</div>}
            </div>

            <div style={{ ...styles.sectionSub, textAlign: "left", marginBottom: 12 }}>Review answers below:</div>
            {practiceState.questions.map((qItem, i) => {
              const ua = practiceState.answers[i];
              const correct2 = ua === qItem.answer;
              return (
                <div key={i} style={{ ...styles.contentBlock, borderColor: correct2 ? "#2d7a4a" : "#7a2d2d", padding: "12px 14px" }}>
                  <div style={{ fontSize: 12.5, color: "#c8c0b0", marginBottom: 5 }}><strong>Q{i + 1}:</strong> {qItem.q}</div>
                  <div style={{ fontSize: 12 }}>
                    <span style={{ color: "#4dbb7a" }}>✓ {qItem.options[qItem.answer]}</span>
                    {!correct2 && <span style={{ color: "#e07070", display: "block", marginTop: 3 }}>✗ You chose: {qItem.options[ua]}</span>}
                  </div>
                </div>
              );
            })}
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <button style={styles.btnOutline} onClick={startPracticeTest}>Retake Test</button>
              <button style={styles.btnOutline} onClick={() => setView("home")}>Back to Home</button>
            </div>
          </div>
        </div>
      );
    }

    const q = practiceState.questions[practiceState.current];
    const answered = practiceState.answers.length > practiceState.current;
    const userAnswer = practiceState.answers[practiceState.current];
    const pctDone = (practiceState.current / practiceState.questions.length) * 100;

    return (
      <div style={styles.app}>
        <div style={styles.header}>
          <button style={styles.backBtn} onClick={() => setView("home")}>✕ Exit</button>
          <div style={{ textAlign: "center" }}>
            <div style={styles.headerTitle}>Florida DMV Practice Test</div>
            <div style={styles.headerSub}>Question {practiceState.current + 1} of {practiceState.questions.length}</div>
          </div>
          <div style={{ fontSize: 13, color: "#f0c842", fontWeight: "bold" }}>
            {practiceState.answers.filter((a, i) => i < practiceState.current && a === practiceState.questions[i].answer).length}/{practiceState.current}
          </div>
        </div>
        <div style={styles.container}>
          <div style={styles.progressBar}>
            <div style={styles.progressFill(pctDone)} />
          </div>
          <div style={styles.quizCard}>
            <div style={{ ...styles.quizQ, fontSize: 14 }}>{practiceState.current + 1}. {q.q}</div>
            {q.options.map((opt, i) => (
              <button
                key={i}
                style={styles.option(userAnswer === i, i === q.answer, answered, i === q.answer)}
                onClick={() => !answered && answerPractice(i)}
              >
                <strong>{["A", "B", "C", "D"][i]}.</strong> {answered && i === q.answer ? "✓ " : answered && userAnswer === i ? "✗ " : ""}{opt}
              </button>
            ))}
            {answered && practiceState.current + 1 < practiceState.questions.length && (
              <button style={styles.btn} onClick={() => setPracticeState({ ...practiceState, current: practiceState.current + 1 })}>
                Next Question →
              </button>
            )}
            {answered && practiceState.current + 1 >= practiceState.questions.length && (
              <button style={styles.btn} onClick={() => setPracticeState({ ...practiceState, done: true })}>
                See Final Score →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
