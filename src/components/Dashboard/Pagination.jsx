import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <div className="flex justify-center w-full">
      <ReactPaginate
        breakLabel={
          <div className="w-[30px] h-[30px] text-[12px] md:w-[44px] md:h-[46px] border-[1.5px] border-[#FFCC00] rounded flex items-center justify-center md:text-xl selected-none">
            {`...`}
          </div>
        }
        nextLabel={
          <div className="w-[30px] h-[30px] text-[12px] md:w-[44px] md:h-[46px] border-[1.5px] border-[#FFCC00] rounded flex items-center justify-center md:text-xl selected-none">
            {`>`}
          </div>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={4}
        previousLabel={
          <div className="w-[30px] h-[30px] text-[12px] md:w-[44px] md:h-[46px] border-[1.5px] border-[#FFCC00] rounded flex items-center justify-center md:text-xl selected-none">
            {`<`}
          </div>
        }
        renderOnZeroPageCount={null}
        className="flex gap-2"
        pageLinkClassName="w-[30px] h-[30px] text-[12px] md:w-[44px] md:h-[46px] border-[1.5px] border-[#FFCC00] rounded flex items-center justify-center md:text-xl selected-none"
        activeClassName="bg-[#FFCC00] rounded"
      />
    </div>
  );
};

export default Pagination;
