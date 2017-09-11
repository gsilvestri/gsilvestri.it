function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const people = [
  {
    name: "Geoff Schmidt",
    picture: "geoff.jpg",
    founder: true,
    title: "CEO",
    twitter: "immir",
    bio:
      "Geoff is both our CEO and our SMT (“Sayer of Many Things”). He raised his first venture capital round at age 20, and outside of MDG, is the proprietor of Monument, a 24-unit live/work community. He wins the prize for “Lives Closest to the Office”."
  },
  {
    name: "Nick Martin",
    picture: "nick.jpg",
    founder: true,
    title: "CTO",
    twitter: "n1mmy",
    bio:
      "Nick is a serial hobbyist and has had a wide array of interests over time, from bread baking to perfume making to ham radio and many more. He's our CTO and chief architecture whisperer, as well as our hot sauce sommelier."
  },
  {
    name: "Matt DeBergalis",
    picture: "matt.jpg",
    founder: true,
    title: "VP R&D",
    twitter: "debergalis",
    bio:
      "Matt runs Research and Development at MDG, so if you don't like our stuff, he's the person to blame. Before Meteor, he founded and ran ActBlue. Before that, he was a kernel hacker. He's also the pilot of his own Beechcraft Baron."
  },
  {
    name: "Mark Trang",
    picture: "trang.jpg",
    title: "VP Business Development",
    twitter: "marktrang",
    bio:
      "Ramen lover, certified rescue diver, adventure photographer, and omelette maker extraordinaire, Mark is in charge of business development and growth at MDG. We're still waiting to be invited to his private social club."
  },
  {
    name: "Chris Shaw",
    picture: "shaw.jpg",
    title: "Director of Talent",
    twitter: "cshaw4",
    bio:
      "Chris has recruited talent for some of the top tech companies in the world. He makes sure not only that our company has the best people, but also that our fridge has the best beer. His classic look: a space-themed graphic tee and sport coat."
  },
  {
    name: "Sashko Stubailo",
    picture: "sashko.jpg",
    title: "Engineering Manager",
    twitter: "stubailo",
    bio:
      "In addition to being an engineering manager, tech lead, and Meteor Forum champion, Sashko is also the office’s resident DJ, tennis ball collector, board game master, and only snowboarder (the rest of us know skiing is better)."
  },
  {
    name: "Zhenya Savchenko",
    picture: "zhenya.jpg",
    title: "Engineering Manager",
    twitter: "zhenyasaisquoi",
    bio:
      "Zhenya is our reigning office tennis champion, go-to guy for changing lightbulbs, and in-house polite Canadian. He wears many hats, including designer, engineer, product manager, people manager, and general custodian for the Commercial Services team."
  },
  {
    name: "Thea Lamkin",
    picture: "thea.jpg",
    title: "Developer Programs",
    twitter: "thelamkin",
    bio:
      "When not keeping our communities happy, organizing conferences, or making sure our blog is amazing, you can find Thea skiing, camping, running, biking, BARTing, etc... She’s also the office’s primary consumer of berries."
  },
  {
    name: "Ben Newman",
    picture: "ben.jpg",
    title: "Tech Lead : Meteor OSS",
    twitter: "benjamn",
    bio:
      "When not maintaining his dog's Instagram, Ben is passionate about pushing the limits of JavaScript with automatic code transformation tools like Recast and Regenerator. He's a Brooklyner, Burning Man regular, and JavaScript guru."
  },
  {
    name: "David Glasser",
    picture: "glasser.jpg",
    title: "Tech Lead : Galaxy Backend",
    twitter: "glasser",
    bio:
      "A Guardian of Galaxy and administrator of the world famous “Glasser Code Review”, David has read the source code from more Github repositories than anyone else we know. He's probably also been to more concerts than anyone else."
  },
  {
    name: "Danielle Man",
    picture: "danielle.jpg",
    title: "Core Developer",
    twitter: "danimman",
    bio:
      "“Chief Monkey Herder 🐵”. Danielle built most of this website, and didn't want to write a bio for herself."
  },
  {
    name: "Rohit Bakhshi",
    picture: "rohit.jpg",
    title: "Senior Product Manager",
    twitter: "rohit2b",
    bio:
      "Rohit is the office's champion corn hole player. When not championing our commercial products, you can find him drinking expresso and listening to live jazz. He's also the only person we know who likes to start his day at 5am."
  },
  {
    name: "Martijn Walraven",
    picture: "martijn.jpg",
    title: "Core Developer",
    twitter: "martijnwalraven",
    bio:
      "Martijn is our Swift expert. When not traveling the world to speak at conferences, he works from comfy Amsterdam. At age 18, he passed his Windows certification test without ever having touched a Windows computer. True story."
  },
  {
    name: "Alisha Ehrlich",
    picture: "alisha.jpg",
    title: "Recruiting",
    twitter: "alishaehrlich",
    bio:
      "When not improving MDG’s processes or supporting our talent acquisition and D&I efforts, Alisha loves to read, play board games, and marathon episodes on Netflix. She’s also an actress outside of MDG and saw the final dress of Hamilton!"
  },
  {
    name: "Tim Hingston",
    picture: "tim.jpg",
    title: "Tech Lead : Galaxy Frontend",
    twitter: "timbotnik",
    bio:
      "Not only is Tim the only person at MDG to have worked across the full stack of all our commercial products, he's also an accomplished guitarist who's toured with several indie bands and appeared at SXSW and on MTV."
  },
  {
    name: "Faby Zavala",
    picture: "faby.jpg",
    title: "Office Manager",
    twitter: "",
    bio:
      "Faby has been with MDG longer than most people. She does a ton of stuff behind the scenes, including knowing what everyone's favorite cuisine is, keeping our office running smoothy, and making sure everything in our kitchen is delicious!"
  },
  {
    name: "Jesse Rosenberger",
    picture: "jesse.jpg",
    title: "Core Developer",
    twitter: "abernix",
    bio:
      "A California-Helsinkilainen, Jesse has caught bug after bug: DOS, FreeBSD, startups, Burning Man, backpacking, hostels, hostel parties, hostel management, marrying a Finnish backpacker he met at a hostel — and of course, countless bugs in Meteor.js."
  },
  {
    name: "Julian Martinez",
    picture: "julian.jpg",
    title: "Technical Support Engineer",
    twitter: "julianeon",
    bio:
      "Julian is more in-touch with our customers than anyone else, and is the reason they have a great customer experience. He's also the reason we have gourmet chocolate bars in the office, and is the biggest fan of our Emacs mug."
  },
  {
    name: "Uri Goldshtein",
    picture: "uri.jpg",
    title: "Core Developer",
    twitter: "urigoldshtein",
    bio:
      "You can find Uri and his distinctive hairstyle at conferences all around the world (nickname: “Angular Jesus”). It can be hard to figure out what time zone he's in, but if he's not making OSS, he's probably couch surfing or hiking in the desert."
  },
  {
    name: "Pierre Carrier",
    picture: "pierre.jpg",
    title: "Tech Lead : Optics",
    twitter: "pcarrier",
    bio:
      "While he specialized in distributed systems, Pierre is an expert on a number of other things including typography, strategy games, and keyboards (he's designed his own, the Planck). He's also the fastest talker this side of the Rhine. "
  },
  {
    name: "Joseph Glanville",
    picture: "joseph.jpg",
    title: "Cloud Systems Engineer",
    twitter: "jpgvm",
    bio:
      "From the Australian outback, Joseph has taught us a lot about aussie animals, radio waves, and beer. He's a frequent Pacific traverser, a Guardian of Galaxy, and has brought his expertise on distributed state machines to all of our products."
  },
  {
    name: "Reza Ordoubadi",
    picture: "reza.jpg",
    title: "Marketing Ops & Analytics",
    twitter: "rezpezz",
    bio:
      "Reza is our resident marketing data analytics expert. When he’s not attending Warriors basketball games, you may find him swimming in the SF Bay around Alcatraz (assuming the sharks don't find him first)."
  },
  {
    name: "Pete Wagner",
    picture: "pete.png",
    title: "Core Developer",
    github: "thepwagner",
    bio:
      "Pete, our most authentic Canadian, joins our team after coming from Fitbit. He's a core dev and backend engineer who works primarily on Galaxy and loves poutine. We're happy to say we introduced him to Korean food."
  },
  {
    name: "Klaire Tan",
    picture: "klaire.jpg",
    title: "Intern",
    github: "klairetan",
    bio:
      "Klaire joins us from Yale’s CS program. She’s not only built several highly requested features for our commercial products Optics + Galaxy, but she’s the reason we now have kettle corn in the office and she’s been teaching us how to properly throw frisbees."
  },
  {
    name: "James Baxley",
    picture: "james.jpg",
    title: "Core Developer",
    twitter: "jbaxleyiii",
    bio:
      "Normally found in his garden tending his bee hives, James is a believer in cultivating happy and healthly communities. He is a lover of design systems, all things javascript and fixing old land rovers."
  },
  {
    name: "Peggy Rayzis",
    picture: "peggy.jpg",
    title: "Core Developer",
    twitter: "peggyrayzis",
    bio:
      "An avid speaker, traveler, and world-traveling speaker, Peggy also loves skiing, sticker designing, and of course building open source software. You may not know that she’s also a former cheerleader, a skilled DJ, and has a sweet record collection!"
  },
  {
    name: "Johanna Griffin",
    picture: "johanna.jpg",
    title: "Technical Support Engineer",
    twitter: "jkgriffin234",
    bio: "A Bay Area native, she is passionate about coding, writing and UX, along with finding new rock climbing, hiking trails, and local food. Previously a \"dog person\", she has recently re-evaluated her position and has adopted two cats."
  }
];

module.exports = {
  companyName: "Meteor Development Group",
  people: shuffle(people),
  investors: [
    "andressen.png",
    "combinator.png",
    "heavybit.png",
    "matrix.png",
    "trinity.png"
  ],
  partners1: [
    "airbnb.png",
    "facebook.png",
    "open-table.png",
    "ticketmaster.png",
    "heroku.png",
    "yelp.png",
    "ikea.png"
  ],
  partners2: [
    "udacity.png",
    "new-york-times.jpg",
    "product-hunt.png",
    "shopify.png",
    "coursera.png",
    "qualcomm.png",
    "mazda.jpg"
  ],
  jobs: [
    {
      id: "df91b724-8dc7-4f15-9beb-0554261c8379",
      title: "Product Management",
      description:
        "Define and ship new product features while working closely with our engineering team. You'll be working on steering the direction of our commercial products, Optics and Galaxy, and our open source efforts, Apollo and Meteor.",
      image: "product-management.jpg"
    },
    {
      id: "9de2d23b-fd3c-421e-92b1-26203c60f1b1",
      title: "Cloud Systems Engineering",
      description:
        "Help shape the evolution of the modern cloud architecture. You'll contribute to exciting new technologies and solve hard problems in distributed systems, scalability, cross-region coordination, and cloud orchestration.",
      image: "cloud-services.jpg"
    },
    {
      id: "e545fc3a-8cd2-4faf-8653-bf83d2e35a8b",
      title: "Design",
      description:
        "Help product developers build great apps quickly. For us, the produt developer experience is essential, and we strive to build fun and intuitive products that feel right and work well.",
      image: "design.jpg"
    },
    {
      id: "959865c0-73b9-4938-91ec-ed69fabeec24",
      title: "Frontend Application Engineering",
      description:
        "Design and build interactive components and data-rich experiences for other developers just like you. Our products are built for developers by developers, and we care deeply about creating high-quality products with well-designed user experiences.",
      image: "frontend.jpg"
    },
    {
      id: "b8ec842e-e79a-455e-a665-b312892d946e",
      title: "Backend Service Engineering",
      description:
        "Build the foundations and APIs of our tools for GraphQL and JavaScript developers. Work closely with the rest of the product development team to help shape and deliver the components that make up our commercial cloud sevices.",
      image: "backend.jpg"
    },
    {
      id: "5e11e6cf-5303-4c12-a3e7-11e5f8da4be1",
      title: "Open Source Engineering",
      description:
        "Help us build open source GraphQL and JavaScript libraries and tools, share our ideas with the GraphQL community, and collaborate with other companies and projects to move GraphQL forward.",
      image: "open-source.jpg"
    }
  ]
};
