class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, surgeMultiplier) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier || 1; // Default to no surge
    }
  
    calculatePrice(distanceMiles, durationMinutes) {
      const fareBeforeSurge = this.baseFare + (distanceMiles * this.costPerMile) + (durationMinutes * this.costPerMinute);
      const finalFare = fareBeforeSurge * this.surgeMultiplier;
      return finalFare;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator(2.5, 1.5, 0.3);
  
  const distanceMiles = 5; // Distance in miles
  const durationMinutes = 15; // Duration in minutes
  
  const price = calculator.calculatePrice(distanceMiles, durationMinutes);
  console.log(`Uber price: $${price.toFixed(2)}`);
  