interface SearchBoxProps {
  placeholder: string;
  onChange?: () => void;
}

const SearchBox = (props: SearchBoxProps) => {
  return (
    <input
      className="border-2 py-2 px-8 w-96"
      onChange={props.onChange}
      placeholder={props.placeholder}
      type="text"
      autoComplete="false"
    ></input>
  );
};

export default SearchBox;
