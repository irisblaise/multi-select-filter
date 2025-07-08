// Utility to decode HTML entities in a string
// Supports common named and numeric entities

const htmlEntities: { [key: string]: string } = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#x27;': "'",
  '&apos;': "'",
  '&nbsp;': ' ',
  '&eacute;': 'é',
  // Add more named entities as needed
};

export function decodeHtmlEntities(str: string): string {
  return str.replace(/&[a-zA-Z0-9#]+;/g, (entity) => {
    if (htmlEntities[entity]) return htmlEntities[entity];
    // Handle numeric entities
    if (entity.startsWith('&#x')) {
      // Hexadecimal
      return String.fromCharCode(parseInt(entity.slice(3, -1), 16));
    } else if (entity.startsWith('&#')) {
      // Decimal
      return String.fromCharCode(parseInt(entity.slice(2, -1), 10));
    }
    return entity;
  });
}
