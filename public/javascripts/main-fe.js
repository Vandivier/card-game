System.config({
  transpiler: 'typescript', 
  typescriptOptions: { emitDecoratorMetadata: true }, 
  packages: {'javascripts': {defaultExtension: 'ts'}} 
});
System.import('javascripts/boot')
      .then(null, console.error.bind(console));

/*
$('body').append('Hello World...?');
*/