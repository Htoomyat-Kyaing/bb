const CheckBox = ({ name, handleCheckBox }) => {
  return (
    <>
      <div className="flex justify-center gap-7">
        <input
          onChange={handleCheckBox}
          className="w-5 h-5 accent-black"
          type="checkbox"
          name={name}
          id=""
        />
      </div>
    </>
  );
};

export default CheckBox;
