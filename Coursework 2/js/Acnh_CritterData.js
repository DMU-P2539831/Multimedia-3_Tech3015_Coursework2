
//____________________________ BUG DATABASE ____________________________//

var CrittersBugs = [{ Type:  'Bug', Name: 'Common Butterfly ', Price: '160', Critter_Location: 'Flying', Time_Start: '4', Time_Stop: '19', N_Month_Start: '9', N_Month_Stop: '6', S_Month_Start: '3', S_Month_Stop: '12' },
{ Type:  'Bug', Name: 'Yellow Butterfly ', Price: '160', Critter_Location: 'Flying', Time_Start: '4', Time_Stop: '19', N_Month_Start: '3', N_Month_Stop: '6', S_Month_Start: '9', S_Month_Stop: '12' },
{ Type:  'Bug', Name: 'Tiger Butterfly ', Price: '240', Critter_Location: 'Flying', Time_Start: '4', Time_Stop: '19', N_Month_Start: '3', N_Month_Stop: '9', S_Month_Start: '9', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Peacock Butterfly ', Price: '2500', Critter_Location: 'Flying By Hybrid Flowers', Time_Start: '4', Time_Stop: '19', N_Month_Start: '3', N_Month_Stop: '6', S_Month_Start: '9', S_Month_Stop: '12' },
{ Type:  'Bug', Name: 'Common Bluebottle', Price: '300', Critter_Location: 'Flying', Time_Start: '4', Time_Stop: '19', N_Month_Start: '4', N_Month_Stop: '8', S_Month_Start: '10', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Paper Kite Butterfly ', Price: '1000', Critter_Location: 'Flying', Time_Start: '8', Time_Stop: '19', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Great Purple Emperor', Price: '3000', Critter_Location: 'Flying', Time_Start: '4', Time_Stop: '19', N_Month_Start: '5', N_Month_Stop: '8', S_Month_Start: '11', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Monarch Butterfly ', Price: '140', Critter_Location: 'Flying', Time_Start: '4', Time_Stop: '17', N_Month_Start: '9', N_Month_Stop: '11', S_Month_Start: '3', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Emperor Butterfly ', Price: '4000', Critter_Location: 'Flying', Time_Start: '17', Time_Stop: '8', N_Month_Start: '12', N_Month_Stop: '3', S_Month_Start: '6', S_Month_Stop: '9' },
{ Type:  'Bug', Name: 'Agrias Butterfly ', Price: '3000', Critter_Location: 'Flying', Time_Start: '8', Time_Stop: '17', N_Month_Start: '4', N_Month_Stop: '9', S_Month_Start: '10', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Rajah Brookes Birdwing', Price: '2500', Critter_Location: 'Flying', Time_Start: '8', Time_Stop: '17', N_Month_Start: '4', N_Month_Stop: '9', S_Month_Start: '10', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Queen Alexandras Birdwing', Price: '4000', Critter_Location: 'Flying', Time_Start: '8', Time_Stop: '16', N_Month_Start: '5', N_Month_Stop: '9', S_Month_Start: '11', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Moth', Price: '130', Critter_Location: 'Flying Near Light Sources', Time_Start: '19', Time_Stop: '4', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Atlas Moth', Price: '3000', Critter_Location: 'On Trees', Time_Start: '19', Time_Stop: '4', N_Month_Start: '4', N_Month_Stop: '9', S_Month_Start: '10', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Madagascan Sunset Moth', Price: '2500', Critter_Location: 'Flying', Time_Start: '8', Time_Stop: '16', N_Month_Start: '4', N_Month_Stop: '9', S_Month_Start: '10', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Long Locust', Price: '200', Critter_Location: 'On The Ground', Time_Start: '8', Time_Stop: '19', N_Month_Start: '4', N_Month_Stop: '11', S_Month_Start: '10', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Migratory Locust', Price: '600', Critter_Location: 'On The Ground', Time_Start: '8', Time_Stop: '19', N_Month_Start: '8', N_Month_Stop: '11', S_Month_Start: '2', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Rice Grasshopper', Price: '160', Critter_Location: 'On The Ground', Time_Start: '8', Time_Stop: '19', N_Month_Start: '8', N_Month_Stop: '11', S_Month_Start: '2', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Grasshopper', Price: '160', Critter_Location: 'On The Ground', Time_Start: '8', Time_Stop: '17', N_Month_Start: '7', N_Month_Stop: '9', S_Month_Start: '1', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Cricket', Price: '130', Critter_Location: 'On The Ground', Time_Start: '17', Time_Stop: '8', N_Month_Start: '9', N_Month_Stop: '11', S_Month_Start: '3', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Bell Cricket', Price: '140', Critter_Location: 'On The Ground', Time_Start: '17', Time_Stop: '8', N_Month_Start: '9', N_Month_Stop: '10', S_Month_Start: '3', S_Month_Stop: '4' },
{ Type:  'Bug', Name: 'Mantas', Price: '430', Critter_Location: 'On Flowers', Time_Start: '8', Time_Stop: '17', N_Month_Start: '3', N_Month_Stop: '11', S_Month_Start: '9', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Orchid Mantas', Price: '2400', Critter_Location: 'On White Flowers', Time_Start: '8', Time_Stop: '17', N_Month_Start: '3', N_Month_Stop: '11', S_Month_Start: '9', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Honeybee', Price: '200', Critter_Location: 'Flying', Time_Start: '8', Time_Stop: '17', N_Month_Start: '3', N_Month_Stop: '7', S_Month_Start: '9', S_Month_Stop: '1' },
{ Type:  'Bug', Name: 'Wasp', Price: '2500', Critter_Location: 'Shaking Trees', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Brown Cicada', Price: '250', Critter_Location: 'On Trees', Time_Start: '8', Time_Stop: '17', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Robust Cicada', Price: '300', Critter_Location: 'On Trees', Time_Start: '8', Time_Stop: '17', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Giant Cicada', Price: '500', Critter_Location: 'On Trees', Time_Start: '8', Time_Stop: '17', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Walker Cicada', Price: '400', Critter_Location: 'On Trees', Time_Start: '8', Time_Stop: '17', N_Month_Start: '8', N_Month_Stop: '9', S_Month_Start: '2', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Evening Cicada', Price: '550', Critter_Location: 'On Trees', Time_Start: '16', Time_Stop: '19', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Cicada Shell', Price: '10', Critter_Location: 'On Trees', Time_Start: '0', Time_Stop: '24', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Red Dragonfly', Price: '180', Critter_Location: 'Flying', Time_Start: '8', Time_Stop: '19', N_Month_Start: '9', N_Month_Stop: '10', S_Month_Start: '3', S_Month_Stop: '4' },
{ Type:  'Bug', Name: 'Darner Dragonfly', Price: '230', Critter_Location: 'Flying', Time_Start: '8', Time_Stop: '17', N_Month_Start: '4', N_Month_Stop: '10', S_Month_Start: '10', S_Month_Stop: '4' },
{ Type:  'Bug', Name: 'Banded Dragonfly', Price: '4500', Critter_Location: 'Flying', Time_Start: '8', Time_Stop: '17', N_Month_Start: '5', N_Month_Stop: '10', S_Month_Start: '11', S_Month_Stop: '4' },
{ Type:  'Bug', Name: 'Damselfy', Price: '500', Critter_Location: 'Flying', Time_Start: '0', Time_Stop: '24', N_Month_Start: '11', N_Month_Stop: '2', S_Month_Start: '5', S_Month_Stop: '8' },
{ Type:  'Bug', Name: 'Firefly', Price: '300', Critter_Location: 'Flying', Time_Start: '29', Time_Stop: '16', N_Month_Start: '6', N_Month_Stop: '6', S_Month_Start: '12', S_Month_Stop: '12' },
{ Type:  'Bug', Name: 'Mole Cricket', Price: '500', Critter_Location: 'Underground', Time_Start: '0', Time_Stop: '24', N_Month_Start: '11', N_Month_Stop: '5', S_Month_Start: '5', S_Month_Stop: '11' },
{ Type:  'Bug', Name: 'Pondskater', Price: '130', Critter_Location: 'On Fresh Water', Time_Start: '8', Time_Stop: '19', N_Month_Start: '5', N_Month_Stop: '9', S_Month_Start: '11', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Diving Beetle', Price: '800', Critter_Location: 'On Fresh Water', Time_Start: '8', Time_Stop: '19', N_Month_Start: '5', N_Month_Stop: '9', S_Month_Start: '11', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Giant Water Bug', Price: '2000', Critter_Location: 'On Fresh Water', Time_Start: '19', Time_Stop: '8', N_Month_Start: '4', N_Month_Stop: '9', S_Month_Start: '10', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Stinkbug', Price: '120', Critter_Location: 'On Flowers', Time_Start: '0', Time_Stop: '24', N_Month_Start: '3', N_Month_Stop: '10', S_Month_Start: '9', S_Month_Stop: '4' },
{ Type:  'Bug', Name: 'Man-faced Stink Bug', Price: '1000', Critter_Location: 'On Flowers', Time_Start: '19', Time_Stop: '8', N_Month_Start: '3', N_Month_Stop: '10', S_Month_Start: '9', S_Month_Stop: '4' },
{ Type:  'Bug', Name: 'Ladybug', Price: '200', Critter_Location: 'On Flowers', Time_Start: '8', Time_Stop: '17', N_Month_Start: '3', N_Month_Stop: '6', S_Month_Start: '9', S_Month_Stop: '12' },
{ Type:  'Bug', Name: 'Tiger Beetle', Price: '1500', Critter_Location: 'On The Ground', Time_Start: '0', Time_Stop: '24', N_Month_Start: '2', N_Month_Stop: '10', S_Month_Start: '8', S_Month_Stop: '4' },
{ Type:  'Bug', Name: 'Jewel Beetle', Price: '2400', Critter_Location: 'On Tree Stumps', Time_Start: '0', Time_Stop: '24', N_Month_Start: '4', N_Month_Stop: '8', S_Month_Start: '10', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Violin Beetle', Price: '450', Critter_Location: 'On Tree Stumps', Time_Start: '0', Time_Stop: '24', N_Month_Start: '9', N_Month_Stop: '11', S_Month_Start: '3', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Citrus Long-horned Beetle', Price: '350', Critter_Location: 'On Tree Stumps', Time_Start: '0', Time_Stop: '24', N_Month_Start: '0', N_Month_Stop: '12', S_Month_Start: '6', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Rosalia Batesi Beetle', Price: '3000', Critter_Location: 'On Tree Stumps', Time_Start: '0', Time_Stop: '24', N_Month_Start: '5', N_Month_Stop: '9', S_Month_Start: '11', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Blue Weevel Beetle', Price: '800', Critter_Location: 'On Palm Trees', Time_Start: '0', Time_Stop: '24', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug ', Name: 'Dung Beetle', Price: '3000', Critter_Location: 'Rolling Snowballs Along The Ground', Time_Start: '0', Time_Stop: '24', N_Month_Start: '12', N_Month_Stop: '2', S_Month_Start: '6', S_Month_Stop: '8' },
{ Type:  'Bug', Name: 'Earth-boring Dung Beetle', Price: '300', Critter_Location: 'On The Ground', Time_Start: '0', Time_Stop: '24', N_Month_Start: '7', N_Month_Stop: '9', S_Month_Start: '1', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Scarab Beetle', Price: '10000', Critter_Location: 'On Trees', Time_Start: '23', Time_Stop: '8', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Drone Beetle', Price: '200', Critter_Location: 'On Trees', Time_Start: '0', Time_Stop: '24', N_Month_Start: '6', N_Month_Stop: '8', S_Month_Start: '12', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Goliath Beetle', Price: '8000', Critter_Location: 'On Palm Trees', Time_Start: '17', Time_Stop: '8', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Saw Stag', Price: '2000', Critter_Location: 'On Trees', Time_Start: '0', Time_Stop: '24', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Miyama Stag', Price: '1000', Critter_Location: 'On Trees', Time_Start: '0', Time_Stop: '24', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Giant Stag', Price: '10000', Critter_Location: 'On Trees', Time_Start: '23', Time_Stop: '8', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Rainbow Stag', Price: '6000', Critter_Location: 'On Trees', Time_Start: '19', Time_Stop: '8', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Cyclommatus Stag', Price: '8000', Critter_Location: 'On Palm Trees', Time_Start: '17', Time_Stop: '8', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Golden Stag', Price: '12000', Critter_Location: 'On Palm Trees', Time_Start: '17', Time_Stop: '8', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Giraffe Stag', Price: '12000', Critter_Location: 'On Palm Trees', Time_Start: '17', Time_Stop: '8', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Horned Dynastid', Price: '1350', Critter_Location: 'On Palm Trees', Time_Start: '17', Time_Stop: '8', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Horned Atlas', Price: '8000', Critter_Location: 'On Palm Trees', Time_Start: '17', Time_Stop: '8', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Horned Elephant', Price: '8000', Critter_Location: 'On Palm Trees', Time_Start: '17', Time_Stop: '8', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Hprned Hercules', Price: '12000', Critter_Location: 'On Palm Trees', Time_Start: '17', Time_Stop: '8', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Bug', Name: 'Walking Stick', Price: '600', Critter_Location: 'On Trees', Time_Start: '17', Time_Stop: '19', N_Month_Start: '7', N_Month_Stop: '11', S_Month_Start: '1', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Walking Leaf', Price: '600', Critter_Location: 'Disguised As Leaves', Time_Start: '0', Time_Stop: '24', N_Month_Start: '7', N_Month_Stop: '9', S_Month_Start: '1', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Bagworm', Price: '600', Critter_Location: 'Shaking Trees', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Ant', Price: '80', Critter_Location: 'On Rotten Food', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Hermit Crab', Price: '1000', Critter_Location: 'Disguised As Shells', Time_Start: '19', Time_Stop: '8', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Wharf Roach', Price: '200', Critter_Location: 'On Rocks At The Beach', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Fly', Price: '60', Critter_Location: 'On Trash', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Mosquito', Price: '130', Critter_Location: 'Flying', Time_Start: '17', Time_Stop: '4', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Bug', Name: 'Flea', Price: '70', Critter_Location: 'On Villagers', Time_Start: '0', Time_Stop: '24', N_Month_Start: '4', N_Month_Stop: '11', S_Month_Start: '10', S_Month_Stop: '5' },
{ Type:  'Bug', Name: 'Snail', Price: '250', Critter_Location: 'On Rocks And Bushes In The Rain', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Pill Bug', Price: '250', Critter_Location: 'Hitting Rocks', Time_Start: '23', Time_Stop: '16', N_Month_Start: '9', N_Month_Stop: '6', S_Month_Start: '3', S_Month_Stop: '12' },
{ Type:  'Bug', Name: 'Centipede', Price: '300', Critter_Location: 'Hitting Rocks', Time_Start: '16', Time_Stop: '23', N_Month_Start: '9', N_Month_Stop: '6', S_Month_Start: '3', S_Month_Stop: '12' },
{ Type:  'Bug', Name: 'Spider', Price: '480', Critter_Location: 'Shaking Trees', Time_Start: '19', Time_Stop: '8', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Bug', Name: 'Tarantula', Price: '8000', Critter_Location: 'On The Ground', Time_Start: '19', Time_Stop: '4', N_Month_Start: '11', N_Month_Stop: '5', S_Month_Start: '5', S_Month_Stop: '11' },
{ Type:  'Bug', Name: 'Scorpion', Price: '8000', Critter_Location: 'On The Ground', Time_Start: '19', Time_Stop: '4', N_Month_Start: '6', N_Month_Stop: '10', S_Month_Start: '12', S_Month_Stop: '4' }];
var CrittersFish = [{ Type:  'Fish', Name: 'Bitterling', Price: '900', Critter_Location: 'River', Time_Start: '0', Time_Stop: '24', N_Month_Start: '11', N_Month_Stop: '3', S_Month_Start: '5', S_Month_Stop: '9' },
{ Type:  'Fish', Name: 'Pale Chub', Price: '200', Critter_Location: 'River', Time_Start: '9', Time_Stop: '16', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Crucian Carp', Price: '160', Critter_Location: 'River', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Dace', Price: '240', Critter_Location: 'River', Time_Start: '16', Time_Stop: '9', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Carp', Price: '300', Critter_Location: 'Pond', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Koi', Price: '4000', Critter_Location: 'Pond', Time_Start: '16', Time_Stop: '9', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Goldfish', Price: '1300', Critter_Location: 'Pond', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Pop-eyed Goldfish', Price: '1300', Critter_Location: 'Pond', Time_Start: '9', Time_Stop: '16', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Ranchu Goldfish', Price: '4500', Critter_Location: 'Pond', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Killifish', Price: '300', Critter_Location: 'Pond', Time_Start: '0', Time_Stop: '24', N_Month_Start: '5', N_Month_Stop: '8', S_Month_Start: '11', S_Month_Stop: '2' },
{ Type:  'Fish', Name: 'Crawfish', Price: '200', Critter_Location: 'Pond', Time_Start: '16', Time_Stop: '9', N_Month_Start: '5', N_Month_Stop: '9', S_Month_Start: '11', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Soft-shelled Turtle', Price: '3750', Critter_Location: 'River', Time_Start: '16', Time_Stop: '9', N_Month_Start: '8', N_Month_Stop: '9', S_Month_Start: '2', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Snapping Turtle', Price: '5000', Critter_Location: 'River', Time_Start: '9', Time_Stop: '16', N_Month_Start: '4', N_Month_Stop: '10', S_Month_Start: '10', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Tadpole', Price: '100', Critter_Location: 'Pond', Time_Start: '0', Time_Stop: '24', N_Month_Start: '3', N_Month_Stop: '7', S_Month_Start: '9', S_Month_Stop: '1' },
{ Type:  'Fish', Name: 'Frog', Price: '120', Critter_Location: 'Pond', Time_Start: '0', Time_Stop: '24', N_Month_Start: '5', N_Month_Stop: '8', S_Month_Start: '11', S_Month_Stop: '2' },
{ Type:  'Fish', Name: 'Freshwater Goby', Price: '400', Critter_Location: 'River', Time_Start: '16', Time_Stop: '9', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Loach', Price: '400', Critter_Location: 'River', Time_Start: '0', Time_Stop: '24', N_Month_Start: '3', N_Month_Stop: '5', S_Month_Start: '9', S_Month_Stop: '11' },
{ Type:  'Fish', Name: 'Catfish', Price: '800', Critter_Location: 'Pond', Time_Start: '16', Time_Stop: '9', N_Month_Start: '5', N_Month_Stop: '10', S_Month_Start: '11', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Giant Snakehead', Price: '5500', Critter_Location: 'Pond', Time_Start: '9', Time_Stop: '16', N_Month_Start: '6', N_Month_Stop: '8', S_Month_Start: '12', S_Month_Stop: '2' },
{ Type:  'Fish', Name: 'Bluegill', Price: '180', Critter_Location: 'River', Time_Start: '9', Time_Stop: '16', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Yellow Perch', Price: '300', Critter_Location: 'River', Time_Start: '0', Time_Stop: '24', N_Month_Start: '10', N_Month_Stop: '3', S_Month_Start: '4', S_Month_Stop: '9' },
{ Type:  'Fish', Name: 'Black Bass', Price: '400', Critter_Location: 'River', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Tilapia', Price: '800', Critter_Location: 'River', Time_Start: '0', Time_Stop: '24', N_Month_Start: '6', N_Month_Stop: '10', S_Month_Start: '12', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Pike', Price: '1800', Critter_Location: 'River', Time_Start: '0', Time_Stop: '24', N_Month_Start: '9', N_Month_Stop: '12', S_Month_Start: '3', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Pond Smelt', Price: '500', Critter_Location: 'River', Time_Start: '0', Time_Stop: '24', N_Month_Start: '12', N_Month_Stop: '3', S_Month_Start: '6', S_Month_Stop: '9' },
{ Type:  'Fish', Name: 'Sweetfish', Price: '900', Critter_Location: 'River', Time_Start: '0', Time_Stop: '24', N_Month_Start: '7', N_Month_Stop: '9', S_Month_Start: '1', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Cherry Salmon', Price: '1000', Critter_Location: 'River (Clifftop)', Time_Start: '16', Time_Stop: '9', N_Month_Start: '3', N_Month_Stop: '6', S_Month_Start: '9', S_Month_Stop: '12' },
{ Type:  'Fish', Name: 'Char', Price: '3800', Critter_Location: 'River (Clifftop), Pond', Time_Start: '16', Time_Stop: '9', N_Month_Start: '3', N_Month_Stop: '5', S_Month_Start: '9', S_Month_Stop: '11' },
{ Type:  'Fish', Name: 'Golden Trout', Price: '15000', Critter_Location: 'River (Clifftop)', Time_Start: '16', Time_Stop: '9', N_Month_Start: '12', N_Month_Stop: '3', S_Month_Start: '6', S_Month_Stop: '9' },
{ Type:  'Fish', Name: 'Stringfish', Price: '15000', Critter_Location: 'River (Clifftop)', Time_Start: '16', Time_Stop: '9', N_Month_Start: '9', N_Month_Stop: '9', S_Month_Start: '3', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Salmon', Price: '700', Critter_Location: 'River (Mouth)', Time_Start: '0', Time_Stop: '24', N_Month_Start: '9', N_Month_Stop: '9', S_Month_Start: '3', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'King Salmon', Price: '1800', Critter_Location: 'River (Mouth)', Time_Start: '0', Time_Stop: '24', N_Month_Start: '9', N_Month_Stop: '11', S_Month_Start: '3', S_Month_Stop: '5' },
{ Type:  'Fish', Name: 'Mitten Crab', Price: '2000', Critter_Location: 'River', Time_Start: '16', Time_Stop: '9', N_Month_Start: '4', N_Month_Stop: '11', S_Month_Start: '10', S_Month_Stop: '5' },
{ Type:  'Fish', Name: 'Guppy', Price: '1300', Critter_Location: 'River', Time_Start: '9', Time_Stop: '16', N_Month_Start: '5', N_Month_Stop: '9', S_Month_Start: '11', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Nibble Fish', Price: '1500', Critter_Location: 'River', Time_Start: '9', Time_Stop: '16', N_Month_Start: '5', N_Month_Stop: '10', S_Month_Start: '11', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Angelfish', Price: '3000', Critter_Location: 'River', Time_Start: '16', Time_Stop: '9', N_Month_Start: '5', N_Month_Stop: '10', S_Month_Start: '11', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Betta', Price: '2500', Critter_Location: 'River', Time_Start: '9', Time_Stop: '16', N_Month_Start: '4', N_Month_Stop: '11', S_Month_Start: '10', S_Month_Stop: '5' },
{ Type:  'Fish', Name: 'Neon Tetra', Price: '500', Critter_Location: 'River', Time_Start: '9', Time_Stop: '16', N_Month_Start: '5', N_Month_Stop: '10', S_Month_Start: '11', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Rainbowfish', Price: '800', Critter_Location: 'River', Time_Start: '9', Time_Stop: '16', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Piranha', Price: '2500', Critter_Location: 'River', Time_Start: '9', Time_Stop: '16', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Arowana', Price: '10000', Critter_Location: 'River', Time_Start: '16', Time_Stop: '9', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Dorado', Price: '15000', Critter_Location: 'River', Time_Start: '16', Time_Stop: '9', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Gar', Price: '600', Critter_Location: 'Pond', Time_Start: '16', Time_Stop: '9', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Arapaima', Price: '10000', Critter_Location: 'River', Time_Start: '16', Time_Stop: '9', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Saddled Bichir', Price: '4000', Critter_Location: 'River', Time_Start: '9', Time_Stop: '4', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Sturgeon', Price: '10000', Critter_Location: 'River (Mouth)', Time_Start: '0', Time_Stop: '24', N_Month_Start: '9', N_Month_Stop: '3', S_Month_Start: '3', S_Month_Stop: '9' },
{ Type:  'Fish', Name: 'Sea Butterfly', Price: '1000', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '12', N_Month_Stop: '3', S_Month_Start: '6', S_Month_Stop: '9' },
{ Type:  'Fish', Name: 'Sea Horse', Price: '1100', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '4', N_Month_Stop: '11', S_Month_Start: '10', S_Month_Stop: '5' },
{ Type:  'Fish', Name: 'Clown Fish', Price: '650', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '4', N_Month_Stop: '9', S_Month_Start: '10', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Surgeonfish', Price: '1000', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '4', N_Month_Stop: '9', S_Month_Start: '10', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Butterfly Fish', Price: '1000', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '4', N_Month_Stop: '9', S_Month_Start: '10', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Napoleonfish', Price: '10000', Critter_Location: 'Sea', Time_Start: '4', Time_Stop: '9', N_Month_Start: '7', N_Month_Stop: '8', S_Month_Start: '1', S_Month_Stop: '2' },
{ Type:  'Fish', Name: 'Zebra Turkeyfish', Price: '500', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '4', N_Month_Stop: '11', S_Month_Start: '10', S_Month_Stop: '5' },
{ Type:  'Fish', Name: 'Blowfish', Price: '5000', Critter_Location: 'Sea', Time_Start: '9', Time_Stop: '4', N_Month_Start: '11', N_Month_Stop: '2', S_Month_Start: '5', S_Month_Stop: '8' },
{ Type:  'Fish', Name: 'Puffer Fish', Price: '250', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '7', N_Month_Stop: '9', S_Month_Start: '1', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Anchovy', Price: '200', Critter_Location: 'Sea', Time_Start: '4', Time_Stop: '9', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Horse Mackerel', Price: '150', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Barred Knifejaw', Price: '5000', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '3', N_Month_Stop: '11', S_Month_Start: '9', S_Month_Stop: '5' },
{ Type:  'Fish', Name: 'Sea Bass', Price: '400', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Red Snapper', Price: '3000', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Dab', Price: '300', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '10', N_Month_Stop: '5', S_Month_Start: '4', S_Month_Stop: '11' },
{ Type:  'Fish', Name: 'Olive Flounder', Price: '800', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Squid', Price: '500', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '12', N_Month_Stop: '8', S_Month_Start: '6', S_Month_Stop: '2' },
{ Type:  'Fish', Name: 'Moray Eel', Price: '2000', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '8', N_Month_Stop: '10', S_Month_Start: '2', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Ribbon Eel', Price: '600', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '6', N_Month_Stop: '10', S_Month_Start: '12', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Tuna', Price: '7000', Critter_Location: 'Pier', Time_Start: '0', Time_Stop: '24', N_Month_Start: '11', N_Month_Stop: '4', S_Month_Start: '5', S_Month_Stop: '10' },
{ Type:  'Fish', Name: 'Blue Marlin', Price: '10000', Critter_Location: 'Pier', Time_Start: '0', Time_Stop: '24', N_Month_Start: '11', N_Month_Stop: '4', S_Month_Start: '5', S_Month_Stop: '10' },
{ Type:  'Fish', Name: 'Giant Trevally', Price: '4500', Critter_Location: 'Pier', Time_Start: '0', Time_Stop: '24', N_Month_Start: '5', N_Month_Stop: '10', S_Month_Start: '11', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Mahi-Mahi', Price: '6000', Critter_Location: 'Pier', Time_Start: '0', Time_Stop: '24', N_Month_Start: '5', N_Month_Stop: '10', S_Month_Start: '11', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Ocean Sunfish', Price: '4000', Critter_Location: 'Sea', Time_Start: '4', Time_Stop: '9', N_Month_Start: '7', N_Month_Stop: '9', S_Month_Start: '1', S_Month_Stop: '3' },
{ Type:  'Fish', Name: 'Ray', Price: '3000', Critter_Location: 'Sea', Time_Start: '4', Time_Stop: '9', N_Month_Start: '8', N_Month_Stop: '11', S_Month_Start: '2', S_Month_Stop: '5' },
{ Type:  'Fish', Name: 'Saw Shark', Price: '12000', Critter_Location: 'Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '6', N_Month_Stop: '10', S_Month_Start: '12', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Hammerhead Shark', Price: '8000', Critter_Location: 'Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '6', N_Month_Stop: '10', S_Month_Start: '12', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Great White Shark', Price: '15000', Critter_Location: 'Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '6', N_Month_Stop: '10', S_Month_Start: '12', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Whale Shark', Price: '13000', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '6', N_Month_Stop: '10', S_Month_Start: '12', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Suckerfish', Price: '1500', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '6', N_Month_Stop: '10', S_Month_Start: '12', S_Month_Stop: '4' },
{ Type:  'Fish', Name: 'Football Fish', Price: '2500', Critter_Location: 'Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '11', N_Month_Stop: '3', S_Month_Start: '5', S_Month_Stop: '9' },
{ Type:  'Fish', Name: 'Oarfish', Price: '9000', Critter_Location: 'Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '12', N_Month_Stop: '5', S_Month_Start: '6', S_Month_Stop: '11' },
{ Type:  'Fish', Name: 'Barreleye', Price: '15000', Critter_Location: 'Sea', Time_Start: '9', Time_Stop: '4', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Fish', Name: 'Coelacant', Price: '15000', Critter_Location: 'Sea (Rain)', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' }];

var CrittersSeaCreatures = [{ Type:  'Sea Creature', Name: 'Seaweed', Price: '600', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '10', N_Month_Stop: '7', S_Month_Start: '4', S_Month_Stop: '1' },
{ Type:  'Sea Creature', Name: 'Sea Grapes', Price: '900', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Sea Creature', Name: 'Sea Cucumber', Price: '500', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '11', N_Month_Stop: '4', S_Month_Start: '5', S_Month_Stop: '10' },
{ Type:  'Sea Creature', Name: 'Sea Pig', Price: '10000', Critter_Location: 'Deep Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '11', N_Month_Stop: '2', S_Month_Start: '5', S_Month_Stop: '8' },
{ Type:  'Sea Creature', Name: 'Sea Star', Price: '500', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Sea Urchin', Price: '1700', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '5', N_Month_Stop: '9', S_Month_Start: '11', S_Month_Stop: '3' },
{ Type:  'Sea Creature', Name: 'Slate Pencil Urchin', Price: '2000', Critter_Location: 'Deep Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '5', N_Month_Stop: '9', S_Month_Start: '11', S_Month_Stop: '3' },
{ Type:  'Sea Creature', Name: 'Sea Anemone', Price: '500', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Moon Jellyfish', Price: '600', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '7', N_Month_Stop: '9', S_Month_Start: '1', S_Month_Stop: '3' },
{ Type:  'Sea Creature', Name: 'Sea Slug', Price: '600', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Pearl Oyster', Price: '2800', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Mussel', Price: '1500', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '6', N_Month_Stop: '12', S_Month_Start: '12', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Oyster', Price: '1100', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '9', N_Month_Stop: '2', S_Month_Start: '3', S_Month_Stop: '8' },
{ Type:  'Sea Creature', Name: 'Scallop', Price: '1200', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Whelk', Price: '1000', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Turban Shell', Price: '1000', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '9', N_Month_Stop: '12', S_Month_Start: '3', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Abalone', Price: '2000', Critter_Location: 'Deep Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '6', N_Month_Stop: '1', S_Month_Start: '12', S_Month_Stop: '7' },
{ Type:  'Sea Creature', Name: 'Gigas Giant Clam', Price: '15000', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '5', N_Month_Stop: '9', S_Month_Start: '11', S_Month_Stop: '3' },
{ Type:  'Sea Creature', Name: 'Chambered Nautilas', Price: '1800', Critter_Location: 'Deep Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '3', N_Month_Stop: '6', S_Month_Start: '9', S_Month_Stop: '12' },
{ Type:  'Sea Creature', Name: 'Octopus', Price: '1200', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Umbrella Octopus', Price: '6000', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '3', N_Month_Stop: '5', S_Month_Start: '9', S_Month_Stop: '11' },
{ Type:  'Sea Creature', Name: 'Vampire Squid', Price: '10000', Critter_Location: 'Deep Sea', Time_Start: '17', Time_Stop: '9', N_Month_Start: '5', N_Month_Stop: '8', S_Month_Start: '11', S_Month_Stop: '2' },
{ Type:  'Sea Creature', Name: 'Firefly Squid', Price: '1400', Critter_Location: 'Deep Sea', Time_Start: '21', Time_Stop: '4', N_Month_Start: '3', N_Month_Stop: '6', S_Month_Start: '9', S_Month_Stop: '12' },
{ Type:  'Sea Creature', Name: 'Gazami Crab', Price: '2200', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '6', N_Month_Stop: '11', S_Month_Start: '12', S_Month_Stop: '5' },
{ Type:  'Sea Creature', Name: 'Dungeness Crab', Price: '1900', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '11', N_Month_Stop: '5', S_Month_Start: '5', S_Month_Stop: '11' },
{ Type:  'Sea Creature', Name: 'Snow Crab', Price: '6000', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '11', N_Month_Stop: '4', S_Month_Start: '5', S_Month_Stop: '10' },
{ Type:  'Sea Creature', Name: 'Red King Crab', Price: '8000', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '11', N_Month_Stop: '3', S_Month_Start: '5', S_Month_Stop: '9' },
{ Type:  'Sea Creature', Name: 'Acorn Barnacle', Price: '600', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Spider Crab', Price: '12000', Critter_Location: 'Deep Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '3', N_Month_Stop: '4', S_Month_Start: '9', S_Month_Stop: '10' },
{ Type:  'Sea Creature', Name: 'Tiger Prawn', Price: '3000', Critter_Location: 'Deep Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '6', N_Month_Stop: '9', S_Month_Start: '12', S_Month_Stop: '3' },
{ Type:  'Sea Creature', Name: 'Sweet Shrimp', Price: '1400', Critter_Location: 'Deep Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '9', N_Month_Stop: '2', S_Month_Start: '3', S_Month_Stop: '8' },
{ Type:  'Sea Creature', Name: 'Mantis Shrimp', Price: '2500', Critter_Location: 'Deep Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '1', N_Month_Stop: '12', S_Month_Start: '7', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Spiny Lobster', Price: '5000', Critter_Location: 'Deep Sea', Time_Start: '16', Time_Stop: '9', N_Month_Start: '10', N_Month_Stop: '12', S_Month_Start: '4', S_Month_Stop: '6' },
{ Type:  'Sea Creature', Name: 'Lobster', Price: '4500', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '4', N_Month_Stop: '6', S_Month_Start: '10', S_Month_Stop: '12' },
{ Type:  'Sea Creature', Name: 'Giant Isopod', Price: '12000', Critter_Location: 'Deep Sea', Time_Start: '9', Time_Stop: '4', N_Month_Start: '7', N_Month_Stop: '10', S_Month_Start: '1', S_Month_Stop: '4' },
{ Type:  'Sea Creature', Name: 'Horseshoe Crab', Price: '2500', Critter_Location: 'Deep Sea', Time_Start: '9', Time_Stop: '4', N_Month_Start: '7', N_Month_Stop: '9', S_Month_Start: '1', S_Month_Stop: '3' },
{ Type:  'Sea Creature', Name: 'Sea Pineapple', Price: '1500', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '4', N_Month_Stop: '8', S_Month_Start: '10', S_Month_Stop: '2' },
{ Type:  'Sea Creature', Name: 'Spotted Garden Eel', Price: '1100', Critter_Location: 'Deep Sea', Time_Start: '4', Time_Stop: '21', N_Month_Start: '5', N_Month_Stop: '10', S_Month_Start: '11', S_Month_Stop: '4' },
{ Type:  'Sea Creature', Name: 'Flatworm', Price: '700', Critter_Location: 'Deep Sea', Time_Start: '4', Time_Stop: '21', N_Month_Start: '8', N_Month_Stop: '9', S_Month_Start: '2', S_Month_Stop: '3' },
{ Type:  'Sea Creature', Name: 'Venus Flower Basket', Price: '5000', Critter_Location: 'Deep Sea', Time_Start: '0', Time_Stop: '24', N_Month_Start: '10', N_Month_Stop: '2', S_Month_Start: '4', S_Month_Stop: '8' }];

var availableBugsN = [];
var availableBugsS = [];
var availableFishN = [];
var availableFishS = [];
var availableSeaCreaturesN = [];
var availableSeaCreaturesS = [];

function updateBugs(){
  tempArray = updateAvailableCritters(CrittersBugs);
  availableBugsN = tempArray[0];
  availableBugsS = tempArray[1];
}

function updateFish(){
  tempArray = updateAvailableCritters(CrittersFish);
  availableFishN = tempArray[0];
  availableFishS = tempArray[1];
}

function updateSeaCreatures(){
  var tempArray = updateAvailableCritters(CrittersSeaCreatures);
  availableSeaCreaturesN = tempArray[0];
  availableSeaCreaturesS = tempArray[1];
}

function updateAvailableCritters(Critters){
    var North = [];
    var South = [];
    var now = new Date();
    var month = now.getMonth() + 1;
    var hour = now.getHours();

    for (let i = 0; i < Critters.length; i++) {
      addN = true;
      addS = true;
      if (Critters[i].N_Month_Start < Critters[i].N_Month_Stop){
        if (!(Critters[i].N_Month_Start <= month && Critters[i].N_Month_Stop >= month)){
          addN = false;
        }
      }
      else{
        if (!(Critters[i].N_Month_Start >= month && Critters[i].N_Month_Stop <= month)){
          addN = false;
        }
      }

      if (Critters[i].S_Month_Start <= Critters[i].S_Month_Stop){
        if (!(Critters[i].S_Month_Start <= month && Critters[i].S_Month_Stop >= month)){
          addS = false;
        }
      }
      else{
        if (!(Critters[i].S_Month_Start >= month && Critters[i].S_Month_Stop <= month)){
          addS = false;
        }
      }

      if (Critters[i].Time_Start < Critters[i].Time_Stop){
        if (!(Critters[i].Time_Start <= hour && Critters[i].Time_Stop >= hour)){
          addN = false;
          addS = false;
        }
      }
      else{
        if (!(Critters[i].Time_Start >= hour && Critters[i].Time_Stop <= hour)){
          addN = false;
          addS = false;
        }
      }

      if (addN) { North.push(Critters[i]); }
      if (addS) { South.push(Critters[i]); }
    }
    var array = [North, South]
    return (array);
  }

  function pickRandomCritters(){
  var tempArray = [];
  tempArray.push(availableBugsN[Math.floor(Math.random()*availableBugsN.length)]);
  tempArray.push(availableBugsS[Math.floor(Math.random()*availableBugsS.length)]);
  tempArray.push(availableFishN[Math.floor(Math.random()*availableFishN.length)]);
  tempArray.push(availableFishS[Math.floor(Math.random()*availableFishS.length)]);
  tempArray.push(availableSeaCreaturesN[Math.floor(Math.random()*availableSeaCreaturesN.length)]);
  tempArray.push(availableSeaCreaturesS[Math.floor(Math.random()*availableSeaCreaturesS.length)]);
  return tempArray;
}

function getCritterSRC(Critter){
  switch (Critter.Type) {
    case "Bug":
      return "img/ACNH_Critters_Pictures/bugs_" + CrittersBugs.indexOf(Critter) + ".webp";
      break;
    case "Fish":
      return "img/ACNH_Critters_Pictures/Fish_" + CrittersFish.indexOf(Critter) + ".webp";
      break;
    case "Sea Creature":
      return "img/ACNH_Critters_Pictures/SeaCreatures_" + CrittersSeaCreatures.indexOf(Critter) + ".webp";
      break;
  }
  return "Null";
}

//___________________________ BUG DATABASE COMMANDS __________________________

  var availableBugsN = [];
  var availableBugsS = [];

  function updateAvailableBugs(){
    //Clears Arrays
    availableBugsN = [];
    availableBugsS = [];
    //Grab current Time
    var now = new Date();
    var month = now.getMonth() + 1;
    var hour = now.getHours();

    //Run a for loop for all bugs
    for (let i = 0; i < CrittersBugs.length; i++) {
      //For each bug set the variable for adding them to the list to true.
      addN = true;
      addS = true;

      //Check which way round month parameters are (E.g. Apr[04]-Oct[10] or Oct[10]-Apr[04])
      if (CrittersBugs[i].N_Month_Start < CrittersBugs[i].N_Month_Stop){
        //If ascending (E.g. Apr[04]-Oct[10]) check if month is NOT inside the range
        if (!(CrittersBugs[i].N_Month_Start <= month && CrittersBugs[i].N_Month_Stop >= month)){
          //If so bug should not be added therefore set to false.
          addN = false;
        }
      }
      else{
        //If descending (E.g. Oct[10]-Apr[04]) check if month is inside the range
        if (!(CrittersBugs[i].N_Month_Start >= month && CrittersBugs[i].N_Month_Stop <= month)){
          //If so bug should not be added therefore set to false.
          addN = false;
        }
      }

      //Repeat above algorithm for the southern hemisphere
      if (CrittersBugs[i].S_Month_Start <= CrittersBugs[i].S_Month_Stop){
        if (!(CrittersBugs[i].S_Month_Start <= month && CrittersBugs[i].S_Month_Stop >= month)){
          addS = false;
        }
      }
      else{
        if (!(CrittersBugs[i].S_Month_Start >= month && CrittersBugs[i].S_Month_Stop <= month)){
          addS = false;
        }
      }

      //Check which way round hour parameters are (E.g. 11:00-13:00 or 13:00-11:00)
      if (CrittersBugs[i].Time_Start < CrittersBugs[i].Time_Stop){
            //If ascending (E.g. 11:00-13:00) check if hour is NOT inside the range
        if (!(CrittersBugs[i].Time_Start <= hour && CrittersBugs[i].Time_Stop >= hour)){
          //If so bug should not be added therefore set to false (Both hemispheres).
          addN = false;
          addS = false;
        }
      }
      else{
        //If descending (E.g. 13:00-11:00) check if hour is inside the range
        if (!(CrittersBugs[i].Time_Start >= hour && CrittersBugs[i].Time_Stop <= hour)){
          //If so bug should not be added therefore set to false (Both hemispheres).
          addN = false;
          addS = false;
        }
      }

      //If bug is still elegible after all checks add to corresponding array for each hemisphere.
      if (addN) { availableBugsN.push(CrittersBugs[i]); }
      if (addS) { availableBugsS.push(CrittersBugs[i]); }
    }

    console.log(availableBugsN);
    console.log(availableBugsS);
  }


  //___________________________________________________________________________
  //__________________________ END OF BUG DATABASE ____________________________
  //___________________________________________________________________________
