# Exothium-World-JavaScript-Test
Testing mechanics for balancing 

classDiagram
    class Tile{
      String type
      List~class~Animals
      List~class~Resources
      +setType(string) bool
      +getType() string
      +setAnimals(class) bool
      +getAnimals() list
      +setResources(class) bool
      +getResources() list
    }
    Tile <|-- Animal
    Tile <|-- Resource

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
      List~class~TargetAnimals
      List~class~TargetResources
      List~class~TargetItems
      Object~Consequences~
      +setName(string) bool
      +getName() string
      +setCastTime(int) bool
      +getCastTime()) int
      +setTargetAnimals(class) bool
      +getTargetAnimals() list
      +setTargetResources(class) bool
      +getTargetResources() list
      +setTargetItems(class) bool
      +getTargetItems() list
      +setConsequences(object) bool
      +getConsequences() object
    }
    Actions <|-- Resource
    Actions <|-- Animal
    Actions <|-- Item

    class Item{
      String name
      Int castTime
      List~class~Recipes
      +setName(string) bool
      +getName() string
      +setRecipe(class) bool
      +getRecipes() list
    }
    Item <|-- Item

    
  
            

[![](https://mermaid.ink/img/pako:eNqlVU1zgjAQ_SuZnGCqf8DpxdoenHHaqXLkEmFr00JQshwci7-9IQEMBOyHHJTZ9_brze5yolEWA53RKGFSPnK2y1kaCqIebSEBT-BkDIRsMOdiR_C4h8a04hLPmnqeC56yRA4ga5BZkUfQYncSMFBRPKkj-mSbZUkL7mrQJwa2veokng7s-jWwTxKV3nZsaxhzvRBs59L8VTKQ-6_plJgMfWvjHApbPMPtyydY2sq3FEgOBRPI8djYHlRhhMsV7EDELD_aXTwr31HRNDgk2mudwXN9LIiLjmBt_g0yLOSA7zVG2VWi0eevWvy2582tPffqnUfIMyF_KjdiEgOeDm1DwPLLPI7izmY4jCVC2qIv2w-I8LxQpcGhAKEcz7ePx6LuwlNquG4t6jsj0ulxbK-6JHcxe0JcDzO8pHYgrdf1IIbiBrBl9TIt9YAcNsknhta5FfXs9A-DA9mXpANU9XXHsbLcMItriPi-e33_Nykm0PgF1WmG7mfVgNtc9dsEMA-d0BTylPFYfZN0xyHFd1Bd0Zl6VcfmM6ShKBWv2McM4SnmmOV09qaGCyaUFZhtjiKiM8wLaEj1d61mld9Uozsi)](https://mermaid.live/edit#pako:eNqlVU1zgjAQ_SuZnGCqf8DpxdoenHHaqXLkEmFr00JQshwci7-9IQEMBOyHHJTZ9_brze5yolEWA53RKGFSPnK2y1kaCqIebSEBT-BkDIRsMOdiR_C4h8a04hLPmnqeC56yRA4ga5BZkUfQYncSMFBRPKkj-mSbZUkL7mrQJwa2veokng7s-jWwTxKV3nZsaxhzvRBs59L8VTKQ-6_plJgMfWvjHApbPMPtyydY2sq3FEgOBRPI8djYHlRhhMsV7EDELD_aXTwr31HRNDgk2mudwXN9LIiLjmBt_g0yLOSA7zVG2VWi0eevWvy2582tPffqnUfIMyF_KjdiEgOeDm1DwPLLPI7izmY4jCVC2qIv2w-I8LxQpcGhAKEcz7ePx6LuwlNquG4t6jsj0ulxbK-6JHcxe0JcDzO8pHYgrdf1IIbiBrBl9TIt9YAcNsknhta5FfXs9A-DA9mXpANU9XXHsbLcMItriPi-e33_Nykm0PgF1WmG7mfVgNtc9dsEMA-d0BTylPFYfZN0xyHFd1Bd0Zl6VcfmM6ShKBWv2McM4SnmmOV09qaGCyaUFZhtjiKiM8wLaEj1d61mld9Uozsi)
