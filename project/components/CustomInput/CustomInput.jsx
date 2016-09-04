export default React => ({
	type = 'text',
	placholderText = 'Type Here',
	className = '',
}) =>
	<input
		type={type}
		placeholder={placholderText}
		className={`input ${className}`} />;
