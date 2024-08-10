import  { useState } from 'react';


const Search = () => {
    const [query, setQuery] = useState('');
    const [products] = useState([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' },
        { id: 6, name: 'Fig' },
        { id: 7, name: 'Grape' },
      ]);

      const handleInputChange = (event) => {
        setQuery(event.target.value);
      };

      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    
    return (
        <div className="p-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Search for a product..."
          value={query}
          onChange={handleInputChange}
        />
        <ul className="mt-4">
          {filteredProducts.map((product) => (
            <li key={product.id} className="border p-2 my-2">
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Search;