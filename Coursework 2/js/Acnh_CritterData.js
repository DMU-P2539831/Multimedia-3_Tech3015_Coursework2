
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
