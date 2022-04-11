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
  

    class Item{
      String name
      Int castTime
      List~class~Recipes
      +setName(string) bool
      +getName() string
      +setRecipe(class) bool
      +getRecipes() list
    }

    
  
            

    
  
[![](https://mermaid.ink/img/pako:eNqlVctugzAQ_BXLJ1DzBbmlaQ-RolYNHLk4sKVuwU7wckARfHsd84iJIX0ELsgzs49hbZ9oLBOgSxpnTKknztKC5ZEg-jErJOQZnNoFQgIsuEgJVgfol7ZcYWOozUrwnGVqAtmBkmURw4A9KMBQR_GUieiTvZTZAKYd6JMWtlVdEs8EdnU97JNMp7eFQw1z0gvBFteROL8XQ9oM15YIlg-WbASSY8kEcqz6tUedjHC1hRREworKruxFa2eNMOCUEW9dBs_VWBAXIxOG_AEyLNWE9hajHjvRG_ZXL37bc3Bvz1f1rmLkUqifyo2ZwpDnUxMesuIyY7O4M-0OY4OQD-jr_hNibNa6NDiWILSwuX881l0XnnbDlQ2o74zIqMe5vTImuZvtyojbYaY3nh3I-HU7SEtxA9i2etJYPWGHTfJJSxtmiJDxHJ1T3TFEO4j5YXwU_u8Xt4HmjzOTxj3Mzh9tU8R66ILmUOSMJ_oyMN1FFD9Ad0CX-lOfCF8RjUSteeUhYQjPCUdZ0OW7ngBYUFaiDCoR0yUWJfSk7kLpWPU3auIR3g)](https://mermaid.live/edit#pako:eNqlVctugzAQ_BXLJ1DzBbmlaQ-RolYNHLk4sKVuwU7wckARfHsd84iJIX0ELsgzs49hbZ9oLBOgSxpnTKknztKC5ZEg-jErJOQZnNoFQgIsuEgJVgfol7ZcYWOozUrwnGVqAtmBkmURw4A9KMBQR_GUieiTvZTZAKYd6JMWtlVdEs8EdnU97JNMp7eFQw1z0gvBFteROL8XQ9oM15YIlg-WbASSY8kEcqz6tUedjHC1hRREworKruxFa2eNMOCUEW9dBs_VWBAXIxOG_AEyLNWE9hajHjvRG_ZXL37bc3Bvz1f1rmLkUqifyo2ZwpDnUxMesuIyY7O4M-0OY4OQD-jr_hNibNa6NDiWILSwuX881l0XnnbDlQ2o74zIqMe5vTImuZvtyojbYaY3nh3I-HU7SEtxA9i2etJYPWGHTfJJSxtmiJDxHJ1T3TFEO4j5YXwU_u8Xt4HmjzOTxj3Mzh9tU8R66ILmUOSMJ_oyMN1FFD9Ad0CX-lOfCF8RjUSteeUhYQjPCUdZ0OW7ngBYUFaiDCoR0yUWJfSk7kLpWPU3auIR3g)
