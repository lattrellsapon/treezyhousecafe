
// All time favorite card
let classicBreakfast = document.getElementById('classic-breakfast');
let eggs = document.getElementById('eggs');
let pancakes = document.getElementById('pancakes');
let bagel = document.getElementById('bagel');
let cinnamon = document.getElementById('cinnamon');

// Burger card
let burgerCard = document.getElementById('burger-card')
let beef = document.getElementById('beef');
let chicken = document.getElementById('chicken');
let lamb = document.getElementById('lamb');
let fish = document.getElementById('fish');

// Vegetarian card
let vegetarianCard = document.getElementById('vegetarian-card');
let tomato = document.getElementById('tomato');
let scrambled = document.getElementById('scrambled');
let muffins = document.getElementById('muffins');
let chickpea = document.getElementById('chickpea');

// Cold Drinks card
let coldCard = document.getElementById('cold-card');
let chocolate = document.getElementById('chocolate');
let coffee = document.getElementById('coffee');
let latte = document.getElementById('latte');
let tea = document.getElementById('tea');

// Hot Drinks card
let hotCard = document.getElementById('hot-card');
let black = document.getElementById('black');
let cappucino = document.getElementById('cappucino');
let flat = document.getElementById('flat');
let green = document.getElementById('green');

// Dessert card
let dessertCard = document.getElementById('dessert-card');
let pudding = document.getElementById('pudding');
let oreo = document.getElementById('oreo');
let banana = document.getElementById('banana');
let ginger = document.getElementById('ginger');


// All time favorites functions

eggs.onmouseover = addEggs;
eggs.onmouseout = addClassicBreakfast;

pancakes.onmouseover = addPankcakes;
pancakes.onmouseout = addClassicBreakfast;

bagel.onmouseover = addBagel;
bagel.onmouseout = addClassicBreakfast;

cinnamon.onmouseover = addCinnamon;
cinnamon.onmouseout = addClassicBreakfast;

function addEggs()
{
    classicBreakfast.src = 'images/eggs-benedict.jpg';
}

function addPankcakes()
{
    classicBreakfast.src = 'images/pancakes.jpg';
}

function addBagel()
{
    classicBreakfast.src = 'images/bagel.jpg';
}

function addCinnamon()
{
    classicBreakfast.src = 'images/cinnamon.jpg';
}

function addClassicBreakfast()
{
    classicBreakfast.src = 'images/classic-faves.jpg';
}

// Burger card functions
beef.onmouseover = addBeef;
beef.onmouseout = addBurgerCard;

chicken.onmouseover = addChicken;
chicken.onmouseout = addBurgerCard;

lamb.onmouseover = addLamb;
lamb.onmouseout = addBurgerCard;

fish.onmouseover = addFish;
fish.onmouseout = addBurgerCard;

function addBeef()
{
    burgerCard.src = 'images/beef-burger.jpg';
}

function addChicken()
{
    burgerCard.src = 'images/chicken-burger.jpg';
}

function addLamb()
{
    burgerCard.src = 'images/lamb-burger.jpg';
}

function addFish()
{
    burgerCard.src = 'images/fish-burger.jpg';
}

function addBurgerCard()
{
    burgerCard.src = 'images/burger.jpg';
}

// Vegetarian Card Functions
tomato.onmouseover = addTomato;
tomato.onmouseout  = addVegetarianCard;

scrambled.onmouseover = addScrambled;
scrambled.onmouseout = addVegetarianCard;

muffins.onmouseover = addMuffins;
muffins.onmouseout = addVegetarianCard;

chickpea.onmouseover = addChickpea;
chickpea.onmouseout = addVegetarianCard;

function addTomato()
{
    vegetarianCard.src = 'images/tomato-omelette.jpg';
}

function addScrambled()
{
    vegetarianCard.src = 'images/scrambled.jpg';
}

function addMuffins()
{
    vegetarianCard.src = 'images/muffins.jpg';
}

function addChickpea()
{
    vegetarianCard.src = 'images/chickpea.jpg';
}

function addVegetarianCard()
{
    vegetarianCard.src = 'images/vegetarian.jpg';
}

// Cold Card Functions
chocolate.onmouseover = addChocolate;
chocolate.onmouseout = addColdCard;

coffee.onmouseover = addCoffee;
coffee.onmouseout = addColdCard;

latte.onmouseover = addLatte;
latte.onmouseout = addColdCard;

tea.onmouseover = addTea;
tea.onmouseout = addColdCard;


function addChocolate()
{
    coldCard.src = 'images/chocolate.jpg';
}

function addCoffee()
{
    coldCard.src = 'images/coffee.jpg';
}

function addLatte()
{
    coldCard.src = 'images/latte.jpg';
}

function addTea()
{
    coldCard.src = 'images/tea.jpg';
}

function addColdCard()
{
    coldCard.src = 'images/cold-drinks.jpg';
}

// Hot Card Functions
black.onmouseover = addBlack;
black.onmouseout = addHotCard;

cappucino.onmouseover = addCappucino;
cappucino.onmouseout = addHotCard;

flat.onmouseover = addFlat;
flat.onmouseout = addHotCard;

green.onmouseover = addGreen;
green.onmouseout = addHotCard;

function addBlack()
{
    hotCard.src = 'images/black.jpg';
}

function addCappucino()
{
    hotCard.src = 'images/cappucino.jpg';
}

function addFlat()
{
    hotCard.src = 'images/flat.jpg';
}

function addGreen()
{
    hotCard.src = 'images/green.jpg';
}


function addHotCard()
{
    hotCard.src = 'images/hot-drinks.jpg';
}

// Dessert Functions
pudding.onmouseover = addPudding;
pudding.onmouseout = addDessertCard;

oreo.onmouseover = addOreo;
oreo.onmouseout = addDessertCard;

banana.onmouseover = addBanana;
banana.onmouseout = addDessertCard;

ginger.onmouseover = addGinger;
ginger.onmouseout = addDessertCard;

function addPudding()
{
    dessertCard.src = 'images/pudding.jpg';
}

function addOreo()
{
    dessertCard.src = 'images/oreo.jpg';
}

function addBanana()
{
    dessertCard.src = 'images/banana.jpg';
}

function addGinger()
{
    dessertCard.src = 'images/ginger.jpg';
}

function addDessertCard()
{
    dessertCard.src = 'images/dessert.jpg';
}