// import { faker } from '@faker-js/faker';

// function generateIdentifier(options = {}) {
//   const {
//     allowCompound = true,  // Whether to allow dot notation like "Foo.bar"
//     style = 'mixed',       // 'camelCase', 'PascalCase', 'snake_case', or 'mixed'
//     maxDepth = 2          // Maximum depth for compound identifiers
//   } = options;

//   // Common programming terms
//   const commonWords = [
//     'count', 'index', 'value', 'data', 'result', 'total',
//     'item', 'list', 'array', 'map', 'key', 'name',
//     'status', 'type', 'id', 'size', 'length', 'config',
//     'options', 'params', 'callback', 'error', 'success'
//   ];

//   // Common prefixes/suffixes
//   const prefixes = ['get', 'set', 'is', 'has', 'should', 'can', 'will', 'did'];
//   const suffixes = ['Count', 'Index', 'Value', 'Data', 'Flag', 'Status'];

//   function getRandomWord() {
//     if (faker.number.int({ min: 0, max: 10 }) < 3) {
//       // 30% chance to use a common programming word
//       return commonWords[faker.number.int({ min: 0, max: commonWords.length - 1 })];
//     }
//     return faker.word.sample({ length: { min: 3, max: 8 } });
//   }

//   function formatWord(word, style) {
//     switch (style) {
//       case 'camelCase':
//         return word.charAt(0).toLowerCase() + word.slice(1);
//       case 'PascalCase':
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       case 'snake_case':
//         return word.toLowerCase();
//       default:
//         return word;
//     }
//   }

//   function generateSingleIdentifier() {
//     const usePrefix = faker.number.int({ min: 0, max: 10 }) < 3;
//     const useSuffix = !usePrefix && faker.number.int({ min: 0, max: 10 }) < 3;

//     let parts = [];
    
//     if (usePrefix) {
//       parts.push(prefixes[faker.number.int({ min: 0, max: prefixes.length - 1 })]);
//     }
    
//     parts.push(getRandomWord());
    
//     if (useSuffix) {
//       parts.push(suffixes[faker.number.int({ min: 0, max: suffixes.length - 1 })]);
//     }

//     let identifier = '';
//     const selectedStyle = style === 'mixed' 
//       ? ['camelCase', 'PascalCase', 'snake_case'][faker.number.int({ min: 0, max: 2 })]
//       : style;

//     if (selectedStyle === 'snake_case') {
//       identifier = parts.join('_').toLowerCase();
//     } else {
//       identifier = parts.map((part, index) => 
//         index === 0 && selectedStyle === 'camelCase'
//           ? part.toLowerCase()
//           : formatWord(part, 'PascalCase')
//       ).join('');
//     }

//     return identifier;
//   }

//   if (!allowCompound || maxDepth <= 1) {
//     return generateSingleIdentifier();
//   }

//   // Potentially generate a compound identifier
//   const depth = faker.number.int({ min: 1, max: maxDepth });
//   if (depth === 1) {
//     return generateSingleIdentifier();
//   }

//   const parts = Array.from({ length: depth }, () => generateSingleIdentifier());
//   return parts.join('.');
// }

// // Example usage:
// function generateExamples(count = 10) {
//   return Array.from({ length: count }, () => 
//     generateIdentifier({
//       allowCompound: true,
//       style: 'mixed',
//       maxDepth: 2
//     })
//   );
// }

// const examples = generateExamples();
// console.log('Sample identifiers:', examples);

// // Export both functions for use
// export { generateIdentifier, generateExamples };