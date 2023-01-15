const ToggleSwitch = ({ toggleMode }) => {
    return (
        <label className="toggle">
            <input
                className="toggle-checkbox"
                type="checkbox"
                onClick={toggleMode}
            />
            <div className="toggle-switch"></div>
        </label>
    );
};

export default ToggleSwitch;
