function calculate() {
	const minimum = input.get('minimum').integer().val();
	const maximum = input.get('maximum').natural().gt('minimum').val();
	const quantity = input.get('quantity').natural().val();
	const decimals = input.get('decimals').integer().nonNegative().val();
	const duplicates = input.get('duplicates').checked().raw();
	let results = [];

	if (!duplicates && ((!decimals && quantity - 1 > maximum - minimum) || (decimals && quantity - 1 > (maximum - minimum) * Math.pow(10, decimals)))) {
		// We have some error with Duplicates, when we have integer and number of results more than available integers
		// or when we have floats and number of results more than available floats
		input.error(['maximum', 'minimum'], 'The range is too small to generate unique numbers without duplicates.');
	}

	if (!input.valid()) return;

	for (let i = 0; i < quantity; i++) {

		let random_number = this.generateRandomNumber(minimum, maximum, decimals);

		if (!duplicates) {
			while (results.includes(random_number)) {
				random_number = this.generateRandomNumber(minimum, maximum, decimals);
			}
		}

		results.push(random_number);
	}

	_('result').innerHTML = results.join(', ');
}

function generateRandomNumber(minimum, maximum, decimals) {
	return (Math.random() * (maximum - minimum) + minimum).toFixed(decimals);
}