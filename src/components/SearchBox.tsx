interface SearchBoxProps {
  value: string;
  placeholder: string;
  onChange?: (value: string) => void;
}

const SearchBox = (props: SearchBoxProps) => {
  return (
    <input
      className="border-2 py-2 px-8 w-96"
      value={props.value}
      onChange={(e) => props.onChange && props.onChange(e.target.value)}
      placeholder={props.placeholder}
      type="text"
      autoComplete="false"
    ></input>
  );
};

export default SearchBox;
