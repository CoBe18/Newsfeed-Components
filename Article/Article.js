/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Oct 30, 2019',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },



  // I fixed the paragraph on this particular section as it wasn't showing the 3rd paragraph.

  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados.  Ut aliquip ex ea commodo consequat James Castform Lotad the power that's inside Burnt Berry Makuhita.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Tide Rolls In - The Sancutuary at Kiawah Island',
    date: 'Oct 30, 2019',
    firstParagraph: `Tide Rolls In. Tide Rolls Out. Life\'s a Beach!`,

    secondParagraph: `...and speaking of beaches!  -  The Story of the Sanctuary  -  
    The Sanctuary at Kiawah Island Golf Resort, an oceanfront hotel and spa, opened off the coast of Charleston, SC in August 2004. 
    A casual but elegant building, reminiscent of a grand seaside mansion, the four-story hotel was designed to feel like it has been on Kiawah for centuries, 
    evolving and expanding from one imaginary homeowner to the next. The architect was Cooper Carry from Atlanta; the design consultant was Smith+McClane in 
    Richmond, VA; Hirsch Bedner Associates from Atlanta was the interior designer; Skanska USA from Atlanta was the general contractor; and Design Works from 
    Charleston was the landscape architect.`,

    thirdParagraph: `Using the world’s largest mechanical spade, the resort transplanted over 400 trees, including 160 fifty-foot-high Live Oaks to create a 
    sense of arrival with a centuries-old feel. The hotel site was also raised twenty feet to allow unobstructed views of the Atlantic Ocean from the ground 
    floor. The Sanctuary’s exterior combines upscale finishes of Charleston brick, stone, stucco, woods, slate, copper and ironwork.`
  },
  {
    title: 'The Sancutuary at Kiawah Island',
    date: 'Nov 01, 2019',
    firstParagraph: `The Ultimate in Curb Appeal!  -  The Sanctuary is pleased to partner with Volvo, mutually aligned in guest and driver experience. Our 
    dedication to our guests' needs coupled with an automobile company that places people first is an ideal pairing in which to discover Kiawah Island and the 
    surrounding vicinity. The Hotel maintains a limited fleet of brand-new vehicles from this respected automaker for our guests’ use on a first come, first 
    served basis. Please visit the concierge for full details.`,

    secondParagraph: `Refined Southern Hospitality!  -  
    Designed to be elegant, but not too formal, the interior is characterized by grand spaces and traditional, but light, southern décor highlighted by antiques. 
    In the lobby, ceilings soar high above hand-planked walnut flooring shaped into irregular lengths and widths, and planks installed on sleepers so the floor 
    will “give” and creak, adding even more to the effect of a seaside mansion that has stood the test of time. Take one step through The Sanctuary's doors and 
    you'll feel like you've been transported back centuries in time to a grand seaside mansion. At once elegant and welcoming, The Sanctuary Hotel exemplifies 
    gracious Southern hospitality.`,

    thirdParagraph: `Future Expansion: The Sanctuary Chapel  -   Connecting to The Sanctuary Hotel through a tranquil courtyard garden, this stately chapel with 
    seating for 150 will offer weekly nondenominational services, welcoming all hotel guests regardless of their religious affiliation. The chapel will also be 
    available as a ceremony venue for dream destination weddings.`
  },
];

//  Step 1: Create a function that creates a component. You will want your component to look like the template below: 

//   Hint: You will need to use createElement more than once here!

//   Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

//    Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.






const articlesParDiv = document.querySelector('.articles')
const expandBtn = document.querySelector('.expandButton')

data.forEach(data => {

articlesParDiv.appendChild(createArticle(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph ))

})

function createArticle(title, date, firstParagraph, secondParagraph, thirdParagraph){
  const article = document.createElement('div')
  const h2 = document.createElement('h2')
  const pDate = document.createElement('p')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const span = document.createElement('span')

  article.appendChild(h2);
  article.appendChild(pDate);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(span);

  article.classList.add("article");
  pDate.classList.add("date");
  span.classList.add("expandButton");


  h2.textContent = title;
  pDate.textContent = date;
  p1.textContent = firstParagraph;
  p2.textContent = secondParagraph;
  p3.textContent = thirdParagraph;
  span.textContent = 'expand';


/*
  Hint: You will need to use createElement more than once here!
  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.
*/
span.addEventListener('click', () => {
article.classList.toggle('article-open');
  })
  //Step 3: return the entire component. 
return article
}
  //Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.
let articles = data.map( (btn) => {
  let newArticle = createArticle(btn)
  return newArticle
})

  
//   Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.


