export default function getLevel(obj) {
  if (typeof obj.health !== 'undefined') {
    const { health } = obj;

    if (health > 50) {
      return 'healthy';
    } if (health <= 50 && health >= 15) {
      return 'wounded';
    }
    return 'critical';
  }
  return null;
}
