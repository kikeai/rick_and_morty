export default function SearchBar(props) {
   console.log(props)
   return (
      <div>
      <input type='search' id='search' />
      <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
