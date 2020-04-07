# error-classes

Some different classes for handling the error types and more

## Examples

```js
import { StringError, NumberError, ArrayError, ObjectError, SymbolError, NullError, BooleanError, DateError, FunctionError, ValidationError, DatabaseError, PermissionError, InternalError, ResourceNotFoundError } from 'error-classes';

...

var elem = ...;

try {
	foobar();
} catch(err) {
	throw new StringError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new NumberError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new ArrayError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new ObjectError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new SymbolError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new NullError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new BooleanError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new DateError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new FunctionError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new ValidationError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new DatabaseError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new PermissionError(err, elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new ResourceNotFoundError("test", elem);
} finally {
	console.log("...");
}

try {
	foobar();
} catch(err) {
	throw new InternalError(err);
} finally {
	console.log("...");
}

...
```