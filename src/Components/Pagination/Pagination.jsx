import React, { useContext } from "react";
import { userContext } from "../../Contexts/UserContext";
import { FiMoreHorizontal } from "react-icons/fi";
import "./Pagination.css";

const Pagination = () => {
  const data = useContext(userContext);
  const { totalCount, agent, productsPerPage, handlePagination } = data;
  const totalPages = Math.ceil(totalCount / productsPerPage);

  return (
    <div className="pagination">
      <button onClick={handlePagination}>
        <FiMoreHorizontal />
      </button>
    </div>
  );
};

export default Pagination;
