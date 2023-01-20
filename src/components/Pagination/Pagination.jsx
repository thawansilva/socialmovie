import React from "react";
import { StyledButton } from "../../styles/Buttons/Buttons";

const Pagination = (props) => {
  const { limit, total, offset, setOffset, setPage } = props;
  const MAX_ITEMS = Math.min(5, total);
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  let currentPage = offset ? offset / limit + 1 : 1;
  let firstPage = Math.max(currentPage - MAX_LEFT, 1);

  function handlePageChange(page) {
    setOffset((page - 1) * limit);
    setPage(page);
  }

  return (
    <ul>
      <li key="first">
        <StyledButton
          disabled={currentPage === 1}
          title="First page"
          onClick={() => handlePageChange(1)}
        >
          {"<<"}
        </StyledButton>
      </li>

      {Array.from({ length: Math.min(MAX_ITEMS, total) })
        .map((item, index) => index + firstPage)
        .map((page) => (
          <>
            {total >= page && (
              <li key={page}>
                <StyledButton
                  title={`Page ${page}`}
                  isActive={currentPage == page ? true : false}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </StyledButton>
              </li>
            )}
          </>
        ))}

      <li key="last">
        <StyledButton
          disabled={currentPage === total}
          title="Last page"
          onClick={() => handlePageChange(total)}
        >
          {">>"}
        </StyledButton>
      </li>
    </ul>
  );
};

export default Pagination;
