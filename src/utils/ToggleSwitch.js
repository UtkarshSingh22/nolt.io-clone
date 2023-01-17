const ToggleSwitch = ({ toggleMode, lightMode }) => {
    return (
        <label className="toggle">
            <input
                className="toggle-checkbox"
                type="checkbox"
                onChange={toggleMode}
                checked={!lightMode}
            />
            <div className="toggle-switch"></div>
        </label>
    );
};

export default ToggleSwitch;
