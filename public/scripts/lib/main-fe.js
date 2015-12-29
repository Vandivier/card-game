System.config({
  transpiler: 'typescript', 
  typescriptOptions: { emitDecoratorMetadata: true }, 
  packages: {'scripts': {defaultExtension: 'ts'}} 
});
System.import('scripts/boot').then(null, console.error.bind(console));