function checkPowerPoint(target: Object, propertyKey: String, descriptor: any){
    console.log('Class:', target.constructor.prototype);
    console.log('Method:', propertyKey);
    console.log('Property Descriptor', descriptor);
    
   descriptor.value = function () {
    if(this.ppAvailable == 0){
        console.log(`No enough PP to use ${move?.name}!`);
    }

  }
  return descriptor
    
}
class Pokemon {
    name: string;
    ppAvailable = 1;
    constructor(name: string, ppAvailable: number) {
      this.name = name;
      this.ppAvailable = ppAvailable;
    }

    @checkPowerPoint
    fight(move: any) {
      console.log(`${this.name} used ${move?.name}!`);
      this.ppAvailable -= 1;
    }
  }
    
  const move = {name: 'thunderbolt', power: 90};
  const pikachu = new Pokemon('pikachu', 1);
  pikachu.fight(move);
  pikachu.fight(move);