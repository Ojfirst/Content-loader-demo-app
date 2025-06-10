const InputForm = () => {
	return (
		<>
			<form action="">
				<div>
					<label htmlFor="user-name">Username</label>
					<input type="text" name="user-name" id="user-name" />
				</div>
				<div>
					<label htmlFor="user-age">Age (years)</label>
					<input type="text" name="user-age" id="user-age" />
				</div>

				<div>
					<button>Add user</button>
				</div>
			</form>
		</>
	);
};

export default InputForm;
