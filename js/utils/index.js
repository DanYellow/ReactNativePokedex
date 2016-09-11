class Utils {
  static staticMethod() {
    return 'Méthode statique appelée';
  }
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
