# Exothium-World-JavaScript-Test
Testing mechanics for balancing 

```mermaid
classDiagram
    class Tile{
      String type
      List~object~animals
      List~object~resources
      +setType(string) bool
      +getType() string
      +setAnimals(object) bool
      +getAnimals() list
      +setResources(object) bool
      +getResources() list
    }


    class Animal{
      String name
      Int quantity
      Bool isLegendary
      +setName(string) bool
      +getName() string
      +setQuantity() bool
      +getQuantity() int
      +setLegendaryStatus() bool
      +getLegendaryStatus() bool
    }

    class Resource{
      String name
      Int quantity
      +setName(string) bool
      +getName() String
      +setQuantity() bool
      +getQuantity() int
    }

    class Actions{
      String name
      Int castTime
      List~object~targetAnimals
      List~object~targetResources
      List~object~targetItems
      Object~Consequences~
      +setName(string) bool
      +getName() string
      +setCastTime(int) bool
      +getCastTime()) int
      +setTargetAnimals(object) bool
      +getTargetAnimals() list
      +setTargetResources(object) bool
      +getTargetResources() list
      +setTargetItems(object) bool
      +getTargetItems() list
      +setConsequences(object) bool
      +getConsequences() object
    }


    class Item{
      String name
      Int castTime
      +setName(string) bool
      +getName() string
    }
    
    class Character{
      String name
      Int hp
      Int stamina
      Int hunger
      Int inventorySpace
      +setName(string) bool
      +getName() string
      +setHp(int) bool
      +getHp() int
      +setStamina(int) bool
      +getStamina() int
      +setHunger(int) bool
      +getHunger() int
      +setInventorySpace(int) bool
      +getInventorySpace() int
    }
```



    
  
            

