import Lion from './ZOO/Animals/Cats/Lion';
import Inventory from './ZOO/Inventory/Inventory';
import ZOO from './ZOO/ZOO';
import GrassAviary from './ZOO/Aviaries/GrassAviary';
import GlassAviary from './ZOO/Aviaries/GlassAviary';
import Cobra from './ZOO/Animals/Snakes/Cobra';
import WoodlandAviary from './ZOO/Aviaries/WoodlandAviary';
import Baboon from './ZOO/Animals/Monkeys/Baboon';
import Worker from './ZOO/Workers/Worker';
import Position from './ZOO/Workers/Position.enum';
import Meat from './ZOO/Food/Meat/Meat';
import MeatType from './ZOO/Food/Meat/MeatType.enum';
import MeatQuality from './ZOO/Food/Meat/MeatQuality.enum';
import OrganicFeed from './ZOO/Food/OrganicFeed/OrganicFeed';
import FeedType from './ZOO/Food/OrganicFeed/FeedType.enum';

const randomZoo: ZOO = new ZOO();
// Lions aviary
const lionAviary: GrassAviary<Lion> = new GrassAviary();
lionAviary.add(new Lion(5, 'Alex', 80, 'Orange'));
lionAviary.add(new Lion(7, 'Toffi', 97, 'Dark-orange'));
lionAviary.add(new Lion(6, 'Fluppy', 97, 'Yellow-red'));
randomZoo.addAviary(lionAviary);
//Cobrass aviary
const cobraAviary: GlassAviary<Cobra> = new GlassAviary();
cobraAviary.add(new Cobra(2, 'Shacky', 1));
cobraAviary.add(new Cobra(4, 'Rick', 2));
cobraAviary.add(new Cobra(3, 'Molly', 2));
randomZoo.addAviary(cobraAviary);
//Baboons aviary
const baboonAviary: WoodlandAviary<Baboon> = new WoodlandAviary();
baboonAviary.add(new Baboon(6, 'Donald', 15));
baboonAviary.add(new Baboon(8, 'Anatoliy', 17));
baboonAviary.add(new Baboon(12, 'James', 23));
randomZoo.addAviary(baboonAviary);
//Workers
randomZoo.addWorker(new Worker('Andriy', 5, Position.Owner));
randomZoo.addWorker(new Worker('Stepan', 5, Position.Caretaker));
randomZoo.addWorker(new Worker('OlyaUA', 5, Position.Cleaner));
//Food
randomZoo.addFood(new Meat(MeatType.Beef, MeatQuality.Medium, 2, 15));
randomZoo.addFood(new Meat(MeatType.Fish, MeatQuality.Hight, 10, 4));
randomZoo.addFood(new OrganicFeed(23, FeedType.Fruits, 1));
// Inventory methods
console.log(Inventory.getAnimals(lionAviary));
console.log(Inventory.getAnimals(cobraAviary));
console.log(Inventory.getAviaries(randomZoo));
console.log(Inventory.getWorkers(randomZoo));
console.log(Inventory.getFood(randomZoo));
