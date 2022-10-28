import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const cars = searchParams.get("ca");
  const colors = searchParams.get("co");
  const cities = searchParams.get("ci");
  const search = searchParams.get("se") || "";
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setSearch(input));
  // }, [input, dispatch]);

  return (
    <div>
      <form>
        <div className="my-4">
          <input
            className="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearchParams({
                ca: cars,
                co: colors,
                ci: cities,
                se: e.target.value,
              })
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
