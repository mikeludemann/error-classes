class MainError extends Error {

	constructor(message) {

		super(message);

		this.name = this.constructor.name;

		Error.captureStackTrace(this, this.constructor);

	}

}

class StringError extends MainError {

	constructor(error, element){

		super('The type of this data is not a string. (Type of this element: ' + typeof element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'StringError';

		this.data = { error };

	}

}

class NumberError extends MainError {

	constructor(error, element){

		super('The type of this data is not a number. (Type of this element: ' + typeof element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'NumberError';

		this.data = { error };

	}

}

class ObjectError extends MainError {

	constructor(error, element){

		super('The type of this data is not an object. (Type of this element: ' + typeof element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'ObjectError';

		this.data = { error };

	}

}

class ArrayError extends MainError {

	constructor(error, element){

		super('The type of this data is not an Array. (Type of this element: ' + typeof element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'ArrayError';

		this.data = { error };

	}

}

class BooleanError extends MainError {

	constructor(error, element){

		super('The type of this data is not a boolean. (Type of this element: ' + typeof element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'BooleanError';

		this.data = { error };

	}

}

class NullError extends MainError {

	constructor(error, element){

		super('The type of this data is not null. (Type of this element: ' + typeof element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'NullError';

		this.data = { error };

	}

}

class SymbolError extends MainError {

	constructor(error, element){

		super('The type of this data is not a Symbol. (Type of this element: ' + typeof element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'SymbolError';

		this.data = { error };

	}

}

class DateError extends MainError {

	constructor(error, element){

		super('The type of this data is not Date. (Type of this element: ' + typeof element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'DateError';

		this.data = { error };

	}

}

class FunctionError extends MainError {

	constructor(error, element){

		super('The type of this data is not a function. (Type of this element: ' + typeof element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'FunctionError';

		this.data = { error };

	}

}

class ValidationError extends MainError {

	constructor(error, element){

		super('You handle with a validation error: ' + element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'ValidationError';

		this.data = { error };

	}

	toJSON() {

		return {

			error: {
				name: this.name,
				message: this.message,
				stacktrace: this.stack
			}

		}

	}

}

class DatabaseError extends MainError {

	constructor(error, element){

		super('You handle with a database error: ' + element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'DatabaseError';

		this.data = { error };

	}

	toJSON() {

		return {

			error: {
				name: this.name,
				message: this.message,
				stacktrace: this.stack
			}

		}

	}

}

class PermissionError extends MainError {

	constructor(error, element){

		super('You handle with a permission error: ' + element + ') \n - The main error code: ' + error.code + '\n The main error message: ' + error.message + '\n The main error stack: ' + error.stack);

		this.name = 'PermissionError';

		this.data = { error };

	}

	toJSON() {

		return {

			error: {
				name: this.name,
				message: this.message,
				stacktrace: this.stack
			}

		}

	}

}

class ResourceNotFoundError extends MainError {

	constructor(resource, element) {

		super(`Resource: ${resource} - was not found.`);

		this.name = 'ResourceNotFoundError';

		this.data = { resource, element };

	}

	toJSON() {

		return {

			error: {
				name: this.name,
				message: this.message,
				stacktrace: this.stack
			}

		}

	}

}

class InternalError extends MainError {

	constructor(error) {

		super(error.message);

		this.name = 'InternalError';

		this.data = { error };

	}

	toJSON() {

		return {

			error: {
				name: this.name,
				message: this.message,
				stacktrace: this.stack
			}

		}

	}

}

module.exports = {
	StringError,
	NumberError,
	ArrayError,
	ObjectError,
	SymbolError,
	NullError,
	BooleanError,
	DateError,
	FunctionError,
	ValidationError,
	DatabaseError,
	PermissionError,
	InternalError,
	ResourceNotFoundError
};
