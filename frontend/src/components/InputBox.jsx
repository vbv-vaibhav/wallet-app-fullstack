const InputBox = ({
  label,
  placeholder,
  onChange,
  onKeyDown,
  type = "text",
}) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200 hover:border-slate-600 duration-300"
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default InputBox;
