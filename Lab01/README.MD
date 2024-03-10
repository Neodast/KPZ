# Lab01 Valinkevych Roman IPZ-22-2

## Preamble

Hi! I used **typescript** + **node.js** in this lab.
Maybe my code has some crutches, but that's okay. I've usually used JS and don't like C#/Java, I've been using TS for 2 months.
I prefer using interfaces and writing more code than writing a program with classes and inheritance.
P.S. : sorry for my english, i not big linguist, but i understand hindi in youtube...that have some weight.

## Main about program

### SOLID usage

#### SRP

All my classes are written according to SRP. One class have only one task like [class Tiger](./ZOO/Animals/Cats/Tiger.ts)
or [class GlassAviary](./ZOO/Aviaries/GlassAviary.ts). All classes are responsible for methods and fields related to them and perform work on them.
Methods in [Tiger class](./ZOO/Animals/Cats/Tiger.ts) do smthg with tiger and this don't touch anouther entities or do something with it. This class haven't fields who not relate with tiger.

#### OCP

All my classes open to add new features, but close to edit. I have parent [interface](./ZOO//Animals//Cats/ICat.ts) in cats classes and they can include new animals without code editing.

#### LSP

All classes have a implement parent interface and all childs can use in methods where params have parent interface like [this](./ZOO/Inventory/Inventory.ts#L14).

#### ISP

My interface [IAnimal](./ZOO/Animals/IAnimal.ts) split in others smaller interfaces like [ICat](./ZOO/Animals/Cats/ICat.ts) or [ISnake](./ZOO/Animals/Snakes/ISnake.ts), when i need edit cats i edit ICat interface and don't crush others animals classes.

#### DIP

CLasses [Tiger](./ZOO/Animals/Cats/Tiger.ts), [Meat](./ZOO/Food/Meat/Meat.ts) and [Worker](./ZOO/Workers/Worker.ts) depends from interfaces and don't implements any features in self class.

### DRY

Maybe i haven't this principle in my code, because i write many classes without parent class with basic constructions and methods, but at other aspects i realy try to do this like [theare](./ZOO/Inventory/Inventory.ts) - I'm not writing methods to get info in classes but create class which do this.

### KISS

Oh...I have very difficulty code and it hasn't excuses. Maybe i should add some boilerplaite code, but it ruine my principles!

### YAGNI

I do this, but have 2 methods in [IAnimal](./ZOO/Animals/IAnimal.ts#L9) which have some problems, but **voice** i add only because it's just funny and animals realy can voice, **eat** i left to later and this method may add nutrition system for animal and animals food and get work for workers, but in task it's haven't maters and i wasn't this.

### Composition Over Inheritance

ALL MY CLASSES do conditions in this principle and use [interfaces](./ZOO/Animals/IAnimal.ts) and [extends it](./ZOO/Animals/Dogs/IDog.ts) to get child classes.

### Program to Interfaces not Implementations

My program fully using interfaces and [implements this](./ZOO/Aviaries/CageAviary.ts#L5), i used **agregation** for this lab and use it always, this give me more choise to work with classes.

### Fail Fast

I have some [validations](./ZOO/Aviaries/GrassAviary.ts#L27) and [try-catch](./index.ts#L45) which help to detect errors and say to me what is wrong in this code.

## Sumarry

I have some problems with this lab, because i write backend using node.js 6 monthes and used to layer architecture, simple CRUDs and others backend things, but this task give me some theory and abstract task(in my opinion, i better do buisness problem then apple-banana tasks). Thanks for this subject, i promise i will get more knowlege about patterns(i learn some like strategy and etc.) and learn new pattern and up my code writing skills.
