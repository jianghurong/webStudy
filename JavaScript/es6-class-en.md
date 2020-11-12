The class declaration creates a new class with a given name using prototype-based inheritance.

Syntax
class name [extends otherName] {
  // class body
}

Description
The class body of a class declaration is executed in strict mode. The constructor method is optional.

Class declarations are not hoisted (unlike function declarations).

Examples
A simple class declaration
In the following example, we first define a class named Polygon, then extend it to create a class named Square.

Note that super(), used in the constructor, can only be used in constructors, and must be called before the this keyword can be used.

Attempting to declare a class twice
Re-declaring a class using the class declaration throws a SyntaxError.

class Foo {};
class Foo {}; // Uncaught SyntaxError: Identifier 'Foo' has already been declared
The same error is thrown when a class has been defined before using the class expression.

let Foo = class {};
class Foo {}; // Uncaught SyntaxError: Identifier 'Foo' has already been declared