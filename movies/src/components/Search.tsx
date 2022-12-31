import { connectSearchBox } from 'react-instantsearch-dom';

const Search = ({ currentRefinement, refine }: any) => (
  <div className="fixed z-40 w-full backdrop-blur-md p-6 lg:p-10 border-b border-white border-opacity-20 bg-background/90">
    <input
      className="input input-bordered w-full"
      type="search"
      placeholder="Search..."
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
  </div>
);

export default connectSearchBox(Search);
