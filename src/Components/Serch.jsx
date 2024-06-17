import PropTypes from 'prop-types';

const Input = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target.text.value;
if (text != null) {
        props.handleSubmit(text);
        console.log("Submit!!!");
}
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{ width: '300px' }}
                name="text"
                type="text"
                placeholder="Please type user name in GitHub"
                required
            />
            <button type="submit">חפש</button>
        </form>
    );
};

Input.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default Input;
